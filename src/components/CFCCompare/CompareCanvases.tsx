import React, {
	ReactElement,
	useCallback,
	useEffect,
	useState,
	useContext,
} from "react"
import { Divider } from "@material-ui/core"
import { useMachine } from "@xstate/react"
import { isAfter } from "date-fns"
import CompareSelector from "./CompareSelector"
import Spacer from "../Spacer"
import CompareTable from "./CompareTable"
import fetchMachine from "../Forms/CFC/__config/machine"
import NoCanvases from "../CFC/NoCanvases"
import Loading from "../Loading"
import useCurrentClient from "../../state/client/useCurrentClient"
import { CFCStruct, CFCId } from "../../data/_config/shape"
import { getCanvasData, changeSelected } from "./__config/utilities"
import NotEnoughCanvases from "./NotEnoughCanvases"
import { CanvasTuple } from "./__config/shape"
import CFCContext from "../../state/CFC/context"
import { calculateInitial } from "../Forms/CFC"
import { CFCActionTypes } from "../../state/CFC/shape"
import {
	calcQuestionFour,
	calcQuestionOne,
	calcQuestionTwo,
	calcQuestionThree,
} from "../CFC/__config/utilities"

/**
 * Component wrapper to display all the data in the compare table
 *
 * @export
 * @returns {ReactElement}
 */
export default function CompareCanvases(): ReactElement {
	// #region State Management
	const { dispatch } = useContext(CFCContext)
	const [stateMachine, changeState] = useMachine(fetchMachine)
	const [currentClient, clientSynced] = useCurrentClient()
	const [canvases, setCanvases] = useState<CFCStruct[]>([])
	const [selectedCanvases, setSelectedCanvases] = useState<CanvasTuple>()

	useEffect(() => {
		const left = selectedCanvases?.[0]
		const right = selectedCanvases?.[1]

		if (left && right) {
			const leftCalc = calculateInitial(left)
			const rightCalc = calculateInitial(right)

			dispatch({
				type: CFCActionTypes.ChangeQuestionValues,
				payload: {
					one: calcQuestionOne(leftCalc),
					two: calcQuestionTwo(
						leftCalc,
						left.paygWithholding,
						left.superAmount,
						left.incomeTax
					),
					three: calcQuestionThree(
						left.openingBalance,
						leftCalc,
						left.incomeTax
					),
					four: calcQuestionFour(leftCalc, rightCalc),
				},
			})
		}
	}, [selectedCanvases, dispatch])
	// #endregion

	// #region Data Fetching
	const fetchCanvasData = useCallback(async () => {
		const data = await getCanvasData(currentClient?.id)
		setCanvases(data)
		if (data.length >= 2) {
			const item1 = data[0]
			const item2 = data[1]
			setSelectedCanvases(
				isAfter(item1.canvasStartDate, item2.canvasStartDate)
					? [item1, item2]
					: [item2, item1]
			)
		}
		changeState(data.length < 2 ? "REJECT" : "RESOLVE")
	}, [currentClient, changeState])

	useEffect(() => {
		if (clientSynced) {
			fetchCanvasData()
		}
	}, [clientSynced, fetchCanvasData])
	// #endregion

	// #region Changing Selected Canvas
	/**
	 * Change the currently selected canvas to compare
	 *
	 * @param {number} idx
	 * @param {CFCId} id
	 */
	function changeSelectedCanvas(idx: number, id: CFCId): void {
		if (!selectedCanvases) return

		const newSelected = changeSelected(canvases, selectedCanvases, idx, id)
		setSelectedCanvases(newSelected)
	}
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
							// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
							selectedCanvases={selectedCanvases!}
							allCanvases={canvases}
							changeSelected={changeSelectedCanvas}
						/>
						<Spacer />
						<Divider />
						<Spacer />
						{/* eslint-disable-next-line @typescript-eslint/no-non-null-assertion */}
						<CompareTable selectedCanvases={selectedCanvases!} />
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
