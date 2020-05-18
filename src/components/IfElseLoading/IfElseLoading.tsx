import React, { ReactElement, ReactNode } from "react"
import Loading from "../Loading"

/**
 * Prop defintion for the `IfElseLoading` component
 *
 * @interface IfElseLoadingProps
 */
interface IfElseLoadingProps {
	children: ReactNode
	if: boolean
}

/**
 * A component to render either the default Loading component
 * or its children based on a conditional
 *
 * @export
 * @param {IfElseLoadingProps} {
 * 	children,
 * 	if: check,
 * }
 * @returns {ReactElement}
 */
export default function IfElseLoading({
	children,
	if: check,
}: IfElseLoadingProps): ReactElement {
	return !check ? <Loading /> : <>{children}</>
}
