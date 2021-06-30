import React, { ReactElement } from "react"
import { Box, Typography } from "@material-ui/core"
import MoneyInput from "../MoneyInput"
import { DescriptiveMoneyInputProps } from "./__config/shape"
import useStyles from "./__config/styles"

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
export default React.memo(
	({
		title,
		description,
		stacked = false,
		mini = false,
		fullHeight = false,
		// eslint-disable-next-line
	...textfieldProps
	}: DescriptiveMoneyInputProps): ReactElement => {
		const styles = useStyles({ stacked, mini, fullHeight })

		return (
			<Box className={styles.root}>
				<Box className={styles.type}>
					<Typography variant="h6" component="p">
						{title}
					</Typography>
					<Typography component="span">{description}</Typography>
				</Box>
				<MoneyInput
					// eslint-disable-next-line react/jsx-props-no-spreading
					{...textfieldProps}
					className={styles.moneyInput}
				/>
			</Box>
		)
	}
)
