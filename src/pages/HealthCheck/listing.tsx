import React, { ReactElement } from "react"
import { Typography, Grid } from "@material-ui/core"
import { PageContainer } from "../../components/Layouts"
import Listing from "../../components/HealthCheck/Listing/Listing"
import SectionTitle from "../../components/SectionTitle"

/**
 * Health check listing page
 *
 * @returns ReactElement
 */
const HCListing = (): ReactElement => {
	return (
		<>
			<PageContainer>
				<SectionTitle>
					Saved Health Checks{" "}
					<Typography variant="subtitle1" component="p" color="textSecondary">
						View a previous Health Check by selecting from the list below.
					</Typography>
				</SectionTitle>
				<Grid item sm={6}>
					<Listing />
				</Grid>
			</PageContainer>
		</>
	)
}

export default HCListing
