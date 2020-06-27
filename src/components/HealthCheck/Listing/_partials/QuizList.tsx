import React, { ReactElement, MouseEvent, useCallback } from "react"
import {
	List,
	ListItem,
	ListItemText,
	ListItemSecondaryAction,
} from "@material-ui/core"
import { format } from "date-fns"
import {
	routeVarReplacement,
	PrivateRoutes,
} from "../../../../util/routes/routes"
import { IQuizListProps } from "../_config/shape"
import IconDeleteButtonwDialog from "../../../IconDeleteButton/IconDeleteButtonwDialog"
import { HealthCheckId } from "../../../../data/_config/shape"
import ViewIconButton from "../../../ViewIconButton"

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
	const removeItem = useCallback(
		(id: HealthCheckId) => (e: MouseEvent<HTMLButtonElement>): void => {
			e.preventDefault()
			removeHealthCheck(id)
		},
		[removeHealthCheck]
	)

	return (
		<List>
			{clientQuizzes.map(
				(quiz): ReactElement => (
					<ListItem key={quiz.id} className="list-item-padded">
						<ListItemText
							primary="Completed Health Check"
							secondary={
								quiz.createdAt
									? format(quiz.createdAt, "dd/MM/yyyy hh:mm a")
									: false
							}
						/>
						<ListItemSecondaryAction>
							<ViewIconButton
								goTo={routeVarReplacement(PrivateRoutes.HealthCheckSummary, [
									[":id", `${quiz.id}`],
								])}
							/>
							<IconDeleteButtonwDialog onClick={removeItem(quiz.id || "")} />
						</ListItemSecondaryAction>
					</ListItem>
				)
			)}
		</List>
	)
}

export default QuizList
