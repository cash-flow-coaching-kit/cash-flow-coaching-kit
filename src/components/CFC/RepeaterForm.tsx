import React, { ReactElement, memo, useCallback, MouseEvent } from "react"
import { Divider, Box, Typography } from "@material-ui/core"
import Spacer from "../Spacer/Spacer"
import ComputedPanels from "../ComputedPanels"
import { addDollarSign, formatNumber } from "../../util/money/formatting"
import FormHeader from "./FormHeader"
import { RepeaterFormProps } from "./__config/shape"
import {
	useRepeaterStyles as useStyles,
	useInputWrapper,
} from "./__config/styles"
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
	beforeTotalChild,
}: RepeaterFormProps): ReactElement {
	const cls = useStyles()
	const wrapperCls = useInputWrapper()

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
				<Typography
					className={cls.mobileNotice}
					style={{ fontStyle: "italic" }}
				>
					It appears that you are using a mobile device. Remember to scroll to
					view the full form below
					<Spacer />
				</Typography>
				<Box className={cls.form}>
					<Box className={cls.formInner}>
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
					</Box>
				</Box>
				<Spacer />
				<FormActions addItem={addItem} addDisabled={isAddDisabled()} />
			</Box>
			{typeof beforeTotalChild !== "undefined" && (
				<>
					<Spacer />
					<Divider />
					<Spacer />
					{beforeTotalChild()}
				</>
			)}
			<Spacer />
			<Divider />
			<Spacer />
			<Box className={cls.body}>
				<ComputedPanels
					title="Total (exc GST)"
					wrapped={false}
					value={addDollarSign(formatNumber(`${total}`))}
				/>
				<Box className={`${wrapperCls.highlightLeft} ${cls.gst}`}>
					<ComputedPanels
						title="GST"
						mini
						wrapped={false}
						value={addDollarSign(formatNumber(`${gst}`))}
					/>
				</Box>
			</Box>
		</>
	)
})
