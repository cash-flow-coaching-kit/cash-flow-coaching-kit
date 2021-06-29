import React, {
	ReactElement,
	useState,
	ChangeEvent,
	useEffect,
	useContext,
	useCallback,
} from "react"
import {
	Dialog,
	DialogContent,
	DialogTitle,
	DialogActions,
	Button,
	Box,
	Typography,
	makeStyles,
	FormControlLabel,
	Switch,
} from "@material-ui/core"
import { Machine } from "xstate"
import { useMachine } from "@xstate/react"
import Alert from "@material-ui/lab/Alert"
import RemoveCircleOutlineIcon from "@material-ui/icons/RemoveCircleOutline"
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline"
import HighlightOffIcon from "@material-ui/icons/HighlightOff"
import { green, orange } from "@material-ui/core/colors"
import { ImportResponse, DatabaseNames } from "../../modules/__config/shape"
import Loading from "../../components/Loading"
import Spacer from "../../components/Spacer"
import ImportClient, {
	loadBlobAsJSON,
	validateJSONData,
} from "../../modules/import-client"
import syncClientsWithDb from "../../data/client/syncWithDB"
import { ClientContext } from "../../state/client"
import { ClientDataStruct } from "../../data/_config/shape"
import ClientUseCase from "../../data/client/ClientLogic"

type DialogProps = {
	open: boolean
	onClose: () => void
}

const useStyles = makeStyles((theme) => ({
	filename: {
		marginLeft: theme.spacing(1),
	},
	contentText: {
		margin: theme.spacing(2, 0),
	},
	fileactions: {
		marginTop: theme.spacing(2),
		"& > button + button": {
			marginLeft: theme.spacing(1),
		},
	},
	result: {
		display: "flex",
		alignItems: "center",
		marginBottom: theme.spacing(1),
		"& > * + *": {
			marginLeft: theme.spacing(1),
		},
		"& > strong": {
			fontWeight: theme.typography.fontWeightMedium,
		},
	},
}))

// #region Machine Definitions
interface MachineSchema {
	states: {
		idle: {}
		loading: {}
		success: {}
		failure: {}
	}
}

type MachineEvents =
	| { type: "FETCH" }
	| { type: "RESOLVE" }
	| { type: "REJECT" }
	| { type: "RETRY" }

const importClientMachine = Machine<null, MachineSchema, MachineEvents>({
	id: "importClient",
	initial: "idle",
	states: {
		idle: {
			on: {
				FETCH: "loading",
			},
		},
		loading: {
			on: {
				RESOLVE: "success",
				REJECT: "failure",
			},
		},
		success: {
			on: {
				RETRY: "idle",
			},
		},
		failure: {
			on: {
				RETRY: {
					target: "idle",
				},
			},
		},
	},
})
// #endregion

const databaseConfig: Record<DatabaseNames, string> = {
	ClientDatabase: "Client data",
	HealthCheckDatabase: "Health check data",
	ActionChecklistDatabase: "Action checklist data",
	CFCDatabase: "Cash flow canvas data",
}

const successContent = {
	isfalse: {
		content: "No data found in the import file.",
		icon: RemoveCircleOutlineIcon,
	},
	istrue: {
		content: "Data successfully imported.",
		icon: CheckCircleOutlineIcon,
	},
	iserror: {
		content: "",
		icon: HighlightOffIcon,
	},
}

