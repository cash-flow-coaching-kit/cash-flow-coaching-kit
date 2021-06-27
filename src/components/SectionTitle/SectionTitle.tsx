import React, { ReactElement } from "react"
import { Typography } from "@material-ui/core"
import { SectionTitleProps } from "./_config/shape"
import useSTStyles from "./_config/styles"

/**
 * Abstraction for the Typography for a consistent heading for sections
 *
 * @param {SectionTitleProps} props Mimics the props for `<Typography>`
 * @returns ReactElement
 */
const SectionTitle = ({
	children,
	className,
	// eslint-disable-next-line
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
