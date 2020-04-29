import React from "react"
import { render } from "@testing-library/react"
import { PrimaryNavbar } from "../index"

test("renders help link", () => {
	const { getByText } = render(<PrimaryNavbar />)
	const link = getByText(/Help/i)
	expect(link).toBeInTheDocument()
})
