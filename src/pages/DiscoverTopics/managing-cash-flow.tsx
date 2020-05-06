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

const DTManagingCashFlow = (): ReactElement => {
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
				<Grid container spacing={3}>
					<Grid item xs={6}>
						<Card variant="outlined">
							<CardHeader title="Yulari's Cash Flow" />
							<CardMedia
								className={styles.embed}
								component="iframe"
								src="https://www.youtube.com/embed/uPDZ6O3FFaY"
							/>
							<CardActions>
								<Button
									color="primary"
									href="/transcripts/Yularis-cash-flow.docx"
								>
									Download Transcript: Yulari's Cash Flow
								</Button>
							</CardActions>
						</Card>
					</Grid>
					<Grid item xs={6}>
						<Card variant="outlined">
							<CardHeader title="Cameron's Cash Flow" />
							<CardMedia
								className={styles.embed}
								component="iframe"
								src="https://www.youtube.com/embed/aAUWgm3-zL4"
							/>
							<CardActions>
								<Button
									color="primary"
									href="/transcripts/Camerons-cash-flow.docx"
								>
									Download Transcript: Cameron's Cash Flow
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

export default DTManagingCashFlow
