import React, { ReactElement } from "react"
import { Typography, Grid, makeStyles } from "@material-ui/core"
import { PrivatePage, PageContainer } from "../../components/Layouts"
import PageTip from "../../components/PageTip"

const DTListing = (): ReactElement => {
	return (
		<PrivatePage>
			<h1>DTListing</h1>
			<PageTip tip="DiscoverTopicsTips" />
		</PrivatePage>
	)
}

export default DTListing
