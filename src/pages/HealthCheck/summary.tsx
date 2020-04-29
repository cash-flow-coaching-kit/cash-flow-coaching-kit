import React, { ReactElement, useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import { Grid, Typography } from "@material-ui/core"
import { format } from "date-fns"
import { PrivatePage, PageContainer } from "../../components/Layouts"
import FourQuestions from "../../components/HealthCheck/FourQuestions"
import ExpandableNav from "../../components/ExpandableNav/ExpandableNav"
import findHCById from "../../data/healthChecks/findHCById"
import { IBaseHealthCheck } from "../../data/healthChecks/HealthCheckDatabase"
import { PrivateRoutes } from "../../util/routes/routes"

const InvalidHC = (): ReactElement => (
	<>
		<Typography> </Typography>
		<Typography>
			The requested Health check does not exist. Please select another Health
			check from the{" "}
			<Link to={PrivateRoutes.HealthCheckList}>listing page</Link> or{" "}
			<Link to={PrivateRoutes.HealthCheckQuiz}>start a new quiz</Link>.
		</Typography>
	</>
)

const HCSummary = (): ReactElement => {
	const { id } = useParams()
	const [healthCheck, setHealthCheck] = useState<IBaseHealthCheck | undefined>()

	useEffect(() => {
		if (id) {
			;(async function getHC(): Promise<void> {
				setHealthCheck(await findHCById(parseInt(id, 10)))
			})()
		}
	}, [id])

	return (
		<PrivatePage>
			<PageContainer>
				<Grid container spacing={3}>
					<Grid item xs={9}>
						{healthCheck ? (
							<>
								<Typography variant="h5" align="center">
									Your health check results{" "}
									{healthCheck.createdAt
										? `on the ${format(
												healthCheck.createdAt,
												"do 'of' MMMM yyyy"
										  )}`
										: false}
								</Typography>
								{healthCheck.clientId}
							</>
						) : (
							<InvalidHC />
						)}
					</Grid>
					<Grid item xs={3}>
						<FourQuestions />
						<ExpandableNav>Hello</ExpandableNav>
					</Grid>
				</Grid>
			</PageContainer>
		</PrivatePage>
	)
}

export default HCSummary
