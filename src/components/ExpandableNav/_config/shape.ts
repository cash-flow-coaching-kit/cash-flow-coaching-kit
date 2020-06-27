import { ReactNode } from "react"

/**
 * Prop interface for `<ExpandableNav>`
 *
 * @export
 * @interface IExpandableNavProps
 */
export interface IExpandableNavProps {
	children: ReactNode
	title?: string
	subHeading?: string
	defaultExpanded?: boolean
	reactourLabel?: string
}
