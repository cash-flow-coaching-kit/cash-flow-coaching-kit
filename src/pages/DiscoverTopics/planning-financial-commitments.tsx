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

const DTPlanningFinanicalCommitments = (): ReactElement => {
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
					Planning your regular financial commitments
				</Typography>
				<Typography variant="body1" component="p">
					There are many operating costs when managing your business. Some are
					more obvious, such as phone bills, rent, or equipment. However, there
					are a number of less obvious costs, including licences you may need to
					operate your business, superannuation for you or your employees, and
					your business activity statements. Knowing and planning for all of
					your commitments can help you to avoid unnecessary cash flow stress.
				</Typography>
				<Typography variant="body1" component="p">
					<strong>
						Planning your regular financial commitments can help you:
					</strong>
				</Typography>
				<List>
					<Typography component="li" className={styles.list}>
						Prepare for large payments.
					</Typography>
					<Typography component="li" className={styles.list}>
						Know how much to put aside to meet your commitments when they
						arrive.
					</Typography>
					<Typography component="li" className={styles.list}>
						Look at negotiating where certain payments fall within the year.
					</Typography>
					<Typography component="li" className={styles.list}>
						Be in control of your financial commitments, without any surprises.
					</Typography>
					<Typography component="li" className={styles.list}>
						Feel prepared for the unexpected.
					</Typography>
					<Typography component="li" className={styles.list}>
						Understand the financial ramifications of the decisions you make
						within your business.
					</Typography>
				</List>
				<Grid container spacing={3}>
					<Grid item xs={6}>
						<Card variant="outlined">
							<CardHeader title="Mick's Farm" />
							<CardMedia
								className={styles.embed}
								component="iframe"
								src="https://www.youtube.com/embed/FSJsiEaRNRU"
							/>
							<CardActions>
								<Button color="primary" href="/transcripts/Micks-farm.docx">
									Download Transcript: Mick's Farm
								</Button>
							</CardActions>
						</Card>
					</Grid>
					<Grid item xs={6}>
						<Card variant="outlined">
							<CardHeader title="Ming's Disability Services" />
							<CardMedia
								className={styles.embed}
								component="iframe"
								src="https://www.youtube.com/embed/wXe051xOIzI"
							/>
							<CardActions>
								<Button
									color="primary"
									href="/transcripts/Mings-disability-services.docx"
								>
									Download Transcript: Ming's Disability Services
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

export default DTPlanningFinanicalCommitments
