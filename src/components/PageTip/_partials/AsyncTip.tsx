import React from "react"
import loadable from "@loadable/component"
import Loading from "../../Loading"

/**
 * Loadable component to dynamically render the tip content
 *
 */
const AsyncTip = loadable(
	(props: { tip: string }) => import(`../../../content/tips/${props.tip}`),
	{
		fallback: <Loading />,
	}
)

export default AsyncTip
