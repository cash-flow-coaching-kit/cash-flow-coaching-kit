import React, { ReactElement } from "react"
import { Grid } from "@material-ui/core"
import { ReactourStep } from "reactour"
import { PageContainer } from "../../components/Layouts"
import PageTip from "../../components/PageTip"
import CreateCanvasForm from "../../components/Forms/CFC/CanvasCreate"
import FourQuestions from "../../components/HealthCheck/FourQuestions"
import ControlPanel from "../../components/CFC/ControlPanel"
import PageTour from "../../components/PageTour"

const steps: ReactourStep[] = [
	{
		selector: "[data-reactour='create-a-canvas']",
		content: "Test content 1",
	},
	{
		selector: "[data-reactour='four-questions-nav']",
		content: "Test content 2",
	},
	{
		selector: "[data-reactour='canvas-control-panel']",
		content: "Test content 3",
	},
]

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
			<PageTour steps={steps} />
		</>
	)
}
