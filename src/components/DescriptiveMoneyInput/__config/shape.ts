import { OutlinedTextFieldProps } from "@material-ui/core"

/**
 * Prop definition for the DescriptiveMoneyInput component
 *
 * @interface DescriptiveMoneyInputProps
 * @extends {OutlinedTextFieldProps}
 */
export interface DescriptiveMoneyInputProps extends OutlinedTextFieldProps {
	title: string
	description: string
	stacked?: boolean
	mini?: boolean
}
