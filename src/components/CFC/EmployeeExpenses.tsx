import React, { ReactElement } from "react"
import { Box } from "@material-ui/core"
import PayG from "./PayG"
import Spacer from "../Spacer/Spacer"
import Super from "./Super"
import { useInputWrapper } from "./__config/styles"

interface EmployeeExpensesProps {
	payg: number
	super: number
	onChange: InputChange
}

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
