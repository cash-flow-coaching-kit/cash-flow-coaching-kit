import React, { ReactElement } from "react"
import { Typography, Box, makeStyles } from "@material-ui/core"
import { Link } from "react-router-dom"

const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
		alignItems: "center",
	},
	img: {
		maxWidth: "45px",
		display: "block",
		height: "auto",
		marginRight: theme.spacing(1),
	},
	link: {
		textDecoration: "none",
	},
	type: {
		color: theme.palette.text.primary,
	},
}))

type LogoProps = {
	to: string
	className?: string
}

/**
 * Logo component
 *
 * @export
 * @param {LogoProps} { to, className = "" }
 * @returns {ReactElement}
 */
export default function Logo({ to, className = "" }: LogoProps): ReactElement {
	const cls = useStyles()

	return (
		<Link to={to} className={cls.link}>
			<Box className={`${cls.root} ${className}`}>
				<img src="/images/logo.png" alt="" className={cls.img} />
				<Typography className={cls.type} variant="h6">
					Cash flow coaching kit
				</Typography>
			</Box>
		</Link>
	)
}
