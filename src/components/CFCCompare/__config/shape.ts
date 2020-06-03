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
