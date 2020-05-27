import React, { ReactElement } from "react"
import { Box, Typography } from "@material-ui/core"
import MoneyInput from "../MoneyInput"
import useDMIStyles from "./__config/styles"
import { DescriptiveMoneyInputProps } from "./__config/shape"

/**
 * Component that shows a money input with a title and description.
 * Defaults to displaying in a row, can be set to be stacked.
 *
 * The props extend `OutlinedTextFieldProps`, meaning any textfield props can
 * be added to the component. The only custom props are;
 *
 * * `title`
 * * `description`
 * * `stacked` - defaults to `false`
 *
 * @export
 * @param {DescriptiveMoneyInputProps} {
 * 	title,
 * 	description,
 * 	stacked = false,
 * 	// eslint-disable-next-line
 * 	...textfieldProps
 * }
 * @returns {ReactElement}
 */
export default function DescriptiveMoneyInput({
	title,
	description,
	stacked = false,
	mini = false,
	// eslint-disable-next-line
	...textfieldProps
}: DescriptiveMoneyInputProps): ReactElement {
	const styles = useDMIStyles({ stacked, mini })()

	return (
		<Box className={styles.root}>
			<Box className={styles.type}>
				<Typography variant="h6">{title}</Typography>
				<Typography>{description}</Typography>
			</Box>
			<MoneyInput
				// eslint-disable-next-line react/jsx-props-no-spreading
				{...textfieldProps}
				className={styles.moneyInput}
			/>
		</Box>
	)
}
