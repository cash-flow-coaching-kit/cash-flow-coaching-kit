import React, { ReactElement, useState, useCallback, useEffect } from "react"
import {
	Grid,
	Typography,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Box,
} from "@material-ui/core"
import GetAppIcon from "@material-ui/icons/GetApp"
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
} from "../components/SessionFiles/__config/constants"
import {
	healthCheckToData,
	cfcToData,
} from "../components/SessionFiles/__config/utilities"
import CheckboxListItem from "../components/SessionFiles/CheckboxListItem"
import useStyles from "../components/SessionFiles/__config/styles"
import SectionTitle from "../components/SectionTitle"

const SessionFiles = (): ReactElement => {
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

	const [fetching, setFetching] = useState(true)
	const [currentClient, synced] = useCurrentClient()

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

	const Nav = React.memo(() => {
		return (
			<ExpandableNav>
				<List component="nav" disablePadding>
					<ListItem button>
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
		<PageContainer>
			<Grid container spacing={3}>
				<Grid item xs={12} md={9}>
					<Box className="content-area">
						<SectionTitle>Downloads</SectionTitle>
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
	)
}

export default SessionFiles
