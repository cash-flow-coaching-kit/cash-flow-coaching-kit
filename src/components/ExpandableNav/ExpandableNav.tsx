import React, { ReactElement } from "react"
import {
	ExpansionPanel,
	ExpansionPanelSummary,
	Typography,
	ExpansionPanelDetails,
} from "@material-ui/core"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import { IExpandableNavProps } from "./_config/shape"
import useExpandableNavStyles from "./_config/styles"

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
	subHeading,
	defaultExpanded = true,
	children,
}: IExpandableNavProps): ReactElement => {
	const styles = useExpandableNavStyles()

	return (
		<ExpansionPanel
			defaultExpanded={defaultExpanded}
			TransitionProps={{ unmountOnExit: true }}
		>
			<ExpansionPanelSummary
				expandIcon={<ExpandMoreIcon />}
				className={styles.summary}
			>
				<Typography variant="h6">{title}</Typography>
				{subHeading && (
					<Typography className={styles.subHeading} variant="h6">
						{subHeading}
					</Typography>
				)}
			</ExpansionPanelSummary>
			<ExpansionPanelDetails className={styles.details}>
				{children}
			</ExpansionPanelDetails>
		</ExpansionPanel>
	)
}

export default ExpandableNav
