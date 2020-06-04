import React, {
	ReactElement,
	memo,
	useEffect,
	useCallback,
	useState,
} from "react"
import { Box, Grid } from "@material-ui/core"
import Alert from "@material-ui/lab/Alert"
import { Link } from "react-router-dom"
import { useInputWrapper } from "./__config/styles"
import CanvasTypeSelect from "./CanvasType"
import CanvasTimeFrameSelect from "./CanvasTimeFrame"
import DateRange from "../DateRange"
import UseCustomTitle from "./UseCustomTitle"
import { PanelProps, CustomTitleProps } from "./__config/shape"
import useCurrentClient from "../../state/client/useCurrentClient"
import CFCUseCase from "../../data/CFC/CFCLogic"
import { identifyIfDuplicate } from "./__config/utilities"
import { CFCStruct } from "../../data/_config/shape"
import { routeVarReplacement, PrivateRoutes } from "../../util/routes/routes"
import Spacer from "../Spacer"

/**
 * Prop definition for the ConfigPanel component
 *
 * @interface ConfigPanelProps
 */
interface ConfigPanelProps extends PanelProps, CustomTitleProps {
	wrapped?: boolean
}

/**
 * Wraps the config panel form in memo to ensure it only
 * re-render when required
 *
 */
const Panel = memo(function Panel({
	canvasTimeframeValue,
	canvasTypeValue,
	startDate,
	endDate,
	onChange,
	onDateChange,
	customTitle,
}: PanelProps) {
	const [currentClient, clientSynced] = useCurrentClient()
	const [dupError, setDupError] = useState<false | CFCStruct>(false)
	const fetchPossibleDups = useCallback(async () => {
		if (currentClient?.id) {
			const dups = await CFCUseCase.findPossibleDuplicates(
				canvasTypeValue,
				canvasTimeframeValue,
				currentClient?.id
			)
			const dup = identifyIfDuplicate(dups, {
				canvasEndDate: endDate,
				canvasStartDate: startDate,
				canvasTitle: customTitle,
				canvasTimeFrame: canvasTimeframeValue,
				canvasType: canvasTypeValue,
			})

			setDupError(dup)
		}
	}, [
		canvasTypeValue,
		canvasTimeframeValue,
		currentClient,
		endDate,
		startDate,
		customTitle,
	])

	useEffect(() => {
		if (clientSynced) {
			fetchPossibleDups()
		}
	}, [fetchPossibleDups, clientSynced])

	return (
		<>
			<Grid container spacing={2}>
				<Grid item sm={3}>
					<CanvasTypeSelect value={canvasTypeValue} onChange={onChange} />
				</Grid>
				<Grid item sm={3}>
					<CanvasTimeFrameSelect
						value={canvasTimeframeValue}
						onChange={onChange}
					/>
				</Grid>
				<Grid item sm={6}>
					<DateRange
						startDate={startDate}
						endDate={endDate}
						onChange={onDateChange}
					/>
				</Grid>
			</Grid>
			{dupError && (
				<>
					<Spacer />
					<Alert severity="error">
						This appears to be a duplicate canvas title. This title is being
						used by{" "}
						<Link
							to={routeVarReplacement(PrivateRoutes.CFCEdit, [
								[":id", `${dupError.id || 0}`],
							])}
						>
							this canvas
						</Link>
					</Alert>
				</>
			)}
		</>
	)
})

/**
 * Config panel component found at the top of the CFC form
 *
 * @export
 * @param {ConfigPanelProps} {
 * 	canvasTimeframeValue,
 * 	canvasTypeValue,
 * 	startDate,
 * 	endDate,
 * 	onChange,
 * 	onDateChange,
 * 	customTitle,
 * 	changeCheck,
 * 	useCustomTitle,
 * }
 * @returns {ReactElement}
 */
function ConfigPanel({
	canvasTimeframeValue,
	canvasTypeValue,
	startDate,
	endDate,
	onChange,
	onDateChange,
	customTitle,
	changeCheck,
	useCustomTitle,
	wrapped = true,
}: ConfigPanelProps): ReactElement {
	const wrapperCls = useInputWrapper()

	return (
		<Box className={`${wrapped ? wrapperCls.wrapper : ""}`}>
			<Panel
				canvasTypeValue={canvasTypeValue}
				canvasTimeframeValue={canvasTimeframeValue}
				startDate={startDate}
				endDate={endDate}
				onDateChange={onDateChange}
				onChange={onChange}
				customTitle={customTitle}
			/>
			<UseCustomTitle
				title={customTitle}
				onChange={onChange}
				useCustom={useCustomTitle}
				changeCheck={changeCheck}
			/>
		</Box>
	)
}

export default memo(ConfigPanel)
