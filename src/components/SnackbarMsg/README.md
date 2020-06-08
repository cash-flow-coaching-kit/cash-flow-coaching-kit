# Snackbar message component

## Usage

```tsx
import SnackbarMsg from "/path/to/component"

const FormComponent = () => {
	const [snackbar, setSnackbar] = useState<SnackbarMsgData>({
		open: false,
		msg: "",
	})

	function show(
		msg: SnackbarMsgData["msg"],
		severity: SnackbarMsgData["severity"]
	) {
		setSnackbar({ ...snackbar, msg, severity, open: true })
	}

	function handleClose(event?: React.SyntheticEvent, reason?: string): void {
		if (reason === "clickaway") {
			return
		}

		setSnackbar({ ...snackbar, open: false })
	}

	return <SnackbarMsg {...snackbar} onClose={handleClose} />
}
```
