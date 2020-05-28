import React, { ReactElement } from "react"
import { Box } from "@material-ui/core"
import PayG from "./PayG"
import Spacer from "../Spacer/Spacer"
import Super from "./Super"
import { useInputWrapper } from "./__config/styles"

/**
 * Prop definition for the EmployeeExpenses component
 *
 * @interface EmployeeExpensesProps
 */
interface EmployeeExpensesProps {
	payg: number
	super: number
	onChange: InputChange
}

/**
 * Panel to display the employee expenses fields
 *
 * @export
 * @param {EmployeeExpensesProps} {
 * 	payg,
 * 	super: superAmount,
 * 	onChange,
 * }
 * @returns {ReactElement}
 */
export default function EmployeeExpenses({
	payg,
	super: superAmount,
	onChange,
}: EmployeeExpensesProps): ReactElement {
	const cls = useInputWrapper()

	return (
		<Box className={`${cls.wrapper} ${cls.highlight}`}>
			<PayG value={payg} onChange={onChange} />
			<Spacer />
			<Super value={superAmount} onChange={onChange} />
		</Box>
	)
}
