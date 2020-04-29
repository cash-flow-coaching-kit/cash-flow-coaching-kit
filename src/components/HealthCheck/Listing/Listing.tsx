import React, { ReactElement, useEffect, useContext, useState } from "react"
import {
	Card,
	CardContent,
	List,
	Typography,
	ListItem,
	ListItemText,
	ListItemSecondaryAction,
	IconButton,
	Divider,
	Button,
	makeStyles,
} from "@material-ui/core"
import { Link } from "react-router-dom"
import DeleteIcon from "@material-ui/icons/Delete"
import AddIcon from "@material-ui/icons/Add"
import RefreshIcon from "@material-ui/icons/Refresh"
import useIndexedDB from "../../../data/hooks/useIndexedDB"
import HealthCheckDB, {
	IBaseHealthCheck,
} from "../../../data/healthChecks/HealthCheckDatabase"
import { ClientContext } from "../../../state/client"
import { PrivateRoutes } from "../../../util/routes/routes"
import { constructKey, generateKey } from "../../../util/key"

const useListingStyles = makeStyles((theme) => ({
	actions: {
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
	},
}))

const Listing = (): ReactElement => {
	const {
		state: { currentClient },
	} = useContext(ClientContext)
	const [quizzes, retrive] = useIndexedDB<IBaseHealthCheck>(
		HealthCheckDB,
		HealthCheckDB.healthChecks,
		[]
	)
	const [clientQuizzes, setClientQuizzess] = useState<IBaseHealthCheck[]>([])
	const [key] = useState(generateKey())
	const styles = useListingStyles()

	useEffect(() => {
		if (currentClient) {
			setClientQuizzess(
				quizzes.filter(({ clientId }) => clientId === currentClient.id)
			)
		}
	}, [quizzes, currentClient])

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
			{clientQuizzes.length === 0 ? (
				<CardContent>
					<Typography variant="h6">No quizzes have been found</Typography>
					<Typography>
						Check that you have the correct{" "}
						<Link to={PrivateRoutes.ClientList}>client selected</Link> or{" "}
						<Link to={PrivateRoutes.HealthCheckQuiz}>start a new quiz</Link>.
					</Typography>
				</CardContent>
			) : (
				<List>
					{clientQuizzes.map(
						(quiz, idx): ReactElement => (
							<ListItem key={constructKey(key, idx)}>
								<ListItemText
									primary="Health check"
									secondary={quiz.createdAt}
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
			)}
		</Card>
	)
}

export default Listing
