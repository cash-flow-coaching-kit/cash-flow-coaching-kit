import React, { ReactElement, useState, useContext } from "react"
import PictureAsPdfIcon from "@material-ui/icons/PictureAsPdf"
import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core"
import AddIcon from "@material-ui/icons/Add"
import { useHistory, useLocation, useParams } from "react-router-dom"
import FormatListNumberedIcon from "@material-ui/icons/FormatListNumbered"
import GetAppIcon from "@material-ui/icons/GetApp"
import ExpandableNav from "../ExpandableNav"
import { PrivateRoutes } from "../../util/routes/routes"
import CopyCanvasTrigger from "./CopyCanvasTrigger"
import { ControlCompareLink } from "../CFCCompare"
import ImportDataModal from "../ImportDataModal/ImportDataModal"
import CFCUseCase from "../../data/CFC/CFCLogic"
import CashFlowCanvasPDF from "../PDF/CashFlowCanvasPDF"
import useCurrentClient from "../../state/client/useCurrentClient"
import CFCContext from "../../state/CFC/context"
import CFCComparePDF from "../PDF/CFCComparePDF"

/**
 * Canvas page control panel component
 *
 * @export
 * @returns {ReactElement}
 */
export default function ControlPanel(): ReactElement {
	const history = useHistory()
	const location = useLocation()
	const [importDataOpen, setImportDataOpen] = useState<boolean>(false)
	const { id: canvasId } = useParams() as any // eslint-disable-line
	const [currentClient] = useCurrentClient()
	const { questionValues } = useContext(CFCContext)
	const { leftCompare, rightCompare } = useContext(CFCContext)

	const goTo = (route: PrivateRoutes) => (): void => {
		// eslint-disable-next-line
		history.push(route)
	}

	const isNewPage = (): boolean => location.pathname === PrivateRoutes.CFC

	const isCompare = (): boolean =>
		location.pathname === PrivateRoutes.CFCCompare

	const importData = () => {
		setImportDataOpen(!importDataOpen)
	}

	const pdfMakeBlobPromise = (
		pdf: pdfMake.TCreatedPdf,
		filename: string
	): Promise<{ blob: Blob; filename: string }> => {
		return new Promise((resolve) => {
			pdf.getBlob((b: Blob) => resolve({ blob: b, filename }))
		})
	}

	const printPDF = async () => {
		if (canvasId && typeof canvasId === "string" && !isCompare()) {
			const data = await CFCUseCase.findById(canvasId)
			if (data === undefined) alert("no data")
			// eslint-disable-line
			else {
				const pdf = await CashFlowCanvasPDF(
					currentClient?.name ?? "Client",
					data,
					questionValues
				)
				const blob = await pdfMakeBlobPromise(pdf, "Canvas.pdf")
				saveAs(blob.blob, `Canvas.pdf`)
			}
		}
		if (isCompare()) {
			if (leftCompare && rightCompare) {
				const pdf = await CFCComparePDF(leftCompare, rightCompare)
				const blob = await pdfMakeBlobPromise(pdf, "CompareCanvas.pdf")
				saveAs(blob.blob, `CompareCanvas.pdf`)
			}
		}
	}

	return (
		<ExpandableNav reactourLabel="canvas-control-panel">
			{importDataOpen && <ImportDataModal open onClose={importData} />}
			<List component="nav" disablePadding>
				{!isNewPage() && !isCompare() && <CopyCanvasTrigger />}
				{(!isNewPage() || isCompare()) && (
					<ListItem button onClick={goTo(PrivateRoutes.CFC)}>
						<ListItemIcon>
							<AddIcon />
						</ListItemIcon>
						<ListItemText>Create new Canvas</ListItemText>
					</ListItem>
				)}
				{!isNewPage() && !isCompare() && (
					<ListItem button onClick={importData}>
						<ListItemIcon>
							<GetAppIcon />
						</ListItemIcon>
						<ListItemText>Import data</ListItemText>
					</ListItem>
				)}
				<ListItem button onClick={goTo(PrivateRoutes.CFCListing)}>
					<ListItemIcon>
						<FormatListNumberedIcon />
					</ListItemIcon>
					<ListItemText>List of Canvasses</ListItemText>
				</ListItem>
				{!isCompare() && !isNewPage() && <ControlCompareLink />}
				{!isNewPage() && (
					<ListItem
						component="button"
						className="pdfDownloadLink"
						onClick={printPDF}
					>
						<ListItemIcon>
							<PictureAsPdfIcon />
						</ListItemIcon>
						<ListItemText>Download Generated PDF</ListItemText>
					</ListItem>
				)}
			</List>
		</ExpandableNav>
	)
}
