import React, { ReactElement } from "react"
import {
	Box,
	List,
	ListItem,
	ListItemText,
	Typography,
	makeStyles,
	Tooltip,
} from "@material-ui/core"
import InfoIcon from "@material-ui/icons/Info"
import orange from "@material-ui/core/colors/orange"
import useFourQsStyles from "../HealthCheck/FourQuestions/_config/styles"
import ExpandableNav from "../ExpandableNav"
import { fourQuestionsContent } from "../HealthCheck/_config/data"
import { ICFCState } from "../../state/CFC/shape"
import { addDollarSign, formatNumber } from "../../util/money/formatting"

type CFC4QsProps = {
	values: ICFCState["questionValues"]
}

const tooltipContent = [
	"Total Cash In (exc GST) – Total Cash Out (exc GST).",
	"GST on Sales – GST on Purchases + PAYG Withholding + Super + Income Tax or Company Tax.",
	"Opening Balance + Cash Surplus (exc GST) – Income Tax or Company Tax.",
	"Total net assets (later period, eg. Forecast) – Total net assets (earlier period, eg. Review).",
]

const useStyles = makeStyles((theme) => ({
	valueText: {
		fontWeight: theme.typography.fontWeightMedium,
		marginTop: "4px",
		display: "flex",
		alignItems: "center",
		"& svg": {
			marginLeft: theme.spacing(1),
		},
	},
	questionTwo: {
		position: "relative",
		"&:before": {
			content: "''",
			width: "5px",
			background: orange[500],
			height: "100%",
			position: "absolute",
			top: "0px",
			left: `-${theme.spacing(2)}px`,
		},
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
			return addDollarSign(formatNumber(`${vals[idx]}`))
		}
		return idx === 3
			? "Compare two canvasses for different dates to find out."
			: addDollarSign("0")
	}

	return (
		<ExpandableNav title="Four key questions">
			<Box className={styles.box}>
				<List className={styles.list}>
					{fourQuestionsContent.map(
						(content: string, idx: number): ReactElement => (
							<Box key={content} component="li">
								<ListItem
									component="div"
									className={`${styles.listItem} ${
										idx === 0 ? styles.listItemFirst : ""
									} ${idx === 1 ? cls.questionTwo : ""}`}
								>
									<ListItemText className={styles.listItemText}>
										{`${idx + 1}. ${content}`}
										<Typography className={cls.valueText}>
											{getValueText(idx)}
											<Tooltip title={tooltipContent[idx]}>
												<InfoIcon color="primary" />
											</Tooltip>
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
