import React, { ReactElement } from "react"
import { Box, Grid } from "@material-ui/core"
import { useInputWrapper } from "./__config/styles"
import { CanvasType, CFCTimeFrame } from "../../data/_config/shape"
import { DateRangeProps } from "../DateRange/__config/shape"
import CanvasTypeSelect from "./CanvasType"
import CanvasTimeFrameSelect from "./CanvasTimeFrame"
import DateRange from "../DateRange"
import UseCustomTitle from "./UseCustomTitle"

/**
 * Prop definition for the ConfigPanel component
 *
 * @interface ConfigPanelProps
 */
interface ConfigPanelProps {
	canvasTypeValue: CanvasType
	canvasTimeframeValue: CFCTimeFrame
	startDate: Date
	endDate: Date
	onChange: InputChange
	onDateChange: DateRangeProps["onChange"]
	customTitle: string
	changeCheck: InputChange
	useCustomTitle: boolean
}

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
export default function ConfigPanel({
	canvasTimeframeValue,
	canvasTypeValue,
	startDate,
	endDate,
	onChange,
	onDateChange,
	customTitle,
	changeCheck,
	useCustomTitle,
}: ConfigPanelProps): ReactElement {
	const wrapperCls = useInputWrapper()

	return (
		<Box className={`${wrapperCls.wrapper}`}>
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
			<UseCustomTitle
				title={customTitle}
				onChange={onChange}
				useCustom={useCustomTitle}
				changeCheck={changeCheck}
			/>
		</Box>
	)
}
