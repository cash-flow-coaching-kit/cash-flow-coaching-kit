import React, { ReactElement, useEffect, useContext, useState } from "react"
import {
	Card,
	CardContent,
	IconButton,
	Divider,
	Button,
	makeStyles,
} from "@material-ui/core"
import { Link } from "react-router-dom"
import AddIcon from "@material-ui/icons/Add"
import RefreshIcon from "@material-ui/icons/Refresh"
import { useMachine } from "@xstate/react"
import useIndexedDB from "../../../data/hooks/useIndexedDB"
import HealthCheckDB, {
	IBaseHealthCheck,
} from "../../../data/healthChecks/HealthCheckDatabase"
import { ClientContext } from "../../../state/client"
import { PrivateRoutes } from "../../../util/routes/routes"
import { HCListingMachine } from "./machine"
import EmptyListing from "./EmptyListing"
import QuizList from "./QuizList"
import Loading from "../../Loading"

// Health check Listing styling
const useListingStyles = makeStyles(() => ({
	actions: {
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
	},
}))

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
	const [quizzes, retrive, loading] = useIndexedDB<IBaseHealthCheck>(
		HealthCheckDB,
		HealthCheckDB.healthChecks,
		[]
	)
	const [clientQuizzes, setClientQuizzess] = useState<IBaseHealthCheck[]>([])
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
	 * Render a specific component for state of the state machine
	 *
	 * @returns ReactElement
	 */
	const renderQuizData = (): ReactElement => {
		switch (state.value) {
			case "empty":
				return <EmptyListing />

			case "hasItems":
				return <QuizList clientQuizzes={clientQuizzes} />

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
					to={PrivateRoutes.HealthCheckQuiz}
					color="primary"
					variant="contained"
				>
					Start a new Health Check
				</Button>
				<IconButton onClick={retrive}>
					<RefreshIcon />
				</IconButton>
			</CardContent>
			<Divider />
			{renderQuizData()}
		</Card>
	)
}

export default Listing
