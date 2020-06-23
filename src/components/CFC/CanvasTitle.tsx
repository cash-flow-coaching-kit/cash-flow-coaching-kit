import React, { ReactElement, useState, useEffect } from "react"
import { Typography, makeStyles } from "@material-ui/core"
import { useParams } from "react-router-dom"
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
		color: theme.palette.grey[500],
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
	const { id } = useParams()
	const [comp, setComp] = useState<"h3" | "h1">("h3")

	useEffect(() => {
		setComp(typeof id === "undefined" ? "h3" : "h1")
	}, [id, setComp])

	/**
	 * Placeholder component when there is no custom title
	 *
	 * @returns {ReactElement}
	 */
	function AddTitle(): ReactElement {
		return (
			<Typography
				variant="h5"
				component="span"
				className={`${cls.title} ${cls.noTitle}`}
			>
				Add a title below
			</Typography>
		)
	}

	return (
		<>
			<Typography variant="overline" component="span" className={cls.caption}>
				Canvas title
			</Typography>
			<Typography variant="h5" className={cls.title} component={comp}>
				{useCustomTitle
					? customTitle || <AddTitle />
					: generateTitle(type, timeframe, startDate, endDate)}
			</Typography>
		</>
	)
})
