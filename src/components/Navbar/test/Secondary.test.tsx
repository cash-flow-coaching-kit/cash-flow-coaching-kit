import React from "react"
import { render } from "@testing-library/react"
import { SecondaryNavbar } from "../index"

test("renders action checklist", () => {
	const { getByText } = render(<SecondaryNavbar />)
	const link = getByText(/Action Checklist/i)
	expect(link).toBeInTheDocument()
})
