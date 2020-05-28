import React, { ReactElement } from "react"
import { Box, makeStyles, Grid } from "@material-ui/core"
import ExpandableNav from "../ExpandableNav"
import { Debtors, Creditors, Assets, Loans, Stock } from "."
import ComputedPanels from "../ComputedPanels"
import { addDollarSign } from "../../util/money/formatting"

/**
 * Prop definition for the FallingBehind component
 *
 * @interface FallingBehindProps
 */
interface FallingBehindProps {
	stock: number
	creditors: number
	debtors: number
	assets: number
	loans: number
	totalNetAssets: number
	onChange: InputChange
}

const useStyles = makeStyles((theme) => ({
	box: {
		paddingRight: theme.spacing(2),
		paddingLeft: theme.spacing(2),
		paddingBottom: theme.spacing(2),
	},
	total: {
		display: "flex",
		alignItems: "flex-end",
		"& > div": {
			width: "100%",
		},
	},
}))

/**
 * Component to wrap all the inputs in the Falling Behind section of the CFC
 * form
 *
 * @export
 * @param {FallingBehindProps} {
 * 	stock,
 * 	creditors,
 * 	debtors,
 * 	assets,
 * 	loans,
 * 	totalNetAssets,
 * 	onChange,
 * }
 * @returns {ReactElement}
 */
export default function FallingBehind({
	stock,
	creditors,
	debtors,
	assets,
	loans,
	totalNetAssets,
	onChange,
}: FallingBehindProps): ReactElement {
	const cls = useStyles()

	return (
		<ExpandableNav
			title="Is your business getting ahead or falling behind"
			subHeading="Complete these fields to record your net asset position."
		>
			<Box className={cls.box}>
				<Grid container spacing={2}>
					<Grid item sm={6}>
						<Debtors value={debtors} onChange={onChange} />
					</Grid>
					<Grid item sm={6}>
						<Creditors value={creditors} onChange={onChange} />
					</Grid>
					<Grid item sm={6}>
						<Assets value={assets} onChange={onChange} />
					</Grid>
					<Grid item sm={6}>
						<Loans value={loans} onChange={onChange} />
					</Grid>
					<Grid item sm={6}>
						<Stock value={stock} onChange={onChange} />
					</Grid>
					<Grid item sm={6} className={cls.total}>
						<ComputedPanels
							title="Total net assets"
							value={addDollarSign(`${totalNetAssets}`)}
							wrapped={false}
						/>
					</Grid>
				</Grid>
			</Box>
		</ExpandableNav>
	)
}
