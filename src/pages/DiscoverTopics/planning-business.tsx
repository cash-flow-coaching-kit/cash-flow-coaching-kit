import React, { ReactElement } from "react"
import {
	Typography,
	Grid,
	List,
	Card,
	CardHeader,
	CardActions,
	CardMedia,
	Button,
} from "@material-ui/core"
import { PageContainer } from "../../components/Layouts"
import PageTip from "../../components/PageTip"
import useDTStyles from "./_config/styles"

const DTPlanningBusiness = (): ReactElement => {
	const styles = useDTStyles()
	return (
		<>
			<PageContainer>
				<Typography
					variant="h5"
					component="h1"
					align="center"
					className={styles.tagline}
				>
					Planning your business
				</Typography>
				<Typography variant="body1" component="p">
					Planning your business is crucial to being successful. When you have a
					well researched business plan, you are able to accurately forecast and
					analyse your business. This helps you to be financially prepared for
					circumstances outside of your control, find opportunities to grow your
					business, and ensure you don't run out of money.
				</Typography>
				<Typography variant="body1" component="p">
					<strong>A business plan can help you:</strong>
				</Typography>
				<List>
					<Typography component="li" className={styles.list}>
						Attract funding and find opportunities to grow your business.
					</Typography>
					<Typography component="li" className={styles.list}>
						Estimate the time and cost of starting up, or expanding.
					</Typography>
					<Typography component="li" className={styles.list}>
						Have realistic expectations around demand, value and competition.
					</Typography>
					<Typography component="li" className={styles.list}>
						Plan for regular payments such as insurance, superannuation and GST.
					</Typography>
					<Typography component="li" className={styles.list}>
						Set the right price for your product and/or services.
					</Typography>
					<Typography component="li" className={styles.list}>
						Be financially prepared for circumstances outside your control.
					</Typography>
					<Typography component="li" className={styles.list}>
						Ensure you don’t run out of money.
					</Typography>
				</List>
				<Grid container spacing={3}>
					<Grid item xs={6}>
						<Card variant="outlined">
							<CardHeader title="Kirra's Native Foods" />
							<CardMedia
								className={styles.embed}
								component="iframe"
								src="https://www.youtube.com/embed/LhVKOyMeFQE"
							/>
							<CardActions>
								<Button
									color="primary"
									href="/transcripts/Kirras-Native-foods.docx"
								>
									Download Transcript: Kirra's Native Foods
								</Button>
							</CardActions>
						</Card>
					</Grid>
					<Grid item xs={6}>
						<Card variant="outlined">
							<CardHeader title="Sanjana's Restaurant" />
							<CardMedia
								className={styles.embed}
								component="iframe"
								src="https://www.youtube.com/embed/Bxj4r3Dh1EQ"
							/>
							<CardActions>
								<Button
									color="primary"
									href="/transcripts/Sanjanas-restaurant.docx"
								>
									Download Transcript: Sanjana's Restaurant
								</Button>
							</CardActions>
						</Card>
					</Grid>
				</Grid>
			</PageContainer>

			<PageTip tip="DiscoverTopicsTips" />
		</>
	)
}

export default DTPlanningBusiness
