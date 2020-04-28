import React, { ReactElement, useState, useEffect, useContext } from "react"
import { Link as RouterLink } from "react-router-dom"
import {
	Typography,
	Container,
	Button,
	Grid,
	Card,
	CardMedia,
	CardActions,
	Box,
	CardHeader,
} from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { PrivateRoutes } from "../util/routes/routes"
import { PublicNavbar } from "../components/Navbar"
import { NewClientDialog } from "../content/dialog"
import { ClientContext } from "../state/client"

const useHomepageStyles = makeStyles((theme) => ({
	container: {
		paddingTop: theme.spacing(5),
	},
	grid: {
		paddingTop: theme.spacing(5),
	},
	buttonBox: {
		marginTop: theme.spacing(5),
		display: "flex",
		justifyContent: "center",
	},
	embed: {
		minHeight: "300px",
		border: "none",
	},
}))

const Homepage = (): ReactElement => {
	const {
		state: { clients },
	} = useContext(ClientContext)
	const [hasClients, setHasClients] = useState<boolean>(false)
	const styles = useHomepageStyles()

	useEffect(() => {
		setHasClients(clients.length > 0)
	}, [clients])

	return (
		<>
			<PublicNavbar hasClients={hasClients} />
			<Container className={styles.container}>
				<Typography align="center" variant="h2">
					CASH FLOW COACHING KIT
				</Typography>
				<Typography align="center" variant="h5">
					Helping businesses survive and grow.
				</Typography>
				<Grid container spacing={3} className={styles.grid}>
					<Grid item xs={6}>
						<Card variant="outlined">
							<CardHeader title="Take a tour of the kit" />
							<CardMedia
								className={styles.embed}
								component="iframe"
								src="https://www.youtube.com/embed/vSoCk1sgV3M"
							/>
							<CardActions>
								<Button color="primary">Download Transcript</Button>
							</CardActions>
						</Card>
					</Grid>
					<Grid item xs={6}>
						<Card variant="outlined">
							<CardHeader title="What advisors think of the kit" />
							<CardMedia
								className={styles.embed}
								component="iframe"
								src="https://www.youtube.com/embed/z64Bc5K2TKo"
							/>
							<CardActions>
								<Button color="primary">Download Transcript</Button>
							</CardActions>
						</Card>
					</Grid>
				</Grid>
				<Box className={styles.buttonBox}>
					{hasClients ? (
						<Button
							color="primary"
							variant="contained"
							component={RouterLink}
							to={PrivateRoutes.ClientList}
							size="large"
						>
							See client list
						</Button>
					) : (
						<NewClientDialog triggerText="Get Started" />
					)}
				</Box>
			</Container>
		</>
	)
}

export default Homepage
