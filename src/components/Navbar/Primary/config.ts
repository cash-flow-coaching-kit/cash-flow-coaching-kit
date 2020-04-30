import RecentActorsIcon from "@material-ui/icons/RecentActors"
import DescriptionIcon from "@material-ui/icons/Description"

import { makeStyles } from "@material-ui/core"
import { PrivateRoutes } from "../../../util/routes/routes"
import { INavRoutes } from "../shared/NavigationLinks"

// Nav routes definition for the Primary navigation
const routes: INavRoutes[] = [
	{
		route: PrivateRoutes.ClientList,
		title: "Client List",
		Icon: RecentActorsIcon,
	},
	{
		route: PrivateRoutes.SessionFiles,
		title: "Session files",
		Icon: DescriptionIcon,
	},
]

export const usePrimaryStyles = makeStyles((theme) => ({
	clientCaption: {
		textTransform: "uppercase",
		lineHeight: 1,
	},
	clientName: {
		lineHeight: 1,
	},
}))

export default routes
