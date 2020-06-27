import React, { ReactElement, MouseEvent } from "react"
import { Button } from "@material-ui/core"

export default function SkipToContent(): ReactElement {
	return (
		<nav id="top" aria-labelledby="skip-link">
			<Button
				component="a"
				href="#main-page-container"
				id="skip-link"
				className="visually-hidden focusable"
				color="primary"
				variant="contained"
				size="large"
				onClick={(e: MouseEvent<HTMLAnchorElement>): void => {
					e.preventDefault()
					const container: HTMLDivElement | null = document.querySelector(
						"#main-page-container"
					)
					if (container) {
						container.focus()
					}
				}}
			>
				Skip to main content
			</Button>
		</nav>
	)
}
