import React, { ReactElement } from "react"
import PictureAsPdfIcon from "@material-ui/icons/PictureAsPdf"
import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core"
import AddIcon from "@material-ui/icons/Add"
import { useHistory, useLocation } from "react-router-dom"
import FormatListNumberedIcon from "@material-ui/icons/FormatListNumbered"
import GetAppIcon from "@material-ui/icons/GetApp"
import ExpandableNav from "../ExpandableNav"
import { PrivateRoutes } from "../../util/routes/routes"
import CopyCanvasTrigger from "./CopyCanvasTrigger"
import { ControlCompareLink } from "../CFCCompare"

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

	const isCompare = (): boolean => {
		return location.pathname === PrivateRoutes.CFCCompare
	}

	return (
		<ExpandableNav>
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
					<ListItem button>
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
					<ListItemText>List of Canvases</ListItemText>
				</ListItem>
				{!isCompare() && !isNewPage() && <ControlCompareLink />}
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
