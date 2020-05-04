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
	...rest
}: IPageContainer): ReactElement => {
	const styles = usePCStyles()

	return (
		// eslint-disable-next-line react/jsx-props-no-spreading
		<Container className={`${styles.container} ${className}`} {...rest}>
			{children}
		</Container>
	)
}

export default PageContainer
