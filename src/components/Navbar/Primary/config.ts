import RecentActorsIcon from "@material-ui/icons/RecentActors"
import DescriptionIcon from "@material-ui/icons/Description"

import { PrivateRoutes } from "../../../util/routes/routes"
import { INavRoutes } from "../shared/NavigationLinks"

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

export default routes
