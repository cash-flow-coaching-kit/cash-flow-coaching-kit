import React from "react"
import { render } from "@testing-library/react"
import App from "../App"

test("renders learn react link", () => {
	const { getByText } = render(<App />)
	const heading = getByText(/What up!/i)
	expect(heading).toBeInTheDocument()
})
