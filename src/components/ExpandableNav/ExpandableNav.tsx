import React, { ReactElement, ReactNode } from "react"
import {
	ExpansionPanel,
	ExpansionPanelSummary,
	Typography,
	ExpansionPanelDetails,
	makeStyles,
} from "@material-ui/core"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"

export interface IExpandableNavProps {
	title?: string
	children: ReactNode
}

const useExpandableNavStyles = makeStyles((theme) => ({
	details: {
		paddingLeft: 0,
		paddingRight: 0,
		flexDirection: "column",
	},
}))

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
