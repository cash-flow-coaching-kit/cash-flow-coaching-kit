import React, { ReactElement, useCallback, useEffect, useState } from "react"
import { Divider } from "@material-ui/core"
import { useMachine } from "@xstate/react"
import CompareSelector from "./CompareSelector"
import Spacer from "../Spacer"
import CompareTable from "./CompareTable"
import fetchMachine from "../Forms/CFC/__config/machine"
import NoCanvases from "../CFC/NoCanvases"
import Loading from "../Loading"
import useCurrentClient from "../../state/client/useCurrentClient"
import { CFCStruct } from "../../data/_config/shape"
import { getCanvasData } from "./__config/utilities"
import NotEnoughCanvases from "./NotEnoughCanvases"
import { CanvasTuple } from "./__config/shape"

/**
 * Component wrapper to display all the data in the compare table
 *
 * @export
 * @returns {ReactElement}
 */
export default function CompareCanvases(): ReactElement {
	// #region State Management
	const [stateMachine, changeState] = useMachine(fetchMachine)
	const [currentClient, clientSynced] = useCurrentClient()
	const [canvases, setCanvases] = useState<CFCStruct[]>([])
	const [selectedCanvases, setSelectedCanvases] = useState<CanvasTuple>()
	// #endregion

	// #region Data Fetching
	const fetchCanvasData = useCallback(async () => {
		const data = await getCanvasData(currentClient?.id)
		setCanvases(data)
		if (data.length >= 2) {
			setSelectedCanvases([data[0], data[1]])
		}
		changeState(data.length < 2 ? "REJECT" : "RESOLVE")
	}, [currentClient, changeState])

	useEffect(() => {
		if (clientSynced) {
			fetchCanvasData()
		}
	}, [clientSynced, fetchCanvasData])
	// #endregion

	// #region Component rendering
	/**
	 * Renders the component based on the current state of the state machine
	 *
	 * @returns {ReactElement}
	 */
	function renderForStateMachine(): ReactElement {
		switch (stateMachine.value) {
			case "failure":
				return canvases.length === 1 ? <NotEnoughCanvases /> : <NoCanvases />
			case "success":
				return (
					<>
						<CompareSelector
							selectedCanvases={selectedCanvases!}
							allCanvases={canvases}
						/>
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
	// #endregion
}
