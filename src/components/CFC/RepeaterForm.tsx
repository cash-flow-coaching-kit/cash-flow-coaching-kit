import React, { ReactElement, memo, useCallback, MouseEvent } from "react"
import { Divider, Box } from "@material-ui/core"
import Spacer from "../Spacer/Spacer"
import ComputedPanels from "../ComputedPanels"
import { addDollarSign } from "../../util/money/formatting"
import FormHeader from "./FormHeader"
import { RepeaterFormProps } from "./__config/shape"
import { useRepeaterStyles as useStyles } from "./__config/styles"
import FormActions from "./FormActions"
import FormItem from "./FormItem"
import { CashFlow } from "../../data/_config/shape"

/**
 * Repeater form using for Cash Flow items
 *
 * @export
 * @param {RepeaterFormProps} {
 * 	name,
 * 	values,
 * 	onChange,
 * 	total,
 * 	gst,
 * 	addItem,
 * 	removeItem,
 * }
 * @returns {ReactElement}
 */
export default memo(function RepeaterForm({
	name,
	values,
	onChange,
	total,
	gst,
	addItem,
	removeItem,
}: RepeaterFormProps): ReactElement {
	const cls = useStyles()

	/**
	 * Method to remove a item from the form
	 *
	 * @param {CashFlow["id"]} id
	 * @returns {void}
	 */
	const removeFormItem = useCallback(
		(id: CashFlow["id"]) => (e: MouseEvent<HTMLButtonElement>): void => {
			e.preventDefault()
			removeItem(id)
		},
		[removeItem]
	)

	/**
	 * Checks if the add new button should be disabled
	 *
	 * @returns {boolean}
	 */
	const isAddDisabled = useCallback(() => {
		return values.findIndex((item) => item.description === "") !== -1
	}, [values])

	return (
		<>
			<Box className={cls.body}>
				<FormHeader />
				{values.map((item, idx) => (
					<FormItem
						name={name}
						value={item}
						onChange={onChange}
						index={idx}
						key={item.id}
						removeItem={removeFormItem(item.id)}
					/>
				))}
				<Spacer />
				<FormActions addItem={addItem} addDisabled={isAddDisabled()} />
			</Box>
			<Spacer />
			<Divider />
			<Spacer />
			<Box className={cls.body}>
				<ComputedPanels
					title="Total (exec GST)"
					wrapped={false}
					value={addDollarSign(`${total}`)}
				/>
				<ComputedPanels
					title="GST"
					mini
					wrapped={false}
					value={addDollarSign(`${gst}`)}
				/>
			</Box>
		</>
	)
})
