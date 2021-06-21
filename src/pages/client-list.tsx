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
import ClientListTips from "../content/tips/ClientListTips"
<<<<<<< HEAD
=======

// Set flag for web or desktop mode
let isDesktop = false

const userAgent = navigator.userAgent.toLowerCase()
if (userAgent.indexOf(" electron/") > -1) {
	isDesktop = true
}
>>>>>>> 316b708cfa8dd6cd18dbad61985d0195e75d4330

/**
 * Client listing page
 *
 * @returns ReactElement
 */
const ClientList = (): ReactElement => {
	return (
		<>
			<PageContainer role="main">
				<Grid container spacing={3}>
					<Grid item xs={12} sm={8}>
						<SectionTitle component="h1">Clients and coaching</SectionTitle>
						<Box className="content-area">
							<Typography>Manage and prepare your coaching.</Typography>
							<Typography>
								Read our coaching conversation guide to prepare for your client.
								These materials will help you and your client get the most value
								from the kit.
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
						<SectionTitle component="h2">
							Coaching conversation guide
						</SectionTitle>
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

<<<<<<< HEAD
			<PageTip tip={ClientListTips} />
=======
			{!isDesktop && <PageTip tip={ClientListTips} />}

>>>>>>> 316b708cfa8dd6cd18dbad61985d0195e75d4330
		</>
	)
}

export default ClientList
