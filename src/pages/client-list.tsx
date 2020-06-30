import React, { ReactElement } from "react"
import { Typography, Grid, Box } from "@material-ui/core"
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

/**
 * Client listing page
 *
 * @returns ReactElement
 */
const ClientList = (): ReactElement => {
	return (
		<>
			<PageContainer>
				<Grid container spacing={3}>
					<Grid item xs={12} sm={8}>
						<SectionTitle component="h1">Clients and coaching</SectionTitle>
						<Box className="content-area">
							<Typography>Manage and prepare your coaching.</Typography>
							<Typography>
								Read our coaching guidance to prepare for your client. These
								materials will help you and your client get the most value from
								the kit.
							</Typography>
							<Typography>
								You can also import and export client data in your client list.
							</Typography>
						</Box>
					</Grid>
					<Grid item xs={12} md={6}>
						<ClientListing />
					</Grid>
					<Grid item xs={12} md={6}>
						<SectionTitle component="h2">Coaching conversation</SectionTitle>
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
