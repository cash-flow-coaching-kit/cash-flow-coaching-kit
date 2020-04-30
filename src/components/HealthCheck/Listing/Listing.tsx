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

const useListingStyles = makeStyles(() => ({
	actions: {
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
	},
}))

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
		if (!loading) {
			if (!currentClient) {
				send("IS_EMPTY")
				return
			}

			const retrivedQuizzes = quizzes.filter(
				({ clientId }) => clientId === currentClient.id
			)
			if (retrivedQuizzes.length === 0) {
				send("IS_EMPTY")
			} else {
				setClientQuizzess(retrivedQuizzes)
				send("HAS_ITEMS")
			}
		}
	}, [quizzes, currentClient, loading])

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
