import React, { ReactElement } from "react"
import { Grid, Typography } from "@material-ui/core"
import useChangeLeversStyles from "./styles"
import ExpandableNav from "../../components/ExpandableNav"
import ChecklistModal from "../../components/ChecklistModal"

// #region Reduce discretionary spending list content
function ReduceSpendingListContent(): ReactElement {
	return (
		<ul>
			<Typography component="li">
				Do you have any non-essential expenses?
			</Typography>
			<Typography component="li">Could you defer some expenses?</Typography>
			<Typography component="li">
				Can you negotiate better terms for some expenses, such as extended
				credit or discounts for early payment?
			</Typography>
		</ul>
	)
}
// #endregion

// #region Reduce overheads list content
function ReduceOverheadsListContent(): ReactElement {
	return (
		<ul>
			<Typography component="li">
				Can you negotiate prices on operating expenses such as utilities, rent
				or maintenance services?
			</Typography>
			<Typography component="li">
				Are there cheaper options for services you are currently using, such as
				bundled technology packages or multi-channel marketing and advertising
				deals?
			</Typography>
		</ul>
	)
}
// #endregion

export default function ExpensesLever(): ReactElement {
	const styles = useChangeLeversStyles()
	return (
		<ExpandableNav
			title="Expenses Lever"
			subHeading="Reduce cash outflows"
			defaultExpanded={false}
		>
			{/* Reduce discretionary spending */}
			<Grid container spacing={3} className={styles.details}>
				<Grid item xs={8}>
					<Typography variant="h6" className={styles.contentHeadings}>
						Reduce discretionary spending
					</Typography>
					<ReduceSpendingListContent />
				</Grid>
				<Grid item xs={4} className={styles.actionGridItem}>
					<ChecklistModal
						container="cashOutActions"
						title="Expenses Lever"
						subtitle="Reduce discretionary spending"
					>
						<Typography variant="h6">Things to consider</Typography>
						<ReduceSpendingListContent />
					</ChecklistModal>
				</Grid>
			</Grid>

			{/* Reduce overheads */}
			<Grid container spacing={3} className={styles.details}>
				<Grid item xs={8}>
					<Typography variant="h6" className={styles.contentHeadings}>
						Reduce overheads
					</Typography>
					<ReduceOverheadsListContent />
				</Grid>
				<Grid item xs={4} className={styles.actionGridItem}>
					<ChecklistModal
						container="cashOutActions"
						title="Expenses Lever"
						subtitle="Reduce overheads"
					>
						<Typography variant="h6">Things to consider</Typography>
						<ReduceOverheadsListContent />
					</ChecklistModal>
				</Grid>
			</Grid>
		</ExpandableNav>
	)
}
