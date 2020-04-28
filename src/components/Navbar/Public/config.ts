import RecentActorsIcon from "@material-ui/icons/RecentActors"

import { PrivateRoutes } from "../../../util/routes/routes"
import { INavRoutes } from "../shared/NavigationLinks"

// Nav routes definition for the Primary navigation
const routes: INavRoutes[] = [
	{
		route: PrivateRoutes.ClientList,
		title: "Client List",
		Icon: RecentActorsIcon,
	},
]

export default routes
