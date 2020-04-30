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

const DTFundingBusiness = (): ReactElement => {
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
				<Typography variant="body1" component="p">
					<strong>Funding your business can help you:</strong>
				</Typography>
				<List>
					<Typography component="li">
						Understand how to fund your business.
					</Typography>
					<Typography component="li">
						Release pressure on cash flow and personal finances.
					</Typography>
					<Typography component="li">Keep the doors open.</Typography>
					<Typography component="li">Meet business goals.</Typography>
					<Typography component="li">Grow your business.</Typography>
					<Typography component="li">
						Provide for personal financial goals.
					</Typography>
				</List>

				<Grid container>
					<Grid item xs={6}>
						<Card variant="outlined">
							<CardHeader title="What advisors think of the kit" />
							<CardMedia
								className={styles.embed}
								component="iframe"
								src="https://youtu.be/fAe_2eyAkrU"
							/>
							<CardActions>
								<Button color="primary">Download Transcript</Button>
							</CardActions>
						</Card>
					</Grid>
					<Grid item xs={6}>
						<Card variant="outlined">
							<CardHeader title="What advisors think of the kit" />
							<CardMedia
								className={styles.embed}
								component="iframe"
								src="https://youtu.be/BTwVYKfGyuk"
							/>
							<CardActions>
								<Button color="primary">Download Transcript</Button>
							</CardActions>
						</Card>
					</Grid>
				</Grid>
			</PageContainer>

			<PageTip tip="DiscoverTopicsTips" />
		</PrivatePage>
	)
}

export default DTFundingBusiness
