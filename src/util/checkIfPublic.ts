import { RouteProps } from "react-router-dom"
import { PublicRoutes } from "./routes/routes"

/**
 * Checks if the current location path is in the Public Routes enum
 *
 * @param {RouteProps["location"]} location
 * @returns boolean
 */
const checkIfPublic = (location: RouteProps["location"]): boolean => {
	if (location) {
		return (
			(Object.values(PublicRoutes) as string[]).indexOf(location.pathname) ===
			-1
		)
	}

	return false
}

export default checkIfPublic
