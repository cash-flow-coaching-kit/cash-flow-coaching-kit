import React, { ReactElement, useMemo, ChangeEvent } from "react"
import { Typography, Grid, Tooltip } from "@material-ui/core"
import InfoIcon from "@material-ui/icons/Info"
import { CompareSelectorProps } from "./__config/shape"
import SelectField from "../SelectField"
import { reduceToOptions } from "./__config/utilities"
import useStyles from "./__config/styles"
import TimeframeOutOfSync from "./TimeframeOutOfSync"

const tipContent =
	"The canvas with the later date will always move to the ‘left-side’ of the comparison"

/**
 * Selector to choose between different canvases
 *
 * @export
 * @param {CompareSelectorProps} {
 * 	selectedCanvases: [leftSelected, rightSelected],
 * 	allCanvases,
 * }
 * @returns {ReactElement}
 */
export default function CompareSelector({
	selectedCanvases: [leftSelected, rightSelected],
	allCanvases,
	changeSelected,
}: CompareSelectorProps): ReactElement {
	const cls = useStyles()

	const selectOptions = useMemo(
		() => allCanvases.reduce(reduceToOptions(), []),
		[allCanvases]
	)

	const changeSelectedCanvas =
		(idx: number) =>
		(e: ChangeEvent<HTMLInputElement>): void => {
			changeSelected(idx, e.target.value)
		}

	return (
		<Grid container spacing={2} alignItems="center">
			<Grid item xs={12} md={3}>
				<Typography variant="h6" className={cls.compareLabel}>
					Compare
					<Tooltip title={tipContent} className={cls.compareTooltip}>
						<InfoIcon color="primary" />
					</Tooltip>
				</Typography>
			</Grid>
			<Grid item xs={12} md={4}>
				<SelectField
					name="left-side-compare"
					label="Canvas"
					value={leftSelected?.id || -1}
					onChange={changeSelectedCanvas(0)}
					options={selectOptions}
				/>
			</Grid>
			<Grid item xs={12} md={1} className={cls.to}>
				<Typography align="center" variant="overline" component="p">
					to
				</Typography>
			</Grid>
			<Grid item xs={12} md={4}>
				<SelectField
					name="right-side-compare"
					label="Canvas"
					value={rightSelected?.id || -1}
					onChange={changeSelectedCanvas(1)}
					options={selectOptions}
				/>
			</Grid>
			{leftSelected.canvasTimeFrame !== rightSelected.canvasTimeFrame && (
				<Grid item xs={12}>
					<TimeframeOutOfSync />
				</Grid>
			)}
		</Grid>
	)
}
