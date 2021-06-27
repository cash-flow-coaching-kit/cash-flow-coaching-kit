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
	Box,
	CardActionArea,
} from "@material-ui/core"
import CloseIcon from "@material-ui/icons/Close"
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft"
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight"
import tourSteps from "./__config/content"

const useStyles = makeStyles((theme) => ({
	media: {
		height: 271,
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
	image: {
		width: "auto",
		maxWidth: "100%",
		display: "block",
		height: "auto",
	},
	imageWrapper: {
		padding: theme.spacing(1),
		border: `1px solid ${theme.palette.grey["300"]}`,
		borderRadius: theme.shape.borderRadius,
	},
}))

export default function TakeATour(): ReactElement {
	const [open, setOpen] = useState(false)

	const handleOpen = (): void => setOpen(true)
	const handleClose = (): void => setOpen(false)

	return (
		<>
			{/* eslint-disable-next-line @typescript-eslint/no-use-before-define */}
			<TourCard onClick={handleOpen} />
			{/* eslint-disable-next-line @typescript-eslint/no-use-before-define */}
			<TourDialog onClose={handleClose} open={open} />
		</>
	)
}

const TourStepper = ({
	closeDialog,
}: {
	closeDialog: () => void
}): ReactElement => {
	const cls = useStyles()
	const [activeStep, setActiveStep] = useState(0)
	const handleNext = (): void => {
		setActiveStep((prevActiveStep) => prevActiveStep + 1)
	}
	const handleBack = (): void => {
		setActiveStep((prevActiveStep) => prevActiveStep - 1)
	}
	const finalStep = (): boolean => activeStep === tourSteps.length - 1

	return (
		<>
			<DialogContent className={cls.content}>
				<Grid spacing={3} container>
					<Grid item xs={12} md={8}>
						<Box className={cls.imageWrapper}>
							<img
								src={tourSteps[activeStep].image}
								alt={tourSteps[activeStep].alt}
								className={cls.image}
							/>
						</Box>
					</Grid>
					<Grid item xs={12} md={4}>
						{tourSteps[activeStep].content()}
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
							onClick={finalStep() ? closeDialog : handleNext}
							variant={finalStep() ? "contained" : "text"}
							color={finalStep() ? "primary" : "default"}
						>
							{finalStep() ? (
								<>
									Close
									<CloseIcon />
								</>
							) : (
								<>
									Next
									<KeyboardArrowRight />
								</>
							)}
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
			<TourStepper closeDialog={onClose} />
		</Dialog>
	)
}

const TourCard = ({ onClick }: { onClick: () => void }): ReactElement => {
	const cls = useStyles()
	return (
		<Card>
			<CardActionArea onClick={onClick}>
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
					<Button color="primary">Take a tour</Button>
				</CardActions>
			</CardActionArea>
		</Card>
	)
}
