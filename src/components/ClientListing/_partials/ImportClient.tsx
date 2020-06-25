import React, { ReactElement, useState } from "react"
import GetAppIcon from "@material-ui/icons/GetApp"
import { Button } from "@material-ui/core"
import { ImportClientDialog } from "../../../content/dialog"

/**
 * Handles the functionality to import a client
 *
 * @returns ReactElement
 */
export default function ImportClient(): ReactElement {
	const [dialogOpen, setDialogOpen] = useState(false)
	const onDialogClose = (): void => setDialogOpen(false)
	const onDialogOpen = (): void => setDialogOpen(true)

	return (
		<>
			<Button
				variant="outlined"
				startIcon={<GetAppIcon />}
				onClick={onDialogOpen}
			>
				Import
			</Button>
			<ImportClientDialog open={dialogOpen} onClose={onDialogClose} />
		</>
	)
}
