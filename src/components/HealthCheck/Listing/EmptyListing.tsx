import React, { ReactElement } from "react"
import { CardContent, Typography } from "@material-ui/core"
import { Link } from "react-router-dom"
import { PrivateRoutes } from "../../../util/routes/routes"

const EmptyListing = (): ReactElement => {
	return (
		<CardContent>
			<Typography variant="h6">No quizzes have been found</Typography>
			<Typography>
				Check that you have the correct{" "}
				<Link to={PrivateRoutes.ClientList}>client selected</Link> or{" "}
				<Link to={PrivateRoutes.HealthCheckQuiz}>start a new quiz</Link>.
			</Typography>
		</CardContent>
	)
}

export default EmptyListing
