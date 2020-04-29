import React, { ReactElement, ReactNode } from "react"
import {
	Container,
	makeStyles,
	StandardProps,
	ContainerProps,
	ContainerClassKey,
} from "@material-ui/core"

interface IPageContainer
	extends StandardProps<ContainerProps, ContainerClassKey> {
	children: ReactNode
}

const usePCStyles = makeStyles((theme) => ({
	container: {
		paddingTop: theme.spacing(5),
	},
}))

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
