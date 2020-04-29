import React, { ReactElement, useState } from "react"
import {
	ExpansionPanel,
	ExpansionPanelSummary,
	Typography,
	ExpansionPanelDetails,
	List,
	ListItem,
	ListItemText,
	makeStyles,
	Divider,
	Box,
} from "@material-ui/core"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import { generateKey, constructKey } from "../../../util/key"

const useFourQsStyles = makeStyles((theme) => ({
	list: {
		width: "100%",
		padding: 0,
	},
	listItem: {
		padding: `${theme.spacing(1)}px 0`,
	},
	listItemFirst: {
		paddingTop: 0,
	},
	listItemText: {
		margin: 0,
	},
}))

const fourQuestionsContent = [
	"1. Am I trading profitably?",
	"2. Have I put enough aside to meet my regular financial commitments?",
	"3. Does my business have enough to spend on myself and pay others?",
	"4. Is my business improving its financial position?",
]

const FourQuestions = (): ReactElement => {
	const styles = useFourQsStyles()
	const [key] = useState(generateKey())

	return (
		<ExpansionPanel defaultExpanded>
			<ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
				<Typography variant="h6">Four key questions</Typography>
			</ExpansionPanelSummary>
			<ExpansionPanelDetails>
				<List className={styles.list}>
					{fourQuestionsContent.map(
						(content: string, idx: number): ReactElement => (
							<Box key={constructKey(key, idx)} component="li">
								<ListItem
									component="div"
									className={`${styles.listItem} ${
										idx === 0 ? styles.listItemFirst : ""
									}`}
								>
									<ListItemText className={styles.listItemText}>
										{content}
									</ListItemText>
								</ListItem>
								{idx !== fourQuestionsContent.length - 1 ? <Divider /> : false}
							</Box>
						)
					)}
				</List>
			</ExpansionPanelDetails>
		</ExpansionPanel>
	)
}

export default FourQuestions
