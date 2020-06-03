import React, { ReactElement } from "react"
import { Divider } from "@material-ui/core"
import CompareSelector from "./CompareSelector"
import Spacer from "../Spacer"
import CompareTable from "./CompareTable"

/**
 * Component wrapper to display all the data in the compare table
 *
 * @export
 * @returns {ReactElement}
 */
export default function CompareCanvases(): ReactElement {
	return (
		<>
			<CompareSelector />
			<Spacer />
			<Divider />
			<Spacer />
			<CompareTable />
		</>
	)
}
