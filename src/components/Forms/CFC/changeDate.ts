import { BaseCFCStruct, CFCPanelSlice } from "../../../data/_config/shape"
import { calculatedEndDate, syncEndDate } from "../../../util/dates"

type DateRtn = {
	canvasStartDate: BaseCFCStruct["canvasStartDate"]
	canvasEndDate: BaseCFCStruct["canvasEndDate"]
}

export type CanvasDateKeys = "canvasStartDate" | "canvasEndDate"

export default function changeDate<T extends CFCPanelSlice>(
	k: CanvasDateKeys,
	v: Date,
	values: T
): DateRtn {
	// Sets the field value
	const val = {
		canvasEndDate: values.canvasEndDate,
		canvasStartDate: values.canvasStartDate,
		[k]: v,
	}

	// This checks if the start date is ahead of the end date
	if (k === "canvasStartDate" && syncEndDate(v, values.canvasEndDate)) {
		// if it is, it will set the end date to the start date
		return {
			...val,
			canvasEndDate: v,
		}
	}

	return val
}
