import React, { ReactElement } from "react"
import { Grid, Box, Typography, List } from "@material-ui/core"
import { ReactourStep } from "reactour"
import { PageContainer } from "../../components/Layouts"
import PageTip from "../../components/PageTip"
import CreateCanvasForm from "../../components/Forms/CFC/CanvasCreate"
import FourQuestions from "../../components/HealthCheck/FourQuestions"
import ControlPanel from "../../components/CFC/ControlPanel"
import SectionTitle from "../../components/SectionTitle"
import Spacer from "../../components/Spacer"
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
						<SectionTitle component="h1">Cash Flow Canvas</SectionTitle>
						<Box className="content-area">
							<Typography>
								The Cash Flow Canvas will help you answer the Four Key
								Questions. Knowing and understanding these will ensure you make
								informed decisions and plans for your business.
							</Typography>
							<Typography className="list-describer">
								You can use it in five different ways:
							</Typography>
							<List component="ul" className="ul-list">
								<Typography component="li">
									Review - look at how you have previously managed your cash
									flow
								</Typography>
								<Typography component="li">
									Forecast - predict what your future cash flow will look like
								</Typography>
								<Typography component="li">
									Change - explore actions you can take to improve your cash
									flow
								</Typography>
								<Typography component="li">
									Plan - create future cash flow that meets your goals
								</Typography>
								<Typography component="li">
									Track - compare your actual and predicted cash flow
								</Typography>
							</List>
							<Typography>
								To import, save or compare data, see the Control Panel.
							</Typography>
						</Box>
						<Spacer space={3} />
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
