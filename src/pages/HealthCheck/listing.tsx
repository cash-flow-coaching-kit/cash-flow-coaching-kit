import React, { ReactElement } from "react"
import { Typography, Grid } from "@material-ui/core"
import { PrivatePage, PageContainer } from "../../components/Layouts"
import { SectionTitle } from "../../components/Content"
import Listing from "../../components/HealthCheck/Listing/Listing"

/**
 * Health check listing page
 *
 * @returns ReactElement
 */
const HCListing = (): ReactElement => {
	return (
		<PrivatePage>
			<PageContainer>
				<SectionTitle>
					Saved Health Checks{" "}
					<Typography variant="subtitle1" component="p" color="textSecondary">
						View a previous Health Check by selecting from the list below.
					</Typography>
				</SectionTitle>
				<Grid item xs={6}>
					<Listing />
				</Grid>
			</PageContainer>
		</PrivatePage>
	)
}

export default HCListing
