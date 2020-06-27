import React, { ReactElement, useContext } from "react"
import { Grid, Typography } from "@material-ui/core"
import { PageContainer } from "../../components/Layouts"
import SectionTitle from "../../components/SectionTitle"
import CompareCanvases from "../../components/CFCCompare"
import ControlPanel from "../../components/CFC/ControlPanel"
import CFCContext from "../../state/CFC/context"
import { CFCFourQuestions } from "../../components/CFC"
import Spacer from "../../components/Spacer"

export default function CFCCompare(): ReactElement {
	const { questionValues } = useContext(CFCContext)

	return (
		<PageContainer>
			<SectionTitle component="h1">Compare canvas fields</SectionTitle>
			<Typography>
				Compare different canvasses to track cash flow trends
			</Typography>
			<Spacer space={4} />
			<Grid container spacing={3}>
				<Grid item xs={12} md={9}>
					<CompareCanvases />
				</Grid>
				<Grid item xs={12} md={3}>
					<CFCFourQuestions values={questionValues} />
					<ControlPanel />
				</Grid>
			</Grid>
		</PageContainer>
	)
}
