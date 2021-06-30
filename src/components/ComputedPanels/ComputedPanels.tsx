import React, { ReactElement } from "react"
import { Box, Typography, makeStyles } from "@material-ui/core"
import { useInputWrapper } from "../CFC/__config/styles"
import useStyles from "../DescriptiveMoneyInput/__config/styles"

/**
 * Prop definition for the ComputedPanels component
 *
 * @interface ComputedPanelsProps
 */
interface ComputedPanelsProps {
	title: string
	description?: string // eslint-disable-line
	value: string
	mini?: boolean // eslint-disable-line
	wrapped?: boolean // eslint-disable-line
}

const useComputedStyles = makeStyles((theme) => ({
	root: {
		[theme.breakpoints.up("md")]: {
			alignItems: "center",
		},
	},
}))

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
export default React.memo(
	({
		title,
		description,
		value,
		mini = false,
		wrapped = true,
	}: ComputedPanelsProps): ReactElement => {
		const wrapperCls = useInputWrapper()
		const dmiCls = useStyles({ stacked: false, mini })
		const computedCls = useComputedStyles()

		return (
			<Box
				className={`${wrapped ? wrapperCls.wrapper : ""} ${dmiCls.root} ${
					computedCls.root
				}`}
			>
				<Box className={dmiCls.type}>
					<Typography variant="h6" component="p">
						{title}
					</Typography>
					{description && (
						<Typography component="span">{description}</Typography>
					)}
				</Box>
				<Typography variant="h6">{value}</Typography>
			</Box>
		)
	}
)
