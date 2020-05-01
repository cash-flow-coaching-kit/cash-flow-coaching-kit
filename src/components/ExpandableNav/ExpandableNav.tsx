import React, { ReactElement, ReactNode } from "react"
import {
	ExpansionPanel,
	ExpansionPanelSummary,
	Typography,
	ExpansionPanelDetails,
	makeStyles,
} from "@material-ui/core"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"

/**
 * Prop interface for `<ExpandableNav>`
 *
 * @export
 * @interface IExpandableNavProps
 */
export interface IExpandableNavProps {
	title?: string
	children: ReactNode
}

// Styles for the Expandable nav
const useExpandableNavStyles = makeStyles((theme) => ({
	details: {
		paddingLeft: 0,
		paddingRight: 0,
		flexDirection: "column",
	},
}))

/**
 * Sets up the core for the `ExpansionPanel` component. As a developer,
 * you'll have to provide the content for the `<ExpansionPanelDetails>`
 * component
 *
 * @param {string} {title} Title to display in the summary. Defaults to "Control Panel"
 * @param {ReactNode} {children} Content for display inside `<ExpansionPanelDetails>`
 * @returns ReactElement
 */
const ExpandableNav = ({
	title = "Control Panel",
	children,
}: IExpandableNavProps): ReactElement => {
	const styles = useExpandableNavStyles()

	return (
		<ExpansionPanel defaultExpanded>
			<ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
				<Typography variant="h6">{title}</Typography>
			</ExpansionPanelSummary>
			<ExpansionPanelDetails className={styles.details}>
				{children}
			</ExpansionPanelDetails>
		</ExpansionPanel>
	)
}

export default ExpandableNav
