import React, { ReactElement } from "react"
import { Grid, Box, Typography, List, Divider } from "@material-ui/core"
import { PageContainer } from "../../components/Layouts"
import PageTip from "../../components/PageTip"
import CreateCanvasForm from "../../components/Forms/CFC/CanvasCreate"
import FourQuestions from "../../components/HealthCheck/FourQuestions"
import ControlPanel from "../../components/CFC/ControlPanel"
import SectionTitle from "../../components/SectionTitle"
import Spacer from "../../components/Spacer"

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
						<SectionTitle component="h1">Cash flow canvas</SectionTitle>
						<Box className="content-area">
							<Typography>
								The cash flow canvas will help you answer the four key
								questions. Knowing and understanding these will ensure you make
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
									Plan - create a new future cash flow that meets your goalsw
								</Typography>
								<Typography component="li">
									Track - compare your actual and predicted cash flow
								</Typography>
							</List>
							<Typography>
								To import, save or compare data, see the control panel.
							</Typography>
						</Box>
						<Spacer space={3} />
						<Typography variant="h6" component="h2">
							Start your cash flow canvas
						</Typography>
						<Spacer />
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
