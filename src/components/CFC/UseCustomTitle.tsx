import React, { ReactElement } from "react"
import {
	Box,
	FormControlLabel,
	Checkbox,
	TextField,
	Tooltip,
	Divider,
} from "@material-ui/core"
import InfoIcon from "@material-ui/icons/Info"
import { useCustomTitleStyles } from "./__config/styles"

/**
 * Prop definition for the custom title form
 *
 * @interface UseCustomTitleProps
 */
interface UseCustomTitleProps {
	useCustom: boolean
	onChange: InputChange
	changeCheck: InputChange
	title: string
}

const tipContent =
	"To make identifying canvases easier, you can assign a custom title to the canvas. Simply tick the box and enter a title. If you do not assign a custom title, the canvas title will be made up of the four fields below"

/**
 * Component that allows a user to opt into a custom canvas title
 * and provides them with a input field
 *
 * @export
 * @param {UseCustomTitleProps} {
 * 	useCustom,
 * 	onChange,
 * 	changeCheck,
 * 	title,
 * }
 * @returns {ReactElement}
 */
export default function UseCustomTitle({
	useCustom,
	onChange,
	changeCheck,
	title,
}: UseCustomTitleProps): ReactElement {
	const cls = useCustomTitleStyles()

	return (
		<Box>
			{useCustom && (
				<TextField
					id="canvasTitle"
					name="canvasTitle"
					label="Custom canvas title"
					variant="outlined"
					value={title}
					onChange={onChange}
					fullWidth
					className={cls.textField}
					InputLabelProps={{
						htmlFor: "canvasTitle",
					}}
				/>
			)}
			<Box className={cls.checkboxRoot}>
				<FormControlLabel
					control={
						<Checkbox
							name="use-custom-title"
							onChange={changeCheck}
							checked={useCustom}
						/>
					}
					label="Use a custom title"
				/>
				<Tooltip title={tipContent}>
					<InfoIcon color="primary" />
				</Tooltip>
			</Box>
			<Divider className={cls.divider} />
		</Box>
	)
}
