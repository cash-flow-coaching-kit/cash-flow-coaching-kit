import React, { ReactElement, useState } from "react"
import {
	List,
	ListItem,
	ListItemText,
	ListItemSecondaryAction,
	IconButton,
} from "@material-ui/core"
import { Link } from "react-router-dom"
import { format } from "date-fns"
import DeleteIcon from "@material-ui/icons/Delete"
import { IBaseHealthCheck } from "../../../data/healthChecks/HealthCheckDatabase"
import { constructKey, generateKey } from "../../../util/key"
import { routeVarReplacement, PrivateRoutes } from "../../../util/routes/routes"

const QuizList = ({
	clientQuizzes,
}: {
	clientQuizzes: IBaseHealthCheck[]
}): ReactElement => {
	const [key] = useState(generateKey())

	return (
		<List>
			{clientQuizzes.map(
				(quiz, idx): ReactElement => (
					<ListItem
						key={constructKey(key, idx)}
						button
						component={Link}
						to={routeVarReplacement(PrivateRoutes.HealthCheckSummary, [
							[":id", `${quiz.id}`],
						])}
					>
						<ListItemText
							primary="Completed Health Check"
							secondary={
								quiz.createdAt
									? format(quiz.createdAt, "dd/MM/yyyy hh:mm a")
									: false
							}
						/>
						<ListItemSecondaryAction>
							<IconButton>
								<DeleteIcon />
							</IconButton>
						</ListItemSecondaryAction>
					</ListItem>
				)
			)}
		</List>
	)
}

export default QuizList
