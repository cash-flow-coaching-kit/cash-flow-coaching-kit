/* eslint-disable import/prefer-default-export */
import RecentActorsIcon from "@material-ui/icons/RecentActors"
import DescriptionIcon from "@material-ui/icons/Description"
import { PrivateRoutes } from "../../../../util/routes/routes"
import { INavRoutes } from "../../_config/shape"

// Nav routes definition for the Primary navigation
export const routes: INavRoutes[] = [
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
