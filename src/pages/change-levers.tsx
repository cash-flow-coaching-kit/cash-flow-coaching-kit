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
import Spacer from "../components/Spacer"
import ChangeLeversTips from "../content/tips/ChangeLeversTips"

const ChangeLevers = (): ReactElement => {
	const styles = makeStyles((theme) => ({
		pushDown: {
			marginBottom: theme.spacing(4),
		},
	}))()

	return (
		<>
			<PageContainer role="main">
				<Grid container spacing={3}>
					<Grid item xs={12} md={9}>
						<Box className="content-area">
							<SectionTitle component="h1">Change Levers</SectionTitle>
							<Typography>
								Use your new cash flow knowledge to explore possible changes you
								can make to improve your cash flow.
							</Typography>
							<Typography>
								Below are actions that will improve your cash flow in and out.
							</Typography>
							<Typography>
								Add the actions you want to take to your Action Checklist.
							</Typography>
						</Box>
						<Spacer space={3} />
						<SectionTitle component="h2">Improve cash flow in</SectionTitle>
						<Box className={styles.pushDown}>
							<PricingLever />
							<VolumeLever />
							<DebtorsLever />
						</Box>

						<SectionTitle component="h2">Reduce cash flow out</SectionTitle>
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

			<PageTip tip={ChangeLeversTips} />
		</>
	)
}

export default ChangeLevers
