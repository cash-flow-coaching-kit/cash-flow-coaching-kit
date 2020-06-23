import React, { ReactElement } from "react"
import { Typography, Grid, Box } from "@material-ui/core"
import { PageContainer } from "../../components/Layouts"
import Listing from "../../components/HealthCheck/Listing/Listing"
import SectionTitle from "../../components/SectionTitle"
import Spacer from "../../components/Spacer"

/**
 * Health check listing page
 *
 * @returns ReactElement
 */
const HCListing = (): ReactElement => {
	return (
		<>
			<PageContainer>
				<SectionTitle component="h1">Saved Health Checks</SectionTitle>
				<Box className="content-area">
					<Typography>
						Use your previous health checks to review your progress.
					</Typography>
					<Typography>
						View your past results by selecting from the list below.
					</Typography>
				</Box>
				<Spacer space={3} />
				<Grid item sm={6}>
					<Listing />
				</Grid>
			</PageContainer>
		</>
	)
}

export default HCListing
