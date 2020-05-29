import React, { ReactElement } from "react"
import { Grid } from "@material-ui/core"
import { PageContainer } from "../../components/Layouts"
import PageTip from "../../components/PageTip"
import CanvasForm from "../../components/Forms/CFC/CanvasForm"
import FourQuestions from "../../components/HealthCheck/FourQuestions"

const CFCCanvas = (): ReactElement => {
	return (
		<>
			<PageContainer maxWidth="lg">
				<Grid container spacing={3}>
					<Grid item sm={9}>
						<CanvasForm />
					</Grid>
					<Grid item sm={3}>
						<FourQuestions />
					</Grid>
				</Grid>
			</PageContainer>
			<PageTip tip="CFCanvasTip" />
		</>
	)
}

export default CFCCanvas
