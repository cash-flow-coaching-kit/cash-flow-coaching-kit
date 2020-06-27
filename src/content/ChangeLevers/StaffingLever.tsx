import React, { ReactElement } from "react"
import { Grid, Typography } from "@material-ui/core"
import useChangeLeversStyles from "./styles"
import ExpandableNav from "../../components/ExpandableNav"
import ChecklistModal from "../../components/ChecklistModal"

// #region Change staff mix list content
function StaffMixListContent(): ReactElement {
	return (
		<ul className="change-levers-ul">
			<Typography component="li">
				Can you outsource some tasks or roles or increase the flexibility of
				your workforce through part-time, casual or contracted staff?
			</Typography>
			<Typography component="li">
				Do you have the right staff focused on delivering your core products and
				services to your target customers?
			</Typography>
		</ul>
	)
}
// #endregion

// #region Increase utilisation list content
function IncreaseUtilisationListContent(): ReactElement {
	return (
		<ul className="change-levers-ul">
			<Typography component="li">
				Do your staff understand their contribution to helping you operate the
				business?
			</Typography>
			<Typography component="li">
				Do you track staff utilisation and set targets for your staff to
				achieve?
			</Typography>
			<Typography component="li">
				Would higher qualified staff deliver more?
			</Typography>
		</ul>
	)
}
// #endregion

// #region Match staffing levels to demand list content
function MatchStaffingLevelsListContent(): ReactElement {
	return (
		<ul className="change-levers-ul">
			<Typography component="li">
				Do you have enough staff to cover your peak periods?
			</Typography>
			<Typography component="li">Could you reduce your workforce?</Typography>
			<Typography component="li">Could you cut back on hours?</Typography>
		</ul>
	)
}
// #endregion

// #region Reduce turnover list content
function ReduceTurnoverListContent(): ReactElement {
	return (
		<ul className="change-levers-ul">
			<Typography component="li">
				How can you keep your staff happy? More training? Review of
				remuneration? Alignment to the business goals? Positive culture?
			</Typography>
			<Typography component="li">
				Could you reduce hiring costs with better retention?
			</Typography>
		</ul>
	)
}
// #endregion

// #region Employing staff list content
function EmployingStaffListContent(): ReactElement {
	return (
		<ul className="change-levers-ul">
			<Typography component="li">
				Do you need specialist skills such as sales and marketing to help your
				business succeed?
			</Typography>
			<Typography component="li">
				Do you know all the laws and regulations that you need to follow to
				employ someone?
			</Typography>
			<Typography component="li">
				Can you afford an employee? Consider the total cost of employment,
				including superannuation, Workcover and taxes.
			</Typography>
		</ul>
	)
}
// #endregion

export default function StaffingLever(): ReactElement {
	const styles = useChangeLeversStyles()
	return (
		<ExpandableNav
			title="Staffing"
			subHeading="Employ the right staff"
			defaultExpanded={false}
		>
			{/* Change staff mix */}
			<Grid container spacing={2} className={styles.details}>
				<Grid item xs={12} lg={8}>
					<Typography
						variant="h6"
						component="h4"
						className={styles.contentHeadings}
					>
						Change staff mix
					</Typography>
					<StaffMixListContent />
				</Grid>
				<Grid item xs={12} lg={4} className={styles.actionGridItem}>
					<ChecklistModal
						container="cashOutActions"
						title="Staffing Lever"
						subtitle="Change staff mix"
					>
						<Typography variant="h6">Things to consider</Typography>
						<StaffMixListContent />
					</ChecklistModal>
				</Grid>
			</Grid>

			{/* Increase utilisation */}
			<Grid container spacing={2} className={styles.details}>
				<Grid item xs={12} lg={8}>
					<Typography
						variant="h6"
						component="h4"
						className={styles.contentHeadings}
					>
						Increase utilisation
					</Typography>
					<IncreaseUtilisationListContent />
				</Grid>
				<Grid item xs={12} lg={4} className={styles.actionGridItem}>
					<ChecklistModal
						container="cashOutActions"
						title="Staffing Lever"
						subtitle="Increase utilisation"
					>
						<Typography variant="h6">Things to consider</Typography>
						<IncreaseUtilisationListContent />
					</ChecklistModal>
				</Grid>
			</Grid>

			{/* Match staffing levels to demand */}
			<Grid container spacing={2} className={styles.details}>
				<Grid item xs={12} lg={8}>
					<Typography
						variant="h6"
						component="h4"
						className={styles.contentHeadings}
					>
						Match staffing levels to demand
					</Typography>
					<MatchStaffingLevelsListContent />
				</Grid>
				<Grid item xs={12} lg={4} className={styles.actionGridItem}>
					<ChecklistModal
						container="cashOutActions"
						title="Staffing Lever"
						subtitle="Match staffing levels to demand"
					>
						<Typography variant="h6">Things to consider</Typography>
						<MatchStaffingLevelsListContent />
					</ChecklistModal>
				</Grid>
			</Grid>

			{/* Reduce turnover */}
			<Grid container spacing={2} className={styles.details}>
				<Grid item xs={12} lg={8}>
					<Typography
						variant="h6"
						component="h4"
						className={styles.contentHeadings}
					>
						Reduce turnover
					</Typography>
					<ReduceTurnoverListContent />
				</Grid>
				<Grid item xs={12} lg={4} className={styles.actionGridItem}>
					<ChecklistModal
						container="cashOutActions"
						title="Staffing Lever"
						subtitle="Reduce turnover"
					>
						<Typography variant="h6">Things to consider</Typography>
						<ReduceTurnoverListContent />
					</ChecklistModal>
				</Grid>
			</Grid>

			{/* Employing staff */}
			<Grid container spacing={2} className={styles.details}>
				<Grid item xs={12} lg={8}>
					<Typography
						variant="h6"
						component="h4"
						className={styles.contentHeadings}
					>
						Employing staff
					</Typography>
					<EmployingStaffListContent />
				</Grid>
				<Grid item xs={12} lg={4} className={styles.actionGridItem}>
					<ChecklistModal
						container="cashOutActions"
						title="Staffing Lever"
						subtitle="Employing staff"
					>
						<Typography variant="h6">Things to consider</Typography>
						<EmployingStaffListContent />
					</ChecklistModal>
				</Grid>
			</Grid>
		</ExpandableNav>
	)
}
