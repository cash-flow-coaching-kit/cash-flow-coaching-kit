import React, { ReactElement, useContext } from "react"
import { Grid, createMuiTheme, ThemeProvider } from "@material-ui/core"
import { PageContainer } from "../../components/Layouts"
import SectionTitle from "../../components/SectionTitle"
import CompareCanvases from "../../components/CFCCompare"
import ControlPanel from "../../components/CFC/ControlPanel"
import CFCContext from "../../state/CFC/context"
import { CFCFourQuestions } from "../../components/CFC"
import applyTheme from "../../theme/mui/applyTheme"

const pageTheme = createMuiTheme(applyTheme)

export default function CFCCompare(): ReactElement {
	const { questionValues } = useContext(CFCContext)

	return (
		<ThemeProvider theme={pageTheme}>
			<PageContainer>
				<SectionTitle>Compare canvas fields</SectionTitle>
				<Grid container spacing={3}>
					<Grid item sm={9}>
						<CompareCanvases />
					</Grid>
					<Grid item sm={3}>
						<CFCFourQuestions values={questionValues} />
						<ControlPanel />
					</Grid>
				</Grid>
			</PageContainer>
		</ThemeProvider>
	)
}
