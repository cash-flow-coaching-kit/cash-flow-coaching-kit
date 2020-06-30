import React, { ReactElement } from "react"

const tourSteps: {
	content: () => ReactElement
	image: string
	alt: string
}[] = [
	{
		content: (): ReactElement => <>Hello</>,
		image: "/take-a-tour/Tour 1.png",
		alt: "Get started page with expanded four questions",
	},
]

export default tourSteps
