import React, { ReactElement } from "react"
import PublishIcon from "@material-ui/icons/Publish"
import { Button } from "@material-ui/core"

/**
 * Handles the functionality to import a client
 *
 * @returns ReactElement
 * TODO: Implement functionality
 */
const ImportClient = (): ReactElement => {
	return (
		<Button variant="outlined" startIcon={<PublishIcon />}>
			Import
		</Button>
	)
}

export default ImportClient
