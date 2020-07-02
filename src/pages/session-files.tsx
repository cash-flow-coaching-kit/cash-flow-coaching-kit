import React, { ReactElement, useState, useCallback, useEffect } from "react"
import {
	Grid,
	Typography,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Box,
	makeStyles,
	Theme,
	createStyles,
	Backdrop,
	CircularProgress,
} from "@material-ui/core"
import GetAppIcon from "@material-ui/icons/GetApp"
import JSZip from "jszip"
import { fetch as fetchPolyfill } from "whatwg-fetch"
import { saveAs } from "file-saver"
import { format } from "date-fns"
import { HealthCheckDataStruct, CFCStruct } from "../data/_config/shape"
import HealthCheckUseCase from "../data/healthChecks/HealthCheckLogic"
import CFCUseCase from "../data/CFC/CFCLogic"
import arrayFillWith from "../util/array/arrayFillWith"
import { PageContainer } from "../components/Layouts"
import ExpandableNav from "../components/ExpandableNav"
import FileListing from "../components/SessionFiles/FileListing"
import useCurrentClient from "../state/client/useCurrentClient"
import {
	SelectedFiles,
	SingleDownloadProps,
	FileListingStruct,
} from "../components/SessionFiles/__config/shape"
import {
	discoverTopics,
	staticTitles,
	changeLeversPath,
} from "../components/SessionFiles/__config/constants"
import {
	healthCheckToData,
	cfcToData,
} from "../components/SessionFiles/__config/utilities"
import CheckboxListItem from "../components/SessionFiles/CheckboxListItem"
import useStyles from "../components/SessionFiles/__config/styles"
import SectionTitle from "../components/SectionTitle"
import HealthCheckPDF, {
	HealthCheckQuestionSet,
} from "../components/PDF/HealthCheckPDF"
import { questions } from "../components/HealthCheck/_config/data"
import ActionChecklistUseCase from "../data/ActionChecklist/ChecklistLogic"
import ActionNotesUseCase from "../data/ActionChecklist/NotesLogic"
import ActionChecklistPDF from "../components/PDF/ActionChecklistPDF"
import CashFlowCanvasPDF from "../components/PDF/CashFlowCanvasPDF"
import hasProperty from "../util/object/hasProperty"
import { canvasDisplayTitle } from "../components/CFC/__config/utilities"
import SnackbarMsg, {
	SnackbarMsgData,
} from "../components/SnackbarMsg/SnackbarMsg"
import ActionPriorityUseCase from "../data/ActionChecklist/PriorityLogic"

const useSessionStyles = makeStyles((theme: Theme) =>
	createStyles({
		backdrop: {
			zIndex: theme.zIndex.drawer + 1,
			color: "#fff",
		},
	})
)

