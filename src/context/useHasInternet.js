import { useEffect, useState } from "react"

export default () => {
	const [isOnline, setIsOnline] = useState(navigator.onLine)

	const updateIsOnline = () => {
		setIsOnline(navigator.onLine)
	}

	useEffect(() => {
		window.addEventListener("offline", updateIsOnline)
		window.addEventListener("online", updateIsOnline)
		return () => {
			window.removeEventListener("offline", updateIsOnline)
			window.removeEventListener("online", updateIsOnline)
		}
	}, [])

	return isOnline
}
