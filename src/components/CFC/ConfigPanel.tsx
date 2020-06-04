import React, { ReactElement, memo, useEffect } from "react"
import { Box, Grid } from "@material-ui/core"
import { useInputWrapper } from "./__config/styles"
import CanvasTypeSelect from "./CanvasType"
import CanvasTimeFrameSelect from "./CanvasTimeFrame"
import DateRange from "../DateRange"
import UseCustomTitle from "./UseCustomTitle"
import { PanelProps, CustomTitleProps } from "./__config/shape"

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
}: PanelProps) {
	useEffect(() => {}, [canvasTypeValue, canvasTimeframeValue])

	return (
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
