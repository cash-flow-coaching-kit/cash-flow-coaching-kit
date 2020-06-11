import { ThemeOptions, createMuiTheme } from "@material-ui/core"

export const defaultTheme: ThemeOptions = {
	...createMuiTheme(),
	palette: {
		primary: {
			main: "#3f51b5",
		},
		secondary: {
			main: "#7986cb",
		},
	},
}

export const applyTheme: ThemeOptions = {
	...defaultTheme,
	palette: {
		primary: {
			main: "#43A047",
		},
		secondary: {
			main: "#a5d6a7",
		},
	},
}

export const discoverTheme: ThemeOptions = {
	...defaultTheme,
	palette: {
		primary: {
			main: "#9c27b0",
		},
		secondary: {
			main: "#ce93d8",
		},
	},
}

export const planActionTheme: ThemeOptions = {
	...defaultTheme,
	palette: {
		primary: {
			main: "#0091ea",
		},
		secondary: {
			main: "#81d4f4",
		},
	},
}

export const settingsTheme: ThemeOptions = {
	...defaultTheme,
	palette: {
		primary: {
			main: "#ff3d00",
		},
		secondary: {
			main: "#ce93d8",
		},
	},
}
