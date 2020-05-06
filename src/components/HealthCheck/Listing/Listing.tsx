import React, { ReactElement, useEffect, useContext, useState } from "react"
import {
	Card,
	CardContent,
	IconButton,
	Divider,
	Button,
	Tooltip,
} from "@material-ui/core"
import { Link } from "react-router-dom"
import AddIcon from "@material-ui/icons/Add"
import RefreshIcon from "@material-ui/icons/Refresh"
import { useMachine } from "@xstate/react"
import useIndexedDB from "../../../data/hooks/useIndexedDB"
import HealthCheckDB from "../../../data/healthChecks/HealthCheckDatabase"
import { ClientContext } from "../../../state/client"
import { PrivateRoutes, routeVarReplacement } from "../../../util/routes/routes"
import { HCListingMachine } from "./_config/machine"
import { EmptyListing, QuizList } from "./_partials"
import Loading from "../../Loading"
import useListingStyles from "./_config/styles"
import deleteHealthCheck from "../../../data/healthChecks/deleteHC"
import findObjectIndexByValue from "../../../util/array/findObjectIndexByValue"
import { HealthCheckDataStruct } from "../../../data/_config/shape"

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
	const [quizzes, retrive, loading] = useIndexedDB<HealthCheckDataStruct>(
		HealthCheckDB,
		HealthCheckDB.healthChecks,
		[]
	)
	const [clientQuizzes, setClientQuizzess] = useState<HealthCheckDataStruct[]>(
		[]
	)
	const styles = useListingStyles()

	useEffect(() => {
		// Find fetching for the indexeddb is completed
		if (!loading) {
			// If there isn't a client, show empty warning
			if (!currentClient) {
				send("IS_EMPTY")
				return
			}

			// Filter by client id
			// TODO: Modify useIndexeddb to be able to do better queries
			const retrivedQuizzes = quizzes.filter(
				({ clientId }) => clientId === currentClient.id
			)
			// If there isn't any clients
			if (retrivedQuizzes.length === 0) {
				// show empty warning
				send("IS_EMPTY")
			} else {
				// set the client quizzes and show the items
				setClientQuizzess(retrivedQuizzes)
				send("HAS_ITEMS")
			}
		}
	}, [quizzes, currentClient, loading])

	/**
	 * Removes a quiz from the db and state
	 *
	 * @param {number} id ID of the health check to remove
	 * @returns Promise<void>
	 */
	const removeHealthCheck = async (id: number): Promise<void> => {
		try {
			const count = await deleteHealthCheck(id)
			if (count > 0) {
				const quizToRemove = findObjectIndexByValue(clientQuizzes, "id", id)
				const copy = [...clientQuizzes]
				copy.splice(quizToRemove, 1)
				setClientQuizzess([...copy])
			}
		} catch (e) {
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
					Start a new Health Check
				</Button>
				<Tooltip title="Refresh data">
					<IconButton onClick={retrive}>
						<RefreshIcon />
					</IconButton>
				</Tooltip>
			</CardContent>
			<Divider />
			{renderQuizData()}
		</Card>
	)
}

export default Listing
