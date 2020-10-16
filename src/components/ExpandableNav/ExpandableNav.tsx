import React, { ReactElement } from "react"
import {
	Accordion,
	AccordionSummary,
	Typography,
	AccordionDetails,
} from "@material-ui/core"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import { IExpandableNavProps } from "./_config/shape"
import useExpandableNavStyles from "./_config/styles"

/**
 * Sets up the core for the `Accordion` component. As a developer,
 * you'll have to provide the content for the `<AccordionDetails>`
 * component
 *
 * @param {string} {title} Title to display in the summary. Defaults to "Control Panel"
 * @param {ReactNode} {children} Content for display inside `<AccordionDetails>`
 * @returns ReactElement
 */
const ExpandableNav = ({
	subHeading,
	children,
	title = "Control Panel",
	defaultExpanded = true,
	reactourLabel = "",
}: IExpandableNavProps): ReactElement => {
	const styles = useExpandableNavStyles()

	return (
		<Accordion
			defaultExpanded={defaultExpanded}
			TransitionProps={{ unmountOnExit: true }}
			data-reactour={reactourLabel}
		>
			<AccordionSummary
				expandIcon={<ExpandMoreIcon />}
				className={styles.summary}
			>
				<Typography variant="h6" component="h3">
					{title}
				</Typography>
				{subHeading && (
					<Typography className={styles.subHeading} variant="h6" component="h3">
						{subHeading}
					</Typography>
				)}
			</AccordionSummary>
			<AccordionDetails className={styles.details}>{children}</AccordionDetails>
		</Accordion>
	)
}

export default React.memo(ExpandableNav)
