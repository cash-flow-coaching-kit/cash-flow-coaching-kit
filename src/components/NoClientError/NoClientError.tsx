import React, { ReactElement, useContext } from "react"
import { Typography } from "@material-ui/core"
import { useTheme } from "@material-ui/core/styles"
import { ClientContext } from "../../state/client"

const NoClientError = (): ReactElement => {
	const theme = useTheme()
	const {
		state: { currentClient, clientSynced },
	} = useContext(ClientContext)

	const noClient = (): boolean =>
		clientSynced &&
		(typeof currentClient === "undefined" ||
			typeof currentClient.id === "undefined")

	return noClient() ? (
		<Typography
			variant="h6"
			color="error"
			style={{ marginTop: theme.spacing(2), marginBottom: theme.spacing(2) }}
		>
			Please select or add a client before continuing
		</Typography>
	) : (
		<></>
	)
}

export default NoClientError
