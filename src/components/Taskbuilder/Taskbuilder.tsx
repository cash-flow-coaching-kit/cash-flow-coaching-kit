import React, { ReactElement } from "react"
import { Typography, Box } from "@material-ui/core"
import ExpandableNav from "../ExpandableNav"
import { useTaskBuilderStyles } from "./__config/styles"
import { Form } from "./__partials"
import { TaskbuilderProps } from "./__config/shape"
import IfElseLoading from "../IfElseLoading"
import useCurrentClient from "../../state/client/useCurrentClient"

/**
 * Taskbuilder component used on Discover topics pages
 * This will display a form for a specific
 * container and allow the user to add it to action
 * checklists
 *
 * @export
 * @param {TaskbuilderProps} {
 * 	container,
 * }
 * @returns {ReactElement}
 */
export default function Taskbuilder({
	container,
}: TaskbuilderProps): ReactElement {
	const styles = useTaskBuilderStyles()
	const [currentClient] = useCurrentClient()

	return (
		<ExpandableNav title="Task builder">
			<Box className={styles.innerBox}>
				{/* CONTENT */}
				<Typography className={styles.content}>
					Review the topic content and mark the tasks you will complete to
					better understand your cash flow.
				</Typography>

				{/* FORM */}
				<IfElseLoading if={typeof currentClient?.id !== "undefined"}>
					{/* eslint-disable-next-line @typescript-eslint/no-non-null-assertion */}
					<Form container={container} client={currentClient?.id!} />
				</IfElseLoading>
			</Box>
		</ExpandableNav>
	)
}
