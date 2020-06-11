import React, { ReactElement } from "react"
import { Typography, Grid, makeStyles, Box } from "@material-ui/core"
import { PageContainer } from "../components/Layouts"
import PageTip from "../components/PageTip"
import ClientListing from "../components/ClientListing"
import SectionTitle from "../components/SectionTitle"
import {
	Prepare,
	Coaching,
	CFC,
	HealthCheck,
	DiscoverTopics,
	ChangeLevers,
	ActionChecklist,
} from "../content/CoachingConversation"

// Client list styling
const useCLStyles = makeStyles((theme) => ({
	tagline: {
		marginBottom: theme.spacing(4),
	},
}))

/**
 * Client listing page
 *
 * @returns ReactElement
 */
const ClientList = (): ReactElement => {
	const styles = useCLStyles()

	return (
		<>
			<PageContainer>
				<Typography variant="h5" align="center" className={styles.tagline}>
					Manage your client list and prepare for your coaching conversation
				</Typography>
				<Grid container spacing={3}>
					<Grid item xs={12} md={6}>
						<ClientListing />
					</Grid>
					<Grid item xs={12} md={6}>
						<SectionTitle>Coaching Conversation</SectionTitle>
						<Box>
							<Prepare />
							<Coaching />
							<HealthCheck />
							<DiscoverTopics />
							<CFC />
							<ChangeLevers />
							<ActionChecklist />
						</Box>
					</Grid>
				</Grid>
			</PageContainer>

			<PageTip tip="ClientListTips" />
		</>
	)
}

export default ClientList
