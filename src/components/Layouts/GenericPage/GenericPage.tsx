import React, { ReactElement, useMemo, ReactNode } from "react"
import { RouteProps, useLocation } from "react-router-dom"
import { ThemeProvider } from "@material-ui/core"
import determineTheme from "../../../util/routes/routeTheming"

export default function GenericPage({
	children,
}: {
	children: ReactNode
}): ReactElement {
	const location: RouteProps["location"] = useLocation()

	const theme = useMemo(() => {
		return determineTheme(location.pathname)
	}, [location])

	return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}
