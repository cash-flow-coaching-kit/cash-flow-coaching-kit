import React, { ReactElement } from "react"
import { AppRouter } from "./components/Routing"
import { ClientProvider } from "./state/client"

const App = (): ReactElement => {
	return (
		<ClientProvider>
			<AppRouter />
		</ClientProvider>
	)
}

export default App
