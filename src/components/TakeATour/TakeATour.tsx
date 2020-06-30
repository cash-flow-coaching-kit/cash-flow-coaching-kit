import React, { ReactElement, useState } from "react"
import {
	Card,
	CardMedia,
	CardContent,
	Typography,
	CardActions,
	Button,
	makeStyles,
	Dialog,
	DialogContent,
	DialogActions,
	AppBar,
	Toolbar,
	IconButton,
	MobileStepper,
	Grid,
} from "@material-ui/core"
import CloseIcon from "@material-ui/icons/Close"
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft"
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight"
import tourSteps from "./__config/content"

const useStyles = makeStyles((theme) => ({
	media: {
		height: 215,
	},
	appbar: {
		position: "relative",
		boxShadow: "none",
	},
	title: {
		flexGrow: 1,
	},
	content: {
		padding: theme.spacing(3),
	},
	stepperNav: {
		width: "100%",
	},
}))

export default function TakeATour(): ReactElement {
	const [open, setOpen] = useState(true)

	const handleOpen = (): void => setOpen(true)
	const handleClose = (): void => setOpen(false)

	return (
		<>
			<TourCard onClick={handleOpen} />
			<TourDialog onClose={handleClose} open={open} />
		</>
	)
}

const TourStepper = (): ReactElement => {
	const cls = useStyles()
	const [activeStep, setActiveStep] = useState(0)
	const handleNext = (): void => {
		setActiveStep((prevActiveStep) => prevActiveStep + 1)
	}
	const handleBack = (): void => {
		setActiveStep((prevActiveStep) => prevActiveStep - 1)
	}

	return (
		<>
			<DialogContent className={cls.content}>
				<Grid spacing={3} container>
					<Grid item xs={12} md={8}>
						Image
					</Grid>
					<Grid item xs={12} md={4}>
						Content
					</Grid>
				</Grid>
			</DialogContent>
			<DialogActions>
				<MobileStepper
					variant="progress"
					steps={tourSteps.length}
					position="static"
					activeStep={activeStep}
					className={cls.stepperNav}
					nextButton={
						<Button
							size="small"
							onClick={handleNext}
							disabled={activeStep === tourSteps.length - 1}
						>
							Next
							<KeyboardArrowRight />
						</Button>
					}
					backButton={
						<Button
							size="small"
							onClick={handleBack}
							disabled={activeStep === 0}
						>
							<KeyboardArrowLeft />
							Back
						</Button>
					}
				/>
			</DialogActions>
		</>
	)
}

const TourDialog = ({
	onClose,
	open,
}: {
	onClose: () => void
	open: boolean
}): ReactElement => {
	const cls = useStyles()

	return (
		<Dialog
			open={open}
			onClose={onClose}
			aria-labelledby="take-a-tour-dialog-title"
			fullScreen
		>
			<AppBar className={cls.appbar} color="default">
				<Toolbar>
					<Typography
						variant="h6"
						className={cls.title}
						id="take-a-tour-dialog-title"
					>
						Let&apos;s take a tour
					</Typography>
					<IconButton
						edge="start"
						color="inherit"
						onClick={onClose}
						aria-label="close"
					>
						<CloseIcon />
					</IconButton>
				</Toolbar>
			</AppBar>
			<TourStepper />
		</Dialog>
	)
}

const TourCard = ({ onClick }: { onClick: () => void }): ReactElement => {
	const cls = useStyles()
	return (
		<Card>
			<CardMedia
				className={cls.media}
				image="/take-a-tour/card-preview.png"
				title="Preview of the Cash Flow Coaching Kit"
			/>
			<CardContent>
				<Typography gutterBottom variant="h6" component="h5">
					Welcome to the Cash Flow Coaching Kit.
				</Typography>
				<Typography color="textSecondary" component="p">
					Starting a coaching session with your client is simple, let&apos;s
					show you around.
				</Typography>
			</CardContent>
			<CardActions>
				<Button color="primary" onClick={onClick}>
					Take a tour
				</Button>
			</CardActions>
		</Card>
	)
}
