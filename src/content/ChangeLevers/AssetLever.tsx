import React, { ReactElement } from "react"
import { Grid, Typography } from "@material-ui/core"
import useChangeLeversStyles from "./styles"
import ExpandableNav from "../../components/ExpandableNav"
import ChecklistModal from "../../components/ChecklistModal"

// #region Sell Assets list content
function SellAssetsListContent(): ReactElement {
	return (
		<ul className="change-levers-ul">
			<Typography component="li">
				Do you have assets no longer required or underutilised in the business?
			</Typography>
		</ul>
	)
}
// #endregion

// #region Refinance list content
function RefinanceListContent(): ReactElement {
	return (
		<ul className="change-levers-ul">
			<Typography component="li">
				Is there an opportunity to get better terms from a lender?
			</Typography>
		</ul>
	)
}
// #endregion

// #region Sell and lease back list content
function SellLeaseListContent(): ReactElement {
	return (
		<ul className="change-levers-ul">
			<Typography component="li">
				Would leasing free up your cash flow by allowing you to pay for assets
				over a longer period of time rather than in one lump sum?
			</Typography>
		</ul>
	)
}
// #endregion

export default function AssetLever(): ReactElement {
	const styles = useChangeLeversStyles()
	return (
		<ExpandableNav
			title="Assets Lever"
			subHeading="Make your assets work for you and free up cash flow which is currently tied up in the business"
			defaultExpanded={false}
		>
			{/* Sell Assets */}
			<Grid container spacing={2} className={styles.details}>
				<Grid item xs={12} md={8}>
					<Typography variant="h6" className={styles.contentHeadings}>
						Sell underutilised assets
					</Typography>
					<SellAssetsListContent />
				</Grid>
				<Grid item xs={12} md={4} className={styles.actionGridItem}>
					<ChecklistModal
						container="cashOutActions"
						title="Assets Lever"
						subtitle="Sell underutilised assets"
					>
						<Typography variant="h6">Things to consider</Typography>
						<SellAssetsListContent />
					</ChecklistModal>
				</Grid>
			</Grid>

			{/* Refinance */}
			<Grid container spacing={2} className={styles.details}>
				<Grid item xs={12} md={8}>
					<Typography variant="h6" className={styles.contentHeadings}>
						Refinance
					</Typography>
					<RefinanceListContent />
				</Grid>
				<Grid item xs={12} md={4} className={styles.actionGridItem}>
					<ChecklistModal
						container="cashOutActions"
						title="Assets Lever"
						subtitle="Refinance"
					>
						<Typography variant="h6">Things to consider</Typography>
						<RefinanceListContent />
					</ChecklistModal>
				</Grid>
			</Grid>

			{/* Sell and lease back */}
			<Grid container spacing={2} className={styles.details}>
				<Grid item xs={12} md={8}>
					<Typography variant="h6" className={styles.contentHeadings}>
						Sell and lease back
					</Typography>
					<SellLeaseListContent />
				</Grid>
				<Grid item xs={12} md={4} className={styles.actionGridItem}>
					<ChecklistModal
						container="cashOutActions"
						title="Assets Lever"
						subtitle="Sell and lease back"
					>
						<Typography variant="h6">Things to consider</Typography>
						<SellLeaseListContent />
					</ChecklistModal>
				</Grid>
			</Grid>
		</ExpandableNav>
	)
}
