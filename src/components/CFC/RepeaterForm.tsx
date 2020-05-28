import React, { ReactElement } from "react"
import { Typography, Divider, Box } from "@material-ui/core"
import Spacer from "../Spacer/Spacer"
import ComputedPanels from "../ComputedPanels"
import { addDollarSign } from "../../util/money/formatting"
import FormHeader from "./FormHeader"
import { RepeaterFormProps } from "./__config/shape"
import { useRepeaterStyles as useStyles } from "./__config/styles"
import FormActions from "./FormActions"
import FormItem from "./FormItem"

export default function RepeaterForm({
	name,
	values,
	onChange,
	total,
	gst,
	addItem,
}: RepeaterFormProps): ReactElement {
	const cls = useStyles()

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
					/>
				))}
				<Spacer />
				<FormActions addItem={addItem} />
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
}
