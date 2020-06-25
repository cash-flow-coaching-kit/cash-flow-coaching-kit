import React, {
	ReactElement,
	memo,
	useEffect,
	useCallback,
	useContext,
} from "react"
import { Box, Grid } from "@material-ui/core"
import { useParams } from "react-router-dom"
import Alert from "@material-ui/lab/Alert"
import { isValid } from "date-fns"
import { useInputWrapper } from "./__config/styles"
import CanvasTypeSelect from "./CanvasType"
import CanvasTimeFrameSelect from "./CanvasTimeFrame"
import DateRange from "../DateRange"
import UseCustomTitle from "./UseCustomTitle"
import { PanelProps, CustomTitleProps } from "./__config/shape"
import useCurrentClient from "../../state/client/useCurrentClient"
import { performDupFind } from "./__config/utilities"
import CFCContext from "../../state/CFC/context"
import { CFCActionTypes } from "../../state/CFC/shape"
import Spacer from "../Spacer"

/**
 * Prop definition for the ConfigPanel component
 *
 * @interface ConfigPanelProps
 */
interface ConfigPanelProps extends PanelProps, CustomTitleProps {
	wrapped?: boolean
}

// Duplicate canvas error message
export const DuplicateCanvasError = (): ReactElement => (
	<Alert severity="error">
		A canvas with this title has already been created. Make sure that your
		canvas title is unique.
	</Alert>
)

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
	const { id } = useParams()
	const { dispatch } = useContext(CFCContext)
	const fetchPossibleDups = useCallback(async () => {
		if (currentClient?.id) {
			const dup = await performDupFind(
				{
					canvasEndDate: endDate,
					canvasStartDate: startDate,
					canvasTitle: customTitle,
					canvasTimeFrame: canvasTimeframeValue,
					canvasType: canvasTypeValue,
				},
				currentClient.id,
				id || undefined
			)
			dispatch({
				type: CFCActionTypes.ChangeDuplicateError,
				payload: dup !== false,
			})
		}
	}, [
		canvasTypeValue,
		canvasTimeframeValue,
		currentClient,
		endDate,
		startDate,
		customTitle,
		id,
		dispatch,
	])

	useEffect(() => {
		if (clientSynced) {
			console.log("Fetch possible dups")
			fetchPossibleDups()
		}
	}, [fetchPossibleDups, clientSynced, id])

	// Checks if the start and end date is valid
	useEffect(() => {
		dispatch({
			type: CFCActionTypes.ChangeInvalidDateError,
			payload: !isValid(startDate) || !isValid(endDate),
		})
	}, [startDate, endDate, dispatch])

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
	const { duplicateError } = useContext(CFCContext)

	return (
		<Box className={`${wrapped ? wrapperCls.wrapper : ""}`}>
			<UseCustomTitle
				title={customTitle}
				onChange={onChange}
				useCustom={useCustomTitle}
				changeCheck={changeCheck}
			/>
			<Panel
				canvasTypeValue={canvasTypeValue}
				canvasTimeframeValue={canvasTimeframeValue}
				startDate={startDate}
				endDate={endDate}
				onDateChange={onDateChange}
				onChange={onChange}
				customTitle={customTitle}
			/>
			{duplicateError && (
				<>
					<Spacer />
					<DuplicateCanvasError />
				</>
			)}
		</Box>
	)
}

export default memo(ConfigPanel)
