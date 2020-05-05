import React, { ReactElement } from "react"
import {
	Typography,
	Grid,
	makeStyles,
	List,
	Card,
	CardHeader,
	CardActions,
	CardMedia,
	Container,
	Button,
	ExpansionPanel,
	ExpansionPanelSummary,
	ExpansionPanelDetails,
} from "@material-ui/core"
import SectionTitle from "../../components/SectionTitle"
import { PrivatePage, PageContainer } from "../../components/Layouts"
import PageTip from "../../components/PageTip"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import PictureAsPdf from "@material-ui/icons/PictureAsPdf"

const useDTStyles = makeStyles((theme) => ({
	tagline: {
		marginBottom: theme.spacing(4),
	},
	container: {
		paddingTop: theme.spacing(5),
	},
	grid: {
		paddingTop: theme.spacing(5),
	},
	SectionTitle: {
		paddingTop: theme.spacing(5),
	},
	embed: {
		minHeight: "300px",
		border: "none",
	},
	button: {
		margin: theme.spacing(1),
	},
	containerPurple: {
		backgroundColor: "#cfe8fc",
	},
	list: {
		listStyle: "disc",
		paddingLeft: theme.spacing(2),
	},
}))

const DTManagingCashFlow = (): ReactElement => {
	const styles = useDTStyles()

	return (
		<PrivatePage>
			<PageContainer>
				<Typography
					variant="h5"
					component="h1"
					align="center"
					className={styles.tagline}
				>
					Managing your cash flow
				</Typography>
				<Typography variant="body1" component="p">
					People often understand the cash part of cash flow, but not the flow
					part. Put simply, cash will move in and out of your business at
					different times, which can create different periods of cash
					availability. It is important to anticipate these periods so that you
					can plan and manage your cash flow so you don’t run out of money.
				</Typography>
				<Typography variant="body1" component="p">
					<strong>Managing your cash flow can help you:</strong>
				</Typography>
				<List>
					<Typography component="li" className={styles.list}>
						Have enough cash to meet obligations.
					</Typography>
					<Typography component="li" className={styles.list}>
						Be prepared for the unexpected, when things do not go as planned.
					</Typography>
					<Typography component="li" className={styles.list}>
						Continue to operate.
					</Typography>
					<Typography component="li" className={styles.list}>
						Pay yourself.
					</Typography>
					<Typography component="li" className={styles.list}>
						Breakdown which cash belongs to you, and which cash is owed to third
						parties.
					</Typography>
				</List>
			</PageContainer>

			<PageTip tip="DiscoverTopicsTips" />
		</PrivatePage>
	)
}

export default DTManagingCashFlow
