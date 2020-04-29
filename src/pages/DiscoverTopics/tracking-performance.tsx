import React, { ReactElement } from "react"
import { PrivatePage } from "../../components/Layouts"
import PageTip from "../../components/PageTip"

const TrackingPerformance = (): ReactElement => {
	return (
		<PrivatePage>
			<h1>TrackingPerformance</h1>
			<PageTip tip="DiscoverTopicsTips" />
		</PrivatePage>
	)
}

export default TrackingPerformance
