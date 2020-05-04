import React, { ReactElement } from "react"
import { Typography, List } from "@material-ui/core"
import useSharedTipStyling from "./style"

/**
 * Tip displayed on the client listing page
 *
 * @returns ReactElement
 */
const ClientListTips = (): ReactElement => {
	const styles = useSharedTipStyling()

	return (
		<>
			<Typography variant="h6">Important</Typography>
			<List className={styles.list}>
				<Typography component="li">
					Clearing your browser history will erase all client data - ensure you
					export data regularly
				</Typography>
				<Typography component="li">
					How you save client information will vary depending on your browser’s
					settings
				</Typography>
				<Typography component="li">
					Check your browser download settings to learn how to save your
					client’s data effectively
				</Typography>
				<Typography component="li">
					Review the privacy and data usage policy for more information
				</Typography>
			</List>
			<Typography variant="h6">Next Steps</Typography>
			<List className={styles.list}>
				<Typography component="li">
					Update your client’s data each time you have a coaching conversation
					to record their progress
				</Typography>
				<Typography component="li">
					Use the Client List to transfer your information from one device to
					another
				</Typography>
				<Typography component="li">
					Visit Health Check first for new clients
				</Typography>
			</List>
		</>
	)
}

export default ClientListTips
