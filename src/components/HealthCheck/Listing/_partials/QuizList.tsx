import React, { ReactElement, useState, MouseEvent } from "react"
import {
	List,
	ListItem,
	ListItemText,
	ListItemSecondaryAction,
	IconButton,
	Tooltip,
} from "@material-ui/core"
import { Link } from "react-router-dom"
import { format } from "date-fns"
import DeleteIcon from "@material-ui/icons/Delete"
import { constructKey, generateKey } from "../../../../util/lists/key"
import {
	routeVarReplacement,
	PrivateRoutes,
} from "../../../../util/routes/routes"
import { IQuizListProps } from "../_config/shape"

/**
 * Renders a list of completed health checks
 *
 * @param {IBaseHealthCheck[]} {clientQuizzes}
 * @param {Function} {removeHealthCheck}
 * @returns ReactElement
 */
const QuizList = ({
	clientQuizzes,
	removeHealthCheck,
}: IQuizListProps): ReactElement => {
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
							<Tooltip title="Delete">
								<IconButton
									onClick={(e: MouseEvent<HTMLButtonElement>): void => {
										e.preventDefault()
										removeHealthCheck(quiz.id || "")
									}}
								>
									<DeleteIcon />
								</IconButton>
							</Tooltip>
						</ListItemSecondaryAction>
					</ListItem>
				)
			)}
		</List>
	)
}

export default QuizList
