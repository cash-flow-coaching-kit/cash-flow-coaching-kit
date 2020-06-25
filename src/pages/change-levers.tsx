import React, { ReactElement } from "react"
import {
	Typography,
	Grid,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Box,
	makeStyles,
} from "@material-ui/core"
import PictureAsPdfIcon from "@material-ui/icons/PictureAsPdf"
import { PageContainer } from "../components/Layouts"
import FourQuestions from "../components/HealthCheck/FourQuestions"
import ExpandableNav from "../components/ExpandableNav"
import PageTip from "../components/PageTip"
import SectionTitle from "../components/SectionTitle"
import {
	PricingLever,
	VolumeLever,
	DebtorsLever,
	AssetLever,
	ExpensesLever,
	InventoryLever,
	StaffingLever,
} from "../content/ChangeLevers"

const ChangeLevers = (): ReactElement => {
	const styles = makeStyles((theme) => ({
		pushDown: {
			marginBottom: theme.spacing(4),
		},
	}))()

	return (
		<>
			<PageContainer>
				<Grid container spacing={3}>
					<Grid item xs={12} md={9}>
						<Typography variant="h5" align="center" className={styles.pushDown}>
							Explore practical ideas and actions to improve your cash flow
						</Typography>
						<SectionTitle>Improve Cash IN position</SectionTitle>
						<Box className={styles.pushDown}>
							<PricingLever />
							<VolumeLever />
							<DebtorsLever />
						</Box>

						<SectionTitle>Reduce Cash OUT position</SectionTitle>
						<Box>
							<AssetLever />
							<ExpensesLever />
							<InventoryLever />
							<StaffingLever />
						</Box>
					</Grid>
					<Grid item xs={12} md={3}>
						<FourQuestions />
						<ExpandableNav>
							<List component="nav" disablePadding>
								<ListItem
									component="a"
									href="/pdf/Change levers.pdf"
									target="_blank"
									rel="noopener noreferrer"
									style={{ color: "inherit" }}
								>
									<ListItemIcon>
										<PictureAsPdfIcon />
									</ListItemIcon>
									<ListItemText>Change Levers PDF</ListItemText>
								</ListItem>
							</List>
						</ExpandableNav>
					</Grid>
				</Grid>
			</PageContainer>

			<PageTip tip="ChangeLevers" />
		</>
	)
}

export default ChangeLevers
