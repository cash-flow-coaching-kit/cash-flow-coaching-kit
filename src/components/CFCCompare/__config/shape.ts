import { CFCStruct, CFCId } from "../../../data/_config/shape"

// Tuple type for the selected canvases
export type CanvasTuple = [CFCStruct, CFCStruct]

/**
 * Prop definition for the CompareSelector component
 *
 * @export
 * @interface CompareSelectorProps
 */
export interface CompareSelectorProps {
	selectedCanvases: CanvasTuple
	allCanvases: CFCStruct[]
	changeSelected: (idx: number, id: CFCId) => void
}

/**
 * Prop definition for the TableHeader component
 *
 * @export
 * @interface TableHeaderProps
 */
export interface TableHeaderProps {
	selectedCanvases: CanvasTuple
}

export interface CompareTableProps {
	selectedCanvases: CanvasTuple
}

export interface CanvasItemRowProps {
	values: [number, number]
	label?: string
	bold?: boolean
	border?: boolean
	flip?: boolean
}
