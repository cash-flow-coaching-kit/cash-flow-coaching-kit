import "react-app-polyfill/ie11"
import "react-app-polyfill/stable"

import React from "react"
import ReactDOM from "react-dom"
import "./theme/sass/style.scss"
import App from "./App"
import * as serviceWorker from "./serviceWorker"

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById("root")
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()

if (process.env.NODE_ENV === "production") {
	// eslint-disable-next-line
	window.onbeforeunload = function (e: any): any {
		// eslint-disable-next-line
		e = e || window.event
		// old browsers
		if (e) {
			// eslint-disable-next-line
			e.returnValue = "Sure?"
		}
		// safari, chrome(chrome ignores text)
		return "Sure?"
	}
}
