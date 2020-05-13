import React, { ReactElement } from "react"
import { Typography } from "@material-ui/core"
import ChecklistModal from "../components/ChecklistModal"

const ChangeLevers = (): ReactElement => {
	return (
		<>
			<h1>ChangeLevers</h1>
			<ChecklistModal
				container="managing"
				title="Pricing Lever"
				subtitle="Change prices"
			>
				<Typography variant="h6">Things to consider</Typography>
				<ul>
					<Typography component="li">
						How much margin do you need to cover your expenses?
					</Typography>
					<Typography component="li">
						How much could you increase prices without losing business?
					</Typography>
					<Typography component="li">
						Could you implement small regular price increases? E.g. CPI
					</Typography>
				</ul>
			</ChecklistModal>
		</>
	)
}

export default ChangeLevers
