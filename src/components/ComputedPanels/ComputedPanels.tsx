import React, { ReactElement } from "react"
import { Box, Typography } from "@material-ui/core"
import { useInputWrapper } from "../CFC/__config/styles"
import useStyles from "../DescriptiveMoneyInput/__config/styles"

/**
 * Prop definition for the ComputedPanels component
 *
 * @interface ComputedPanelsProps
 */
interface ComputedPanelsProps {
	title: string
	description: string
	value: string
	mini?: boolean
}

/**
 * Displays a title, description and a computed value
 *
 * @export
 * @param {ComputedPanelsProps} {
 * 	title,
 * 	description,
 * 	value,
 * }
 * @returns {ReactElement}
 */
export default function ComputedPanels({
	title,
	description,
	value,
	mini = false,
}: ComputedPanelsProps): ReactElement {
	const wrapperCls = useInputWrapper()
	const dmiCls = useStyles({ stacked: false, mini })

	return (
		<Box className={`${wrapperCls.wrapper} ${dmiCls.root}`} alignItems="center">
			<Box className={dmiCls.type}>
				<Typography variant="h6">{title}</Typography>
				<Typography>{description}</Typography>
			</Box>
			<Typography variant="h6">{value}</Typography>
		</Box>
	)
}
