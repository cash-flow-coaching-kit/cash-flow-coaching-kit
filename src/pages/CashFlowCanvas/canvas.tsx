import React, { ReactElement } from "react"
import { Grid } from "@material-ui/core"
import { PageContainer } from "../../components/Layouts"
import PageTip from "../../components/PageTip"
import CreateCanvasForm from "../../components/Forms/CFC/CanvasCreate"
import FourQuestions from "../../components/HealthCheck/FourQuestions"
import ControlPanel from "../../components/CFC/ControlPanel"

/**
 * Create a CFC page
 *
 * @export
 * @returns {ReactElement}
 */
export default function CFCCanvas(): ReactElement {
	return (
		<>
			<PageContainer maxWidth="lg">
				<Grid container spacing={3}>
					<Grid item sm={9}>
						<CreateCanvasForm />
					</Grid>
					<Grid item sm={3}>
						<FourQuestions />
						<ControlPanel />
					</Grid>
				</Grid>
			</PageContainer>
			<PageTip tip="CFCanvasTip" />
		</>
	)
}
