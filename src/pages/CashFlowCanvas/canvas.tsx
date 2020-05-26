import React, { ReactElement } from "react"
import { PageContainer } from "../../components/Layouts"
import PageTip from "../../components/PageTip"

const CFCCanvas = (): ReactElement => {
	return (
		<>
			<PageContainer>
				<h1>CFCCanvas</h1>
			</PageContainer>
			<PageTip tip="CFCanvasTip" />
		</>
	)
}

export default CFCCanvas
