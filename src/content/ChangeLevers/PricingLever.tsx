import React, { ReactElement } from "react"
import { Grid, Typography } from "@material-ui/core"
import ExpandableNav from "../../components/ExpandableNav"
import ChecklistModal from "../../components/ChecklistModal"
import useChangeLeversStyles from "./styles"

// #region Change Prices list content
function ChangePricesListContent(): ReactElement {
	return (
		<ul className="change-levers-ul">
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
	)
}
// #endregion

// #region Focus on list content
function FocusOnListContent(): ReactElement {
	return (
		<ul className="change-levers-ul">
			<Typography component="li">
				Which are your most profitable customers, products or services?
			</Typography>
			<Typography component="li">
				How much time should you invest on your most profitable customers?
			</Typography>
			<Typography component="li">
				How much time should you invest on your most profitable products or
				services?
			</Typography>
		</ul>
	)
}
// #endregion

// #region Increase value list content
function IncreaseValueListContent(): ReactElement {
	return (
		<ul className="change-levers-ul">
			<Typography component="li">
				What other problems could you help your customer solve?
			</Typography>
			<Typography component="li">
				Do the customers only want one particular part of your product or
				service? Can you focus only on this?
			</Typography>
		</ul>
	)
}
// #endregion

export default function PricingLever(): ReactElement {
	const styles = useChangeLeversStyles()

	return (
		<ExpandableNav
			title="Pricing"
			subHeading="Change pricing to improve cash flow"
			defaultExpanded={false}
		>
			{/* Change Prices */}
			<Grid container spacing={2} className={styles.details}>
				<Grid item xs={12} lg={8}>
					<Typography variant="h6" className={styles.contentHeadings}>
						Change prices
					</Typography>
					<ChangePricesListContent />
				</Grid>
				<Grid item xs={12} lg={4} className={styles.actionGridItem}>
					<ChecklistModal
						container="cashInActions"
						title="Pricing Lever"
						subtitle="Change prices"
					>
						<Typography variant="h6">Things to consider</Typography>
						<ChangePricesListContent />
					</ChecklistModal>
				</Grid>
			</Grid>

			{/* Focus on */}
			<Grid container spacing={2} className={styles.details}>
				<Grid item xs={12} lg={8}>
					<Typography variant="h6" className={styles.contentHeadings}>
						Focus on the most profitable customers, products or services
					</Typography>
					<FocusOnListContent />
				</Grid>
				<Grid item xs={12} lg={4} className={styles.actionGridItem}>
					<ChecklistModal
						title="Pricing Lever"
						container="cashInActions"
						subtitle="Focus on the most profitable customers, products or services"
					>
						<Typography variant="h6">Things to consider</Typography>
						<FocusOnListContent />
					</ChecklistModal>
				</Grid>
			</Grid>

			{/* Increase value */}
			<Grid container spacing={2} className={styles.details}>
				<Grid item xs={12} lg={8}>
					<Typography variant="h6" className={styles.contentHeadings}>
						Increase value you deliver
					</Typography>
					<IncreaseValueListContent />
				</Grid>
				<Grid item xs={12} lg={4} className={styles.actionGridItem}>
					<ChecklistModal
						title="Pricing Lever"
						container="cashInActions"
						subtitle="Increase value you deliver"
					>
						<Typography variant="h6">Things to consider</Typography>
						<IncreaseValueListContent />
					</ChecklistModal>
				</Grid>
			</Grid>
		</ExpandableNav>
	)
}
