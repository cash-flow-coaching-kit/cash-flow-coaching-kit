import React, { ReactElement } from "react"
import { Typography, Grid, makeStyles } from "@material-ui/core"
import { PrivatePage, PageContainer } from "../components/Layouts"
import PageTip from "../components/PageTip"
import ClientListing from "../components/ClientListing"
import SectionTitle from "../components/SectionTitle"

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
		<PrivatePage>
			<PageContainer>
				<Typography variant="h5" align="center" className={styles.tagline}>
					Manage your client list and prepare for your coaching conversation
				</Typography>
				<Grid container spacing={3}>
					<Grid item xs={6}>
						<ClientListing />
					</Grid>
					<Grid item xs={6}>
						<SectionTitle>Coaching Conversation</SectionTitle>
					</Grid>
				</Grid>
			</PageContainer>

			<PageTip tip="ClientListTips" />
		</PrivatePage>
	)
}

export default ClientList
