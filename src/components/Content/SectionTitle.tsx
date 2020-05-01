import React, { ReactElement } from "react"
import {
	StandardProps,
	TypographyProps,
	TypographyClassKey,
	Typography,
	makeStyles,
} from "@material-ui/core"

type SectionTitleProps = StandardProps<TypographyProps, TypographyClassKey>

// Section title styles
const useSTStyles = makeStyles((theme) => ({
	title: {
		fontWeight: 500,
		marginBottom: theme.spacing(2),
	},
}))

/**
 * Abstraction for the Typography for a consistent heading for sections
 *
 * @param {SectionTitleProps} props Mimics the props for `<Typography>`
 * @returns ReactElement
 */
const SectionTitle = ({
	children,
	className,
	...props
}: SectionTitleProps): ReactElement => {
	const styles = useSTStyles()
	return (
		<Typography
			variant="h4"
			color="textPrimary"
			className={`${styles.title} ${className}`}
			// eslint-disable-next-line react/jsx-props-no-spreading
			{...props}
		>
			{children}
		</Typography>
	)
}

export default SectionTitle
