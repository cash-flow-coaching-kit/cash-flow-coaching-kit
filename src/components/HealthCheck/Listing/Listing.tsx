import React, { ReactElement, useEffect, useContext, useState } from "react"
import { Card, CardContent, Divider, Button } from "@material-ui/core"
import { Link } from "react-router-dom"
import AddIcon from "@material-ui/icons/Add"
import { useMachine } from "@xstate/react"
import { ClientContext } from "../../../state/client"
import { PrivateRoutes, routeVarReplacement } from "../../../util/routes/routes"
import { HCListingMachine } from "./_config/machine"
import { EmptyListing, QuizList } from "./_partials"
import Loading from "../../Loading"
import useListingStyles from "./_config/styles"
import {
	HealthCheckDataStruct,
	ClientId,
	HealthCheckId,
} from "../../../data/_config/shape"
import HealthCheckUseCase from "../../../data/healthChecks/HealthCheckLogic"

/**
 * Component used to render the completed health checks for the
 * current client
 *
 * @returns ReactElement
 */
const Listing = (): ReactElement => {
	const [state, send] = useMachine(HCListingMachine)
	const {
		state: { currentClient },
	} = useContext(ClientContext)
	const [clientQuizzes, setClientQuizzess] = useState<HealthCheckDataStruct[]>(
		[]
	)
	const styles = useListingStyles()

	useEffect(() => {
		const fetchQuizzes = async (id: ClientId): Promise<void> => {
			const q = await HealthCheckUseCase.findClientHealthChecks(id)
			if (q.length === 0) {
				// show empty warning
				send("IS_EMPTY")
			} else {
				// set the client quizzes and show the items
				setClientQuizzess(q)
				send("HAS_ITEMS")
			}
		}

		// Find fetching for the indexeddb is completed
		if (currentClient?.id) {
			// If there isn't a client, show empty warning
			if (!currentClient) {
				send("IS_EMPTY")
				return
			}

			fetchQuizzes(currentClient.id)
		}
	}, [currentClient, send])

	/**
	 * Removes a quiz from the db and state
	 *
	 * @param {number} id ID of the health check to remove
	 * @returns Promise<void>
	 */
	const removeHealthCheck = async (id: HealthCheckId): Promise<void> => {
		try {
			const count = await HealthCheckUseCase.delete(id)

			// count === number of items deleted
			// only proceed if 1 or more was deleted (ideally should always be 1)
			if (count > 0) {
				const copy = clientQuizzes.filter((item) => item.id !== id)
				if (copy.length === 0) {
					send("IS_EMPTY")
				}
				setClientQuizzess(copy)
			}
		} catch (e) {
			// TODO: At least show a toast message, please
			console.error(e.stack || e)
		}
	}

	/**
	 * Render a specific component for state of the state machine
	 *
	 * @returns ReactElement
	 */
	const renderQuizData = (): ReactElement => {
		switch (state.value) {
			case "empty":
				return <EmptyListing />

			case "hasItems":
				return (
					<QuizList
						clientQuizzes={clientQuizzes}
						removeHealthCheck={removeHealthCheck}
					/>
				)

			case "loading":
			default:
				return <Loading />
		}
	}

	return (
		<Card>
			{renderQuizData()}
			<Divider />
			<CardContent className={styles.actions}>
				<Button
					startIcon={<AddIcon />}
					size="medium"
					component={Link}
					to={routeVarReplacement(PrivateRoutes.HealthCheckQuiz, [
						[":id?", ""],
					])}
					color="primary"
					variant="contained"
				>
					Add a new Health Check
				</Button>
			</CardContent>
		</Card>
	)
}

export default Listing
