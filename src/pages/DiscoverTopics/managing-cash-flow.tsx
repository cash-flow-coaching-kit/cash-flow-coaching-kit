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
	Button,
} from "@material-ui/core"
import { PrivatePage, PageContainer } from "../../components/Layouts"
import PageTip from "../../components/PageTip"

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
	embed: {
		minHeight: "300px",
		border: "none",
	},
}))

const DTManagingCashFlow = (): ReactElement => {
	const styles = useDTStyles()

	return (
		<PrivatePage>
			<PageContainer>
				<Typography variant="h5" align="center" className={styles.tagline}>
					Funding your business
				</Typography>

				<Typography variant="body1" component="p">
					Finding the right funding option is important to the long term success
					of your business. Understanding the various types of funding can help
					you select the best option for your business when starting up,
					expanding, or going through a time of limited cash flow.
				</Typography>
			</PageContainer>
			<PageTip tip="DiscoverTopicsTips" />
		</PrivatePage>
	)
}

export default DTManagingCashFlow