// Set flag for web or desktop mode
const userAgent = navigator.userAgent.toLowerCase()
const isDesktop = userAgent.indexOf(" electron/") > -1
export default function ImportClientDialog({
	open,
	onClose,
}: DialogProps): ReactElement {
	const cls = useStyles()
	const [machine, send] = useMachine(importClientMachine)
	const { dispatch } = useContext(ClientContext)

	const [errorMsg, setErrorMsg] = useState("")
	const [response, setResponse] = useState<ImportResponse>([
		false,
		true,
		new Error("Help"),
	])
	const [file, setFile] = useState<File>()
	const [dupClient, setDupClient] = useState<ClientDataStruct>()
	const [overwrite, setOverwrite] = useState(true)

	const checkForExistingClient = useCallback(async () => {
		if (file) {
			const json = await loadBlobAsJSON(file)

			if (json instanceof Error || !validateJSONData(json)) {
				setDupClient(undefined)
				return
			}

			if (json.ClientDatabase !== null) {
				const clientId = json.ClientDatabase.data.data?.[0].rows?.[0]?.id || -1

				if (clientId !== -1) {
					const possibleClient = await ClientUseCase.findById(clientId)
					setDupClient(possibleClient)
					return
				}
			}
		}

		setDupClient(undefined)
	}, [file])

	useEffect(() => {
		if (machine.value === "idle") {
			setFile(undefined)
			setDupClient(undefined)
		}
	}, [machine])

	useEffect(() => {
		checkForExistingClient()
	}, [file, checkForExistingClient])

	const startImporting = async (): Promise<void> => {
		if (!file) {
			setErrorMsg("A file is required to proceed")
			send("REJECT")
			return
		}

		send("FETCH")
		try {
			const res = await ImportClient(file, overwrite)
			await syncClientsWithDb(dispatch)
			setResponse(res)
			send("RESOLVE")
		} catch (e) {
			setErrorMsg(e.message)
			send("REJECT")
		}
	}

	const RetryButton = (title: string): ReactElement => (
		<Button
			onClick={(): void => {
				send("RETRY")
			}}
			variant="contained"
			color="primary"
		>
			{title}
		</Button>
	)

	// Upload a file of type JSON
	const FileUpload = (): ReactElement => (
		<>
			<label htmlFor="contained-button-file">
				<input
					accept="application/json"
					style={{ display: "none" }}
					id="contained-button-file"
					type="file"
					onChange={(e: ChangeEvent<HTMLInputElement>): void => {
						setFile(e.target.files?.[0] || undefined)
					}}
				/>
				<Button variant="outlined" component="span">
					Select file to import
				</Button>
			</label>
			<Typography variant="caption" className={cls.filename}>
				{file && file.name}
			</Typography>
		</>
	)

	const FileActions = (): ReactElement => (
		<Box className={cls.fileactions}>
			<Button color="primary" variant="contained" onClick={startImporting}>
				Import data
			</Button>
			<Button onClick={(): void => setFile(undefined)}>Remove file</Button>
		</Box>
	)

	const ShowFailure = (): ReactElement => (
		<>
			<Alert severity="error">
				{errorMsg ||
					"Something went wrong processing the request. Please check the uploaded file and try again"}
			</Alert>
			<Spacer />
			{RetryButton("Try again")}
		</>
	)

	const ShowSuccess = (): ReactElement => {
		const keys = Object.keys(databaseConfig) as DatabaseNames[]

		return (
			<>
				{response.map(
					(res, idx): ReactElement => {
						if (res instanceof Error) {
							return (
								<Box key={keys[idx]} className={cls.result}>
									<successContent.iserror.icon color="error" />
									<Typography component="strong">
										{databaseConfig[keys[idx]]}:
									</Typography>
									<Typography>{res.message}</Typography>
								</Box>
							)
						}

						const config = successContent[res ? "istrue" : "isfalse"]

						return (
							<Box key={keys[idx]} className={cls.result}>
								<config.icon
									style={res ? { color: green[500] } : { color: orange[500] }}
								/>
								<Typography component="strong">
									{databaseConfig[keys[idx]]}:
								</Typography>
								<Typography>{config.content}</Typography>
							</Box>
						)
					}
				)}
				<Spacer space={3} />
				{RetryButton("Import another file")}
			</>
		)
	}

	const overwriteOnChange = useCallback(
		(e: React.ChangeEvent<HTMLInputElement>) => {
			setOverwrite(e.target.checked)
		},
		[setOverwrite]
	)

	const DuplicateOptions = (): ReactElement => {
		if (!dupClient) return <></>

		return (
			<>
				<Spacer />
				<Alert severity="warning">
					The file you have chosen will overwrite data for client &quot;
					{dupClient.name}&quot;. Would you like to proceed with overwritting
					the data, or do you want to create a new client? This can not be
					undone.
				</Alert>
				<FormControlLabel
					control={
						<Switch
							checked={overwrite}
							onChange={overwriteOnChange}
							name="overwrite-client-data"
							color="primary"
						/>
					}
					label="Overwrite client data?"
				/>
			</>
		)
	}

	const DialogBody = (): ReactElement => {
		switch (machine.value) {
			case "failure":
				// Consistently show error message to the user
				return <ShowFailure />
			case "success":
				// Show status of each of the database items
				return <ShowSuccess />
			case "loading":
				// Show loader while importing
				return <Loading />
			case "idle":
			default:
				return (
					<>
						<FileUpload />
						{DuplicateOptions()}
						{file && <FileActions />}
					</>
				)
		}
	}

	return (
		<Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
			<DialogTitle>Import client data</DialogTitle>
			<DialogContent>
				<Typography component="p" variant="body1" className={cls.contentText}>
					If you have used the Cash Flow Coaching Kit before and have previously
					exported your work, you'll be able to import that data from your
					device and continue where you left off.
				</Typography>
				<Typography component="p" variant="body1" className={cls.contentText}>
					The data you enter into the kit will be stored on this device only.
					{isDesktop ? "" : "Exiting or clearing your browser cache will erase all unsaved client data."}
				</Typography>
			</DialogContent>
			<DialogContent>
				<DialogBody />
			</DialogContent>
			<DialogActions>
				<Button onClick={onClose}>Close</Button>
			</DialogActions>
		</Dialog>
	)
}
