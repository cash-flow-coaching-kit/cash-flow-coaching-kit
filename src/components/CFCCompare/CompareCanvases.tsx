import React, { ReactElement } from "react"
import { Divider } from "@material-ui/core"
import { useMachine } from "@xstate/react"
import CompareSelector from "./CompareSelector"
import Spacer from "../Spacer"
import CompareTable from "./CompareTable"
import fetchMachine from "../Forms/CFC/__config/machine"
import NoCanvases from "../CFC/NoCanvases"
import Loading from "../Loading"

/**
 * Component wrapper to display all the data in the compare table
 *
 * @export
 * @returns {ReactElement}
 */
export default function CompareCanvases(): ReactElement {
	const [stateMachine, changeState] = useMachine(fetchMachine)

	/**
	 * Renders the component based on the current state of the state machine
	 *
	 * @returns {ReactElement}
	 */
	function renderForStateMachine(): ReactElement {
		switch (stateMachine.value) {
			case "failure":
				return <NoCanvases />
			case "success":
				return (
					<>
						<CompareSelector />
						<Spacer />
						<Divider />
						<Spacer />
						<CompareTable />
					</>
				)
			case "loading":
			default:
				return <Loading />
		}
	}

	return renderForStateMachine()
}
