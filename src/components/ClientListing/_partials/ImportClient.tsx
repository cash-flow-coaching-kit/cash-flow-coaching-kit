import React, { ReactElement } from "react"
import GetAppIcon from "@material-ui/icons/GetApp"
import { Button } from "@material-ui/core"

/**
 * Handles the functionality to import a client
 *
 * @returns ReactElement
 * TODO: Implement functionality
 */
const ImportClient = (): ReactElement => {
	return (
		<Button variant="outlined" startIcon={<GetAppIcon />}>
			Import
		</Button>
	)
}

export default ImportClient
