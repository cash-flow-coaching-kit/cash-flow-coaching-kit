import React, { ReactElement } from "react"
import PictureAsPdfIcon from "@material-ui/icons/PictureAsPdf"
import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core"
import AddIcon from "@material-ui/icons/Add"
import PublishIcon from "@material-ui/icons/Publish"
import { useHistory, useLocation } from "react-router-dom"
import FormatListNumberedIcon from "@material-ui/icons/FormatListNumbered"
import CompareArrowsIcon from "@material-ui/icons/CompareArrows"
import ExpandableNav from "../ExpandableNav"
import { PrivateRoutes } from "../../util/routes/routes"
import CopyCanvasTrigger from "./CopyCanvasTrigger"

/**
 * Canvas page control panel component
 *
 * @export
 * @returns {ReactElement}
 */
export default function ControlPanel(): ReactElement {
	const history = useHistory()
	const location = useLocation()

	const goTo = (route: PrivateRoutes) => (): void => {
		// eslint-disable-next-line
		history.push(route)
	}

	const isNewPage = (): boolean => {
		return location.pathname === PrivateRoutes.CFC
	}

	return (
		<ExpandableNav reactourLabel="canvas-control-panel">
			<List component="nav" disablePadding>
				{!isNewPage() && (
					<>
						<CopyCanvasTrigger />
						<ListItem button onClick={goTo(PrivateRoutes.CFC)}>
							<ListItemIcon>
								<AddIcon />
							</ListItemIcon>
							<ListItemText>Create new Canvas</ListItemText>
						</ListItem>
						<ListItem button>
							<ListItemIcon>
								<PublishIcon />
							</ListItemIcon>
							<ListItemText>Import data</ListItemText>
						</ListItem>
					</>
				)}
				<ListItem button onClick={goTo(PrivateRoutes.CFCListing)}>
					<ListItemIcon>
						<FormatListNumberedIcon />
					</ListItemIcon>
					<ListItemText>List of Canvases</ListItemText>
				</ListItem>
				<ListItem button onClick={goTo(PrivateRoutes.CFCCompare)}>
					<ListItemIcon>
						<CompareArrowsIcon />
					</ListItemIcon>
					<ListItemText>Compare Canvases</ListItemText>
				</ListItem>
				{!isNewPage() && (
					<ListItem button>
						<ListItemIcon>
							<PictureAsPdfIcon />
						</ListItemIcon>
						<ListItemText>Generate PDF</ListItemText>
					</ListItem>
				)}
			</List>
		</ExpandableNav>
	)
}
