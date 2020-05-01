import React, { ReactElement, ReactNode } from "react"
import {
	Container,
	makeStyles,
	StandardProps,
	ContainerProps,
	ContainerClassKey,
} from "@material-ui/core"

/**
 * Prop structure for the `<PageContainer>` component
 *
 * @interface IPageContainer
 * @extends {StandardProps<ContainerProps, ContainerClassKey>}
 */
interface IPageContainer
	extends StandardProps<ContainerProps, ContainerClassKey> {
	children: ReactNode
}

// Styles for the Page Container
const usePCStyles = makeStyles((theme) => ({
	container: {
		paddingTop: theme.spacing(5),
	},
}))

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
