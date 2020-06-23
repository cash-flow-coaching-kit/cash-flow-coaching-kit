import React, { ReactElement } from "react"
import { Typography } from "@material-ui/core"

export const CFC4QsTourContent = (): ReactElement => (
	<div className="content-area">
		<Typography variant="h6">The Cash Flow Canvas</Typography>
		<Typography>
			Visualizes your cash flow and makes it easy to see how your business is
			performing against the Four Key Questions.
		</Typography>
		<Typography>
			This will help you understand your current position and identify any
			improvements that you could make in your business.
		</Typography>
	</div>
)

export const CFCCreateCanvas = (): ReactElement => (
	<div className="content-area">
		<Typography variant="h6">Create a canvas</Typography>

		<Typography>
			First, you’ll create a custom name to help identify each canvas, then
			choose a canvas type, time-frame and date range.
		</Typography>
	</div>
)

export const CFCFillingOutCanvas = (): ReactElement => (
	<div className="content-area">
		<Typography variant="h6">Filing out the canvas</Typography>

		<Typography>
			You can directly enter figures into the canvas or import from your
			accounting software or a spreadsheet.
		</Typography>
		<Typography>
			The simpler your Canvas, the easier it will be to understand the
			relationships between the key areas that will impact your cash flow.
		</Typography>
	</div>
)

export const CFCYourPosition = (): ReactElement => (
	<div className="content-area">
		<Typography variant="h6">Understanding your position</Typography>

		<Typography>
			Easily see if your business is getting ahead or falling behind
		</Typography>
	</div>
)

export const CFCControlPanel = (): ReactElement => (
	<div className="content-area">
		<Typography variant="h6">Control panel</Typography>

		<Typography>
			Here you can open an existing canvas, copy, delete , or create a new
			canvas.
		</Typography>
		<Typography>
			To copy a canvas, open the canvas you would like to replicate and select
			the Copy Canvas button in the Control Panel.
		</Typography>
		<Typography>
			The canvas list contains canvases you have previously developed
		</Typography>
	</div>
)
