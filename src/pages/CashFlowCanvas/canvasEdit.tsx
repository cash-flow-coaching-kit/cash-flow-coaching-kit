import React, { ReactElement, useContext } from "react"
import { Grid } from "@material-ui/core"
import { useLocation } from "react-router-dom"
import qs from "qs"
import { toDate } from "date-fns"
import { PageContainer } from "../../components/Layouts"
import CanvasForm from "../../components/Forms/CFC/CanvasForm"
import PageTip from "../../components/PageTip"
import {
	BaseCFCStruct,
	CanvasType,
	CFCTimeFrame,
} from "../../data/_config/shape"
import { initialValues } from "../../components/Forms/CFC"
import ControlPanel from "../../components/CFC/ControlPanel"
import CFCContext from "../../state/CFC/context"
import { CFCFourQuestions } from "../../components/CFC"

type QueryParams = {
	title?: string
	useCustom?: string
	type?: CanvasType
	timeFrame?: CFCTimeFrame
	startDate?: string
	endDate?: string
}

/**
 * Edit a exisiting CFC
 *
 * @export
 * @returns {ReactElement}
 */
export default function CanvasEdit(): ReactElement {
	const location = useLocation()
	const v: QueryParams = qs.parse(location.search, { ignoreQueryPrefix: true })
	const { questionValues } = useContext(CFCContext)

	// Construct the initial data based on the query string values
	const initial: BaseCFCStruct = {
		...initialValues,
		canvasTitle: v.title || initialValues.canvasTitle,
		canvasType: v.type || initialValues.canvasType,
		canvasTimeFrame: v.timeFrame || initialValues.canvasTimeFrame,
		canvasStartDate: v.startDate
			? toDate(parseInt(v.startDate, 10))
			: initialValues.canvasStartDate,
		canvasEndDate: v.endDate
			? toDate(parseInt(v.endDate, 10))
			: initialValues.canvasEndDate,
	}

	/**
	 * Checks if the form is using a custom title or not
	 *
	 * @returns {boolean}
	 */
	function useCustom(): boolean {
		const use = v.useCustom
		if (typeof use === "undefined") {
			if (typeof v.title === "undefined" || v.title === "") {
				return false
				// eslint-disable-next-line no-else-return
			} else {
				return true
			}
		}

		return use !== "0"
	}

	return (
		<>
			<PageContainer maxWidth="lg">
				<Grid container spacing={3}>
					<Grid item sm={9}>
						<CanvasForm initialValues={initial} customTitle={useCustom()} />
					</Grid>
					<Grid item sm={3}>
						<CFCFourQuestions values={questionValues} />
						<ControlPanel />
					</Grid>
				</Grid>
			</PageContainer>
			<PageTip tip="CFCanvasTip" />
		</>
	)
}
