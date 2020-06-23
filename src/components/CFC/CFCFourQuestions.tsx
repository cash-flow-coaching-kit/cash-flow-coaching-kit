import React, { ReactElement } from "react"
import {
	Box,
	List,
	ListItem,
	ListItemText,
	Typography,
	makeStyles,
} from "@material-ui/core"
import useFourQsStyles from "../HealthCheck/FourQuestions/_config/styles"
import ExpandableNav from "../ExpandableNav"
import { fourQuestionsContent } from "../HealthCheck/_config/data"
import { ICFCState } from "../../state/CFC/shape"
import { addDollarSign } from "../../util/money/formatting"

type CFC4QsProps = {
	values: ICFCState["questionValues"]
}

const useStyles = makeStyles((theme) => ({
	valueText: {
		fontWeight: theme.typography.fontWeightMedium,
		marginTop: "4px",
	},
}))

export default function CFCFourQuestions({
	values,
}: CFC4QsProps): ReactElement {
	const styles = useFourQsStyles()
	const cls = useStyles()

	function getValueText(idx: number): string {
		const vals = Object.values(values)
		if (typeof vals[idx] !== "undefined") {
			return addDollarSign(`${vals[idx]}`)
		}
		return idx === 3
			? "Compare two canvasses for different dates to find out."
			: addDollarSign("0")
	}

	return (
		<ExpandableNav
			title="Four key questions"
			reactourLabel="cfc-four-questions"
		>
			<Box className={styles.box}>
				<List className={styles.list}>
					{fourQuestionsContent.map(
						(content: string, idx: number): ReactElement => (
							<Box key={content} component="li">
								<ListItem
									component="div"
									className={`${styles.listItem} ${
										idx === 0 ? styles.listItemFirst : ""
									}`}
								>
									<ListItemText className={styles.listItemText}>
										{`${idx + 1}. ${content}`}
										<Typography className={cls.valueText}>
											{getValueText(idx)}
										</Typography>
									</ListItemText>
								</ListItem>
							</Box>
						)
					)}
				</List>
			</Box>
		</ExpandableNav>
	)
}
