import React, { ReactElement } from "react"
import { Grid, Typography } from "@material-ui/core"
import useChangeLeversStyles from "./styles"
import ExpandableNav from "../../components/ExpandableNav"
import ChecklistModal from "../../components/ChecklistModal"

// #region Increase customers list content
function IncreaseCustomersListContent(): ReactElement {
	return (
		<ul className="change-levers-ul">
			<Typography component="li">
				Will a marketing campaign increase the number of customers who are
				attracted to your business?
			</Typography>
			<Typography component="li">
				Will offering discounts or having a promotional sale increase your
				customer base?
			</Typography>
		</ul>
	)
}
// #endregion

// #region Increase products list content
function IncreaseProductsListContent(): ReactElement {
	return (
		<ul className="change-levers-ul">
			<Typography component="li">
				Can you offer additional products or services?
			</Typography>
		</ul>
	)
}
// #endregion

// #region Sell into list content
function SellIntoListContent(): ReactElement {
	return (
		<ul className="change-levers-ul">
			<Typography component="li">
				Is there an opportunity to sell to new customers?
			</Typography>
		</ul>
	)
}
// #endregion

// #region Improve list content
function ImproveListContent(): ReactElement {
	return (
		<ul className="change-levers-ul">
			<Typography component="li">
				Can you use a different process such as going via a wholesaler or
				online?
			</Typography>
			<Typography component="li">
				Can you manage your process in a less time consuming manner?
			</Typography>
			<Typography component="li">
				Can you convert a higher number of enquiries into committed sales?
			</Typography>
		</ul>
	)
}
// #endregion

export default function VolumeLever(): ReactElement {
	const styles = useChangeLeversStyles()
	return (
		<ExpandableNav
			title="Volume"
			subHeading="Increase sales transactions"
			defaultExpanded={false}
		>
			{/* Increase customers */}
			<Grid container spacing={2} className={styles.details}>
				<Grid item xs={12} lg={8}>
					<Typography
						variant="h6"
						component="h4"
						className={styles.contentHeadings}
					>
						Increase your number of potential customers
					</Typography>
					<IncreaseCustomersListContent />
				</Grid>
				<Grid item xs={12} lg={4} className={styles.actionGridItem}>
					<ChecklistModal
						container="cashInActions"
						title="Volume Lever"
						subtitle="Increase your number of potential customers"
					>
						<Typography variant="h6">Things to consider</Typography>
						<IncreaseCustomersListContent />
					</ChecklistModal>
				</Grid>
			</Grid>

			{/* Increase products */}
			<Grid container spacing={2} className={styles.details}>
				<Grid item xs={12} lg={8}>
					<Typography
						variant="h6"
						component="h4"
						className={styles.contentHeadings}
					>
						Increase your products or services
					</Typography>
					<IncreaseProductsListContent />
				</Grid>
				<Grid item xs={12} lg={4} className={styles.actionGridItem}>
					<ChecklistModal
						container="cashInActions"
						title="Volume Lever"
						subtitle="Increase your products or services"
					>
						<Typography variant="h6">Things to consider</Typography>
						<IncreaseProductsListContent />
					</ChecklistModal>
				</Grid>
			</Grid>

			{/* Sell into */}
			<Grid container spacing={2} className={styles.details}>
				<Grid item xs={12} lg={8}>
					<Typography
						variant="h6"
						component="h4"
						className={styles.contentHeadings}
					>
						Sell into new market or territory
					</Typography>
					<SellIntoListContent />
				</Grid>
				<Grid item xs={12} lg={4} className={styles.actionGridItem}>
					<ChecklistModal
						container="cashInActions"
						title="Volume Lever"
						subtitle="Sell into new market or territory"
					>
						<Typography variant="h6">Things to consider</Typography>
						<SellIntoListContent />
					</ChecklistModal>
				</Grid>
			</Grid>

			{/* Improve sale process */}
			<Grid container spacing={2} className={styles.details}>
				<Grid item xs={12} lg={8}>
					<Typography
						variant="h6"
						component="h4"
						className={styles.contentHeadings}
					>
						Improve sale process
					</Typography>
					<ImproveListContent />
				</Grid>
				<Grid item xs={12} lg={4} className={styles.actionGridItem}>
					<ChecklistModal
						container="cashInActions"
						title="Volume Lever"
						subtitle="Improve sale process"
					>
						<Typography variant="h6">Things to consider</Typography>
						<ImproveListContent />
					</ChecklistModal>
				</Grid>
			</Grid>
		</ExpandableNav>
	)
}
