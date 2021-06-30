import React, { ReactElement } from "react"
import { Container } from "@material-ui/core"
import { IPageContainer } from "./_config/shape"
import usePCStyles from "./_config/styles"

/**
 * Abstraction on the `<Container>` component for a consistent page spacing
 *
 * @param {IPageContainer} props Default props for the material-ui Container component
 */
const PageContainer = ({
	children,
	className,
	id,
	// eslint-disable-next-line
	...rest
}: IPageContainer): ReactElement => {
	const styles = usePCStyles()

	return (
		<>
			{/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
			<a id="main-page-container" tabIndex={-1} className="visually-hidden">
				Main content anchor
			</a>
			<Container
				role="role" // eslint-disable-line
				className={`${styles.container} ${className || ""}`}
				{...rest} // eslint-disable-line react/jsx-props-no-spreading
			>
				{children}
			</Container>
		</>
	)
}

export default PageContainer
