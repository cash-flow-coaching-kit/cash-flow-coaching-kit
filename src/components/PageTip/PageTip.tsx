import React, { ReactElement, useState, ReactNode, MouseEvent } from "react"
import Fab from "@material-ui/core/Fab"
import HelpOutlineIcon from "@material-ui/icons/HelpOutline"
import Drawer from "@material-ui/core/Drawer"
import Button from "@material-ui/core/Button"
import HighlightOffIcon from "@material-ui/icons/HighlightOff"
import Box from "@material-ui/core/Box"
import { Typography } from "@material-ui/core"
import usePageTipStyles from "./style"

interface IPageTip {
	children: ReactNode
}

const PageTip = ({ children }: IPageTip): ReactElement => {
	const style = usePageTipStyles()
	const [drawerOpen, setDrawerOpen] = useState<boolean>(false)

	const toggleDrawer = (open: boolean) => (
		event: KeyboardEvent | MouseEvent<HTMLButtonElement>
	): void => {
		if (event instanceof KeyboardEvent) {
			if (
				event.type === "keydown" &&
				(event.key === "Tab" || event.key === "Shift")
			) {
				return
			}
		}

		setDrawerOpen(open)
	}

	return (
		<>
			<div className={style.root}>
				<Fab color="secondary" onClick={toggleDrawer(true)} variant="extended">
					<HelpOutlineIcon className={style.icon} />
					Tips
				</Fab>
			</div>
			<Drawer
				anchor="left"
				open={drawerOpen}
				onClose={toggleDrawer(false)}
				classes={{
					paper: style.drawer,
				}}
			>
				<Box className={style.closeBox}>
					<Typography variant="h6">Tips</Typography>
					<Button
						onClick={toggleDrawer(false)}
						startIcon={<HighlightOffIcon />}
					>
						Close
					</Button>
				</Box>

				{children}
			</Drawer>
		</>
	)
}

export default PageTip
