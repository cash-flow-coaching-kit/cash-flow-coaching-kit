import React, { ReactElement, ReactNode } from "react"

/**
 * Prop definition for the `ConditionalChildren` component
 *
 * @interface CCP
 */
interface CCP {
	node: ReactNode
}

/**
 * Conditionally renders children
 *
 * @export
 * @param {CCP} { node }
 * @returns {ReactElement}
 */
export default function ConditionalChildren({ node }: CCP): ReactElement {
	return React.Children.count(node) ? <>{node}</> : <></>
}
