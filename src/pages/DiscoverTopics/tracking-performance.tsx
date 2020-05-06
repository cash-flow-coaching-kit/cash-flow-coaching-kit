import React, { ReactElement } from "react"
import {
	Typography,
	Grid,
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
import useDTStyles from "./_config/styles"

const TrackingPerformance = (): ReactElement => {
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
					Tracking your performance
				</Typography>
				<Typography variant="body1" component="p">
					It is vital for every business to track performance over time, to
					monitor and address cash flow issues before it’s too late. Tracking
					accurately reveals how you are performing against your plan and allows
					you to revisit your budget with a clear path to improve your cash
					flow.
				</Typography>
				<Typography variant="body1" component="p">
					<strong>Tracking your performance can help you:</strong>
				</Typography>
				<List>
					<Typography component="li" className={styles.list}>
						Operate profitably and continue to generate a positive cash flow.
					</Typography>
					<Typography component="li" className={styles.list}>
						Make changes to improve cash flow in a timely manner.
					</Typography>
					<Typography component="li" className={styles.list}>
						Make informed decisions.
					</Typography>
					<Typography component="li" className={styles.list}>
						Gather and analyse comprehensive information to prepare reports.
					</Typography>
					<Typography component="li" className={styles.list}>
						Review past performance and make plans to improve your business.
					</Typography>
					<Typography component="li" className={styles.list}>
						Use reliable financial details to track your business.
					</Typography>
					<Typography component="li" className={styles.list}>
						Reach your financial and business goals.
					</Typography>
				</List>
			</PageContainer>

			<PageTip tip="DiscoverTopicsTips" />
		</PrivatePage>
	)
}

export default TrackingPerformance
