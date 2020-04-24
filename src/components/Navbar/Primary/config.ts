import RecentActorsIcon from "@material-ui/icons/RecentActors"
import DescriptionIcon from "@material-ui/icons/Description"
import { OverridableComponent } from "@material-ui/core/OverridableComponent"
import { SvgIconTypeMap } from "@material-ui/core"

import { PrivateRoutes } from "../../../util/routes/routes"

export interface PrimaryNavRoutes {
	route: PrivateRoutes
	title: string
	Icon?: OverridableComponent<SvgIconTypeMap<{}, "svg">>
}

const routes: PrimaryNavRoutes[] = [
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
