import React, { ReactElement, useContext } from "react"
import { Grid } from "@material-ui/core"
import { PageContainer } from "../../components/Layouts"
import SectionTitle from "../../components/SectionTitle"
import CompareCanvases from "../../components/CFCCompare"
import ControlPanel from "../../components/CFC/ControlPanel"
import CFCContext from "../../state/CFC/context"
import { CFCFourQuestions } from "../../components/CFC"

export default function CFCCompare(): ReactElement {
	const { questionValues } = useContext(CFCContext)

	return (
		<PageContainer>
			<SectionTitle>Compare canvas fields</SectionTitle>
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
