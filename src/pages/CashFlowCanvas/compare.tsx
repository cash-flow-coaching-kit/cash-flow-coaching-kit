import React, { ReactElement } from "react"
import { Grid } from "@material-ui/core"
import { PageContainer } from "../../components/Layouts"
import SectionTitle from "../../components/SectionTitle"
import CompareCanvases from "../../components/CFCCompare"
import FourQuestions from "../../components/HealthCheck/FourQuestions"
import ControlPanel from "../../components/CFC/ControlPanel"

export default function CFCCompare(): ReactElement {
	return (
		<PageContainer>
			<SectionTitle>Compare canvas fields</SectionTitle>
			<Grid container spacing={3}>
				<Grid item sm={9}>
					<CompareCanvases />
				</Grid>
				<Grid item sm={3}>
					<FourQuestions />
					{/* TODO: Modify to show the correct items */}
					<ControlPanel />
				</Grid>
			</Grid>
		</PageContainer>
	)
}