const SessionFiles = (): ReactElement => {
	const classes = useSessionStyles()
	const cls = useStyles()
	const [selectedFiles, setSelectedFiles] = useState<SelectedFiles>({
		changeLevers: false,
		actionChecklist: false,
		healthChecks: [],
		cfc: [],
		discoverTopics: arrayFillWith(discoverTopics.length, false),
	})
	const [healthChecks, setHealthChecks] = useState<HealthCheckDataStruct[]>([])
	const [cfc, setCfc] = useState<CFCStruct[]>([])
	const [HCListing, setHCListing] = useState<FileListingStruct[]>([])
	const [CFCListing, setCFCListing] = useState<FileListingStruct[]>([])
	const assetBaseUrl = process.env.REACT_APP_ASSETS_URL || ""

	const [fetching, setFetching] = useState(true)
	const [exporting, setExporting] = useState(false)
	const [currentClient, synced] = useCurrentClient()

	const [snackbar, setSnackbar] = useState<SnackbarMsgData>({
		open: false,
		msg: "",
	})

	function showSnackbar(
		msg: SnackbarMsgData["msg"],
		severity: SnackbarMsgData["severity"]
	): void {
		setSnackbar({ ...snackbar, msg, severity, open: true })
	}

	function handleClose(event?: React.SyntheticEvent, reason?: string): void {
		if (reason === "clickaway") {
			return
		}

		setSnackbar({ ...snackbar, open: false })
	}

	const fetchData = useCallback(async () => {
		if (currentClient?.id) {
			const hcs = await HealthCheckUseCase.findByClient(currentClient.id)
			const cfcs = await CFCUseCase.findByClient(currentClient.id)

			setHealthChecks(hcs)
			setCfc(cfcs)

			setSelectedFiles((prev) => ({
				...prev,
				healthChecks: arrayFillWith(hcs.length, false),
				cfc: arrayFillWith(cfcs.length, false),
			}))

			setHCListing(hcs.reduce(healthCheckToData(), []))
			setCFCListing(cfcs.reduce(cfcToData(), []))
		}
		setFetching(false)
	}, [
		currentClient,
		setSelectedFiles,
		setHealthChecks,
		setCfc,
		setFetching,
		setHCListing,
		setCFCListing,
	])

	useEffect(() => {
		if (synced) {
			fetchData()
		}
	}, [fetchData, synced])

	const changeSingleDownload = (id: SingleDownloadProps["id"]) => (): void => {
		setSelectedFiles((prev) => ({
			...prev,
			[id]: !prev[id],
		}))
	}

	const getStaticPdf = (name: string, url: string) => {
		// IE does not support Fetch response.arrayBuffer().
		// Use Polyfill Fetch for PDF response buffer.
		return fetchPolyfill(url, {
			method: "GET",
		})
			.then((response: any) => response.arrayBuffer())
			.then((buffer: any) => ({ fileName: name, buffer }))
	}

	const makeStaticPdf = async (name: string, path: string): Promise<any> => {
		const file = encodeURI(`${assetBaseUrl}${path}`)
		const pdf = await getStaticPdf(name, file)
		return pdf
	}

	const pdfMakeBlobPromise = (
		pdf: pdfMake.TCreatedPdf,
		filename: string
	): Promise<{ blob: Blob; filename: string }> => {
		return new Promise((resolve) => {
			pdf.getBlob((b: Blob) => resolve({ blob: b, filename }))
		})
	}

	const generateZip = async (): Promise<void> => {
		if (currentClient?.id) {
			setExporting(true)
			const zip = new JSZip()

			// Change Levers document
			if (selectedFiles.changeLevers) {
				const CHPDF = await makeStaticPdf("ChangeLevers.pdf", changeLeversPath)
				zip.file(CHPDF.fileName, CHPDF.buffer)
			}

			// Action Checklist
			if (selectedFiles.actionChecklist) {
				const checklists = await ActionChecklistUseCase.findByClient(
					currentClient.id
				)
				const notes = await ActionNotesUseCase.findByClient(currentClient.id)
				const pdfPriority = await ActionPriorityUseCase.findByClient(
					currentClient.id
				)

				const ACPDF = await ActionChecklistPDF(
					currentClient?.name ?? "Client",
					checklists,
					notes,
					pdfPriority
				)
				const blob = await pdfMakeBlobPromise(
					ACPDF,
					"ActionChecklistSummary.pdf"
				)
				zip.file(blob.filename, blob.blob)
			}

			// Discover Topics
			const DTPromises: any = selectedFiles.discoverTopics
				.map((val, idx) => {
					if (val) {
						return makeStaticPdf(
							`${discoverTopics[idx].name}.pdf`,
							discoverTopics[idx].path
						)
					}
					return undefined
				})
				.filter((v) => typeof v !== "undefined")

			// Health Checks
			const HCNames: string[] = []
			const HCPromises = selectedFiles.healthChecks
				.map((val, idx) => {
					if (val) {
						const data = healthChecks[idx]
						if (data) {
							const pdfData: HealthCheckQuestionSet = {}
							questions.forEach((q, i) => {
								const { question } = q
								const answer = data?.answers[i] || "positive"
								const text = q.options[answer]
								// eslint-disable-next-line
								pdfData[i] = { question, answer, text }
							})
							// eslint-disable-next-line
							HCNames.push(
								`Completed Health Check ${format(
									data.createdAt!,
									"dd/MM/yyyy"
								)}.pdf`
									.replace(/ /g, "-")
									.replace(/\//g, "-")
							)
							return HealthCheckPDF(currentClient?.name ?? "Client", pdfData)
						}
					}

					return undefined
				})
				.filter((v) => typeof v !== "undefined")

			// CFC
			const CFCNames: string[] = []
			const CFCPromises = selectedFiles.cfc
				.map((val, idx) => {
					if (val) {
						const data = cfc[idx]
						if (data) {
							// eslint-disable-next-line
							CFCNames.push(
								`${canvasDisplayTitle(data)}.pdf`
									.replace(/ /g, "-")
									.replace(/\//g, "-")
							)
							return CashFlowCanvasPDF(currentClient?.name ?? "Client", data)
						}
					}

					return undefined
				})
				.filter((v) => typeof v !== "undefined")

			Promise.all([...HCPromises, ...CFCPromises])
				.then((res) => {
					const names = [...HCNames, ...CFCNames]

					const blobPromises = res
						.map((pdf, i) => {
							if (pdf) {
								return pdfMakeBlobPromise(pdf, names[i])
							}
							return undefined
						})
						.filter((v) => typeof v !== "undefined")

					Promise.all([...DTPromises, ...blobPromises])
						.then((res1) => {
							res1.forEach((doc) => {
								if (hasProperty(doc, "fileName")) {
									zip.file(doc.fileName, doc.buffer)
								} else {
									zip.file(doc.filename, doc.blob)
								}
							})

							zip.generateAsync({ type: "blob" }).then(function (content) {
								// see FileSaver.js
								saveAs(content, `${currentClient.name.replace(/ /g, "-")}.zip`)
								setExporting(false)
								showSnackbar(
									"The PDFs has been successfully exported",
									"success"
								)
							})
						})
						.catch(() => {
							setExporting(false)
							showSnackbar("Something went wrong, please try again", "error")
						})
				})
				.catch(() => {
					setExporting(false)
					showSnackbar("Something went wrong, please try again", "error")
				})
		}
	}

	const Nav = React.memo(() => {
		return (
			<ExpandableNav>
				<List component="nav" disablePadding>
					<ListItem button onClick={generateZip}>
						<ListItemIcon>
							<GetAppIcon />
						</ListItemIcon>
						<ListItemText>Download selected files</ListItemText>
					</ListItem>
				</List>
			</ExpandableNav>
		)
	})

	const SingleDownloads = ({
		title,
		id,
	}: SingleDownloadProps): ReactElement => (
		<ExpandableNav title={title}>
			<List component="nav" disablePadding>
				<CheckboxListItem
					onClick={changeSingleDownload(id)}
					checked={selectedFiles[id]}
					label={staticTitles[id]}
				/>
			</List>
		</ExpandableNav>
	)

	return (
		<>
			<PageContainer>
				<Grid container spacing={3}>
					<Grid item xs={12} md={9}>
						<Box className="content-area">
							<SectionTitle component="h1">Downloads</SectionTitle>
							<Typography>
								All the activities you completed in your session are saved here.
								Download and save the files to share and review.
							</Typography>
							<Typography>
								Select the items you want to save and download them from the
								control panel.
							</Typography>
						</Box>
						<Box className={cls.dropdownWrapper}>
							<SingleDownloads title="Change Levers" id="changeLevers" />
							<SingleDownloads title="Action Checklist" id="actionChecklist" />
							<FileListing
								title="Discover Topics"
								state={selectedFiles.discoverTopics}
								setState={setSelectedFiles}
								data={discoverTopics}
								id="discoverTopics"
							/>
							<FileListing
								title="Health Check"
								state={selectedFiles.healthChecks}
								setState={setSelectedFiles}
								data={HCListing}
								id="healthChecks"
								loading={fetching}
							/>
							<FileListing
								title="Cash Flow Canvas"
								state={selectedFiles.cfc}
								setState={setSelectedFiles}
								data={CFCListing}
								id="cfc"
								loading={fetching}
							/>
						</Box>
					</Grid>
					<Grid item xs={12} md={3}>
						<Nav />
					</Grid>
				</Grid>
			</PageContainer>
			<Backdrop className={classes.backdrop} open={exporting}>
				<CircularProgress color="inherit" />
			</Backdrop>
			{/* eslint-disable-next-line react/jsx-props-no-spreading */}
			<SnackbarMsg {...snackbar} onClose={handleClose} />
		</>
	)
}

export default SessionFiles
