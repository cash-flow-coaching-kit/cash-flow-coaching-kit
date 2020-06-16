import { ThemeOptions, createMuiTheme } from "@material-ui/core"
import {
	green,
	deepOrange,
	lightBlue,
	purple,
	indigo,
} from "@material-ui/core/colors"

export const defaultTheme: ThemeOptions = {
	...createMuiTheme(),
	palette: {
		primary: {
			main: indigo["500"],
		},
		secondary: {
			main: indigo["300"],
		},
	},
}

export const applyTheme: ThemeOptions = {
	...defaultTheme,
	palette: {
		primary: {
			main: green["600"],
		},
		secondary: {
			main: green["200"],
		},
	},
}

export const discoverTheme: ThemeOptions = {
	...defaultTheme,
	palette: {
		primary: {
			main: purple["500"],
		},
		secondary: {
			main: purple["200"],
		},
	},
}

export const planActionTheme: ThemeOptions = {
	...defaultTheme,
	palette: {
		primary: {
			main: lightBlue.A700,
		},
		secondary: {
			main: lightBlue["200"],
		},
	},
}

export const settingsTheme: ThemeOptions = {
	...defaultTheme,
	palette: {
		primary: {
			main: deepOrange.A400,
		},
		secondary: {
			main: deepOrange["300"],
		},
	},
}
