import React, { ReactElement, useMemo } from "react"
import { Typography, Grid } from "@material-ui/core"
import { CompareSelectorProps } from "./__config/shape"
import filterById from "../../util/filters/ById"
import SelectField from "../SelectField"
import { reduceToOptions } from "./__config/utilities"

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
}: CompareSelectorProps): ReactElement {
	const leftSelectItems = useMemo(() => {
		return allCanvases.reduce(reduceToOptions(), [])
	}, [allCanvases])

	const rightSelectItems = useMemo(() => {
		return allCanvases
			.filter(filterById(leftSelected?.id || -1, true))
			.reduce(reduceToOptions(), [])
	}, [allCanvases, leftSelected])

	return (
		<Grid container spacing={2} alignItems="center">
			<Grid item sm={3}>
				<Typography variant="h6">Compare</Typography>
			</Grid>
			<Grid item sm={4}>
				<SelectField
					name="left-side-compare"
					label="Canvas"
					value={leftSelected?.id || -1}
					onChange={(): void => {}}
					options={leftSelectItems}
				/>
			</Grid>
			<Grid item sm={1}>
				<Typography align="center" variant="overline" component="p">
					to
				</Typography>
			</Grid>
			<Grid item sm={4}>
				<SelectField
					name="right-side-compare"
					label="Canvas"
					value={rightSelected?.id || -1}
					onChange={(): void => {}}
					options={rightSelectItems}
				/>
			</Grid>
		</Grid>
	)
}
