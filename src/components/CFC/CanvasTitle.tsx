import React, { ReactElement } from "react"
import { Typography, makeStyles } from "@material-ui/core"
import { CFCTimeFrame, CanvasType } from "../../data/_config/shape"
import { generateTitle } from "./__config/utilities"

/**
 * Prop definition for the CanvasTitle component
 *
 * @interface CanvasTitleProps
 */
interface CanvasTitleProps {
	type: CanvasType
	timeframe: CFCTimeFrame
	startDate: Date
	endDate: Date
	customTitle: string
	useCustomTitle: boolean
}

// Canvas title styles
const useStyles = makeStyles((theme) => ({
	caption: {
		lineHeight: 1.2,
	},
	title: {
		marginBottom: theme.spacing(2),
	},
	noTitle: {
		color: theme.palette.grey[600],
	},
}))

/**
 * Displays the compiled canvas title or the custom title
 *
 * @export
 * @param {CanvasTitleProps} {
 * 	type,
 * 	timeframe,
 * 	startDate,
 * 	endDate,
 * }
 * @returns {ReactElement}
 */
export default React.memo(function CanvasTitle({
	type,
	timeframe,
	startDate,
	endDate,
	customTitle,
	useCustomTitle,
}: CanvasTitleProps): ReactElement {
	const cls = useStyles()

	/**
	 * Placeholder component when there is no custom title
	 *
	 * @returns {ReactElement}
	 */
	function AddTitle(): ReactElement {
		return (
			<Typography variant="h5" className={`${cls.title} ${cls.noTitle}`}>
				Add a title below
			</Typography>
		)
	}

	return (
		<>
			<Typography variant="overline" className={cls.caption}>
				Canvas title
			</Typography>
			<Typography variant="h5" className={cls.title}>
				{useCustomTitle
					? customTitle || <AddTitle />
					: generateTitle(type, timeframe, startDate, endDate)}
			</Typography>
		</>
	)
})
