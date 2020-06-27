import React, { ReactElement } from "react"
import { Grid, Typography } from "@material-ui/core"
import useChangeLeversStyles from "./styles"
import ExpandableNav from "../../components/ExpandableNav"
import ChecklistModal from "../../components/ChecklistModal"

// #region Reduce cost of stock or materials list content
function ReduceStockListContent(): ReactElement {
	return (
		<ul className="change-levers-ul">
			<Typography component="li">
				Can you source your products from cheaper suppliers without compromising
				on quality?
			</Typography>
		</ul>
	)
}
// #endregion

// #region Improve terms with suppliers list content
function ImproveTermsListContent(): ReactElement {
	return (
		<ul className="change-levers-ul">
			<Typography component="li">
				Can you negotiate extended payment terms?
			</Typography>
			<Typography component="li">
				Can you take advantage of discounts?
			</Typography>
		</ul>
	)
}
// #endregion

// #region Clear obsolete or slow moving stock list content
function ClearStockListContent(): ReactElement {
	return (
		<ul className="change-levers-ul">
			<Typography component="li">Are your stock levels too high?</Typography>
			<Typography component="li">Is there stock that isn’t selling?</Typography>
			<Typography component="li">
				Do you hold stock which is obsolete?
			</Typography>
		</ul>
	)
}
// #endregion

// #region Improve ordering process list content
function OrderingProcessListContent(): ReactElement {
	return (
		<ul className="change-levers-ul">
			<Typography component="li">Can you automate purchase orders?</Typography>
			<Typography component="li">
				Can you reduce the lead time between placing and receiving an order?
			</Typography>
			<Typography component="li">
				Can you order stock from your suppliers once you have received an order
				from your customers?
			</Typography>
		</ul>
	)
}
// #endregion

export default function InventoryLever(): ReactElement {
	const styles = useChangeLeversStyles()
	return (
		<ExpandableNav
			title="Inventory"
			subHeading="Manage your inventory and ordering"
			defaultExpanded={false}
		>
			{/* Reduce cost of stock or materials */}
			<Grid container spacing={2} className={styles.details}>
				<Grid item xs={12} lg={8}>
					<Typography
						variant="h6"
						component="h4"
						className={styles.contentHeadings}
					>
						Reduce cost of stock or materials
					</Typography>
					<ReduceStockListContent />
				</Grid>
				<Grid item xs={12} lg={4} className={styles.actionGridItem}>
					<ChecklistModal
						container="cashOutActions"
						title="Inventory Lever"
						subtitle="Reduce cost of stock or materials"
					>
						<Typography variant="h6">Things to consider</Typography>
						<ReduceStockListContent />
					</ChecklistModal>
				</Grid>
			</Grid>

			{/* Improve terms with suppliers */}
			<Grid container spacing={2} className={styles.details}>
				<Grid item xs={12} lg={8}>
					<Typography
						variant="h6"
						component="h4"
						className={styles.contentHeadings}
					>
						Improve terms with suppliers
					</Typography>
					<ImproveTermsListContent />
				</Grid>
				<Grid item xs={12} lg={4} className={styles.actionGridItem}>
					<ChecklistModal
						container="cashOutActions"
						title="Inventory Lever"
						subtitle="Improve terms with suppliers"
					>
						<Typography variant="h6">Things to consider</Typography>
						<ImproveTermsListContent />
					</ChecklistModal>
				</Grid>
			</Grid>

			{/* Clear obsolete or slow moving stock */}
			<Grid container spacing={2} className={styles.details}>
				<Grid item xs={12} lg={8}>
					<Typography
						variant="h6"
						component="h4"
						className={styles.contentHeadings}
					>
						Clear obsolete or slow moving stock
					</Typography>
					<ClearStockListContent />
				</Grid>
				<Grid item xs={12} lg={4} className={styles.actionGridItem}>
					<ChecklistModal
						container="cashOutActions"
						title="Inventory Lever"
						subtitle="Clear obsolete or slow moving stock"
					>
						<Typography variant="h6">Things to consider</Typography>
						<ClearStockListContent />
					</ChecklistModal>
				</Grid>
			</Grid>

			{/* Improve ordering process */}
			<Grid container spacing={2} className={styles.details}>
				<Grid item xs={12} lg={8}>
					<Typography
						variant="h6"
						component="h4"
						className={styles.contentHeadings}
					>
						Improve ordering process
					</Typography>
					<OrderingProcessListContent />
				</Grid>
				<Grid item xs={12} lg={4} className={styles.actionGridItem}>
					<ChecklistModal
						container="cashOutActions"
						title="Inventory Lever"
						subtitle="Improve ordering process"
					>
						<Typography variant="h6">Things to consider</Typography>
						<OrderingProcessListContent />
					</ChecklistModal>
				</Grid>
			</Grid>
		</ExpandableNav>
	)
}
