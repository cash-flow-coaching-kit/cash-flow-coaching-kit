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

const DTSellingClosingSuccession = (): ReactElement => {
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
					Selling, closing and succession planning
				</Typography>
				<Typography variant="body1" component="p">
					Most business owners will reach a time when they consider exiting
					their business. There are many reasons you may want to exit your
					business, including financial concerns, challenges around managing the
					business or personal reasons such as retirement.
				</Typography>
				<Typography variant="body1" component="p">
					Exiting your business can be a complex and emotional time. You can
					successfully navigate this process by seeking professional advice from
					your business advisor, accountant and/or solicitor, to understand your
					options and obligations.
				</Typography>
			</PageContainer>

			<PageTip tip="DiscoverTopicsTips" />
		</PrivatePage>
	)
}

export default DTSellingClosingSuccession
