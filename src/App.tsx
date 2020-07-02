import React, { ReactElement, useEffect } from "react"
import { AppRouter } from "./components/Routing"
import { ClientProvider } from "./state/client"

const App = (): ReactElement => {
	useEffect(() => {
		const blockReload = window.localStorage.getItem("blockReload")
		if (!blockReload) {
			window.localStorage.setItem("blockReload", "true")
		}
	}, [])

	return (
		<ClientProvider>
			<AppRouter />
		</ClientProvider>
	)
}

export default App
