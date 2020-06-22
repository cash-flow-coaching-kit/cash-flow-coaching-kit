import { ReactElement } from "react"
import {
	CanvasType,
	CFCTimeFrame,
	BaseCFCStruct,
	CashFlow,
} from "../../../data/_config/shape"
import { DateRangeProps } from "../../DateRange/__config/shape"

export type ComputedProps = {
	value: string
}

export type ControlProps<T> = {
	onChange: InputChange
	value: T
}

// #region Config Panel props
export interface BaseProps {
	customTitle: string
	onChange: InputChange
	useCustomTitle: boolean
}

export interface PanelProps extends BaseProps {
	canvasTypeValue: CanvasType
	canvasTimeframeValue: CFCTimeFrame
	startDate: Date
	endDate: Date
	onDateChange: DateRangeProps["onChange"]
}

export interface CustomTitleProps extends BaseProps {
	changeCheck: InputChange
}

// #endregion

export interface RepeaterFormProps {
	name: keyof BaseCFCStruct
	values: CashFlow[]
	onChange: InputChange
	gst: number
	total: number
	addItem: () => void
	removeItem: (id: CashFlow["id"]) => void
	beforeTotalChild?: () => ReactElement
}
