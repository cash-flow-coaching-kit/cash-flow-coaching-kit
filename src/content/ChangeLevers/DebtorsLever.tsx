import React, { ReactElement } from "react"
import { Grid, Typography } from "@material-ui/core"
import useChangeLeversStyles from "./styles"
import ExpandableNav from "../../components/ExpandableNav"
import ChecklistModal from "../../components/ChecklistModal"

// #region Invoice earlier
function InvoiceEarlierListContent(): ReactElement {
	return (
		<ul>
			<Typography component="li">Can you raise progress bills?</Typography>
			<Typography component="li">
				Can you invoice an amount in advance of completing the service or
				delivering the products?
			</Typography>
			<Typography component="li">Can you automate invoicing?</Typography>
			<Typography component="li">
				Can you make it easier for your customers to pay, e.g. direct debt?
			</Typography>
		</ul>
	)
}
// #endregion

// #region Follow up
function FollowUpListContent(): ReactElement {
	return (
		<ul>
			<Typography component="li">
				Can you give your customers a call?
			</Typography>
			<Typography component="li">
				Can you send them a reminder notice?
			</Typography>
			<Typography component="li">
				Can you automate/ outsource follow up?
			</Typography>
		</ul>
	)
}
// #endregion

// #region Reduce terms
function ReduceTermsListContent(): ReactElement {
	return (
		<ul>
			<Typography component="li">
				Should you require some of your customers to pay you sooner than others?
			</Typography>
			<Typography component="li">Should some customers pay upfront?</Typography>
		</ul>
	)
}
// #endregion

// #region Early payment discount
function EarlyPaymentListContent(): ReactElement {
	return (
		<ul>
			<Typography component="li">
				Can you afford to offer an early payment discount?
			</Typography>
			<Typography component="li">
				Can you implement a late payment penalty?
			</Typography>
		</ul>
	)
}
// #endregion

export default function DebtorsLever(): ReactElement {
	const styles = useChangeLeversStyles()
	return (
		<ExpandableNav
			title="Debtors Lever"
			subHeading="Collect cash owned to you faster"
			defaultExpanded={false}
		>
			{/* Invoice earlier */}
			<Grid container spacing={3} className={styles.details}>
				<Grid item xs={8}>
					<Typography variant="h6" className={styles.contentHeadings}>
						Invoice earlier
					</Typography>
					<InvoiceEarlierListContent />
				</Grid>
				<Grid item xs={4} className={styles.actionGridItem}>
					<ChecklistModal
						container="cashInActions"
						title="Debtors Lever"
						subtitle="Invoice earlier"
					>
						<Typography variant="h6">Things to consider</Typography>
						<InvoiceEarlierListContent />
					</ChecklistModal>
				</Grid>
			</Grid>

			{/* Follow up */}
			<Grid container spacing={3} className={styles.details}>
				<Grid item xs={8}>
					<Typography variant="h6" className={styles.contentHeadings}>
						Follow up
					</Typography>
					<FollowUpListContent />
				</Grid>
				<Grid item xs={4} className={styles.actionGridItem}>
					<ChecklistModal
						container="cashInActions"
						title="Debtors Lever"
						subtitle="Follow up"
					>
						<Typography variant="h6">Things to consider</Typography>
						<FollowUpListContent />
					</ChecklistModal>
				</Grid>
			</Grid>

			{/* Reduce terms */}
			<Grid container spacing={3} className={styles.details}>
				<Grid item xs={8}>
					<Typography variant="h6" className={styles.contentHeadings}>
						Reduce terms
					</Typography>
					<ReduceTermsListContent />
				</Grid>
				<Grid item xs={4} className={styles.actionGridItem}>
					<ChecklistModal
						container="cashInActions"
						title="Debtors Lever"
						subtitle="Reduce terms"
					>
						<Typography variant="h6">Things to consider</Typography>
						<ReduceTermsListContent />
					</ChecklistModal>
				</Grid>
			</Grid>

			{/* Early payment discount */}
			<Grid container spacing={3} className={styles.details}>
				<Grid item xs={8}>
					<Typography variant="h6" className={styles.contentHeadings}>
						Early payment discount
					</Typography>
					<EarlyPaymentListContent />
				</Grid>
				<Grid item xs={4} className={styles.actionGridItem}>
					<ChecklistModal
						container="cashInActions"
						title="Debtors Lever"
						subtitle="Early payment discount"
					>
						<Typography variant="h6">Things to consider</Typography>
						<EarlyPaymentListContent />
					</ChecklistModal>
				</Grid>
			</Grid>
		</ExpandableNav>
	)
}
