import React, { ReactElement } from "react"
import { Grid } from "@material-ui/core"
import { ReactourStep } from "reactour"
import { PageContainer } from "../../components/Layouts"
import PageTip from "../../components/PageTip"
import CreateCanvasForm from "../../components/Forms/CFC/CanvasCreate"
import FourQuestions from "../../components/HealthCheck/FourQuestions"
import ControlPanel from "../../components/CFC/ControlPanel"
import PageTour from "../../components/PageTour"
import {
	CFC4QsTourContent,
	CFCCreateCanvas,
} from "../../components/CFC/__config/constants"

const steps: ReactourStep[] = [
	{
		selector: "[data-reactour='four-questions-nav']",
		content: CFC4QsTourContent,
	},
	{
		selector: "[data-reactour='create-a-canvas']",
		content: CFCCreateCanvas,
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
					<Grid item xs={12} md={9}>
						<CreateCanvasForm />
					</Grid>
					<Grid item xs={12} md={3}>
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
