import React, {
	ReactElement,
	createRef,
	useState,
	useContext,
	ChangeEvent,
} from "react"
import {
	Dialog,
	DialogTitle,
	DialogContent,
	DialogActions,
	Button,
	Table,
	TableRow,
	TableBody,
	TableCell,
	Grid,
	Typography,
	Select,
	MenuItem,
} from "@material-ui/core"
import { generalProcessFile, ProcessFileItem } from "./lib/ImportDataGeneralLib"
import IconDeleteButton from "../IconDeleteButton"
import CFCContext from "../../state/CFC/context"
// import DeleteIcon from "@material-ui/icons/Delete"

export default function ImportDataModal({
	open,
	onClose,
}: {
	open: boolean
	onClose: any
}): ReactElement {
	const fileRef: any = createRef()
	const [currentItems, setCurrentItems] = useState<ProcessFileItem[]>([])

	// Canvas Item Updaters are a list of function from context to update the canvas
	const { canvasItemUpdater } = useContext(CFCContext)

	const deleteItem = (row: number) => (event: any): void => {
		const newItems = currentItems.filter((i) => i.row !== row)
		setCurrentItems(newItems)
	}

	const toggleType = (row: number) => (event: any): void => {
		const newItems: ProcessFileItem[] = currentItems.map((i) => {
			if (i.row === row) {
				return {
					...i,
					type: event.target.value as ProcessFileItem["type"],
				}
			}

			return i
		})

		setCurrentItems(newItems)
	}

	const onOpenFileDialog = () => {
		// alert("import")
		fileRef!.current.click()
	}

	const onFileChange = (event: any) => {
		const file = event.target.files[0]
		const reader = new FileReader()
		reader.onload = async () => {
			if (!reader.result) {
				alert("empty")
				return
			}
			const data = new Uint8Array(reader.result as any)
			const newItems = await generalProcessFile(data)
			setCurrentItems([...currentItems, ...newItems])
		}
		reader.readAsArrayBuffer(file)
	}

	const onEmptyAndClose = () => {
		setCurrentItems([]) // clear list
		return onClose()
	}

	const onAddToCanvas = () => {
		canvasItemUpdater.forEach((updater) => updater(currentItems))
		return onEmptyAndClose()
	}

	const renderSingleItem = (item: ProcessFileItem): ReactElement => {
		const { row, description, amount, type } = item
		return (
			<TableRow key={row}>
				<TableCell>{description}</TableCell>
				<TableCell align="right">${Math.floor(amount)}</TableCell>
				<TableCell>
					<Select value={type} onChange={toggleType(row)}>
						<MenuItem value="in">Cash IN</MenuItem>
						<MenuItem value="out">Cash Out</MenuItem>
						<MenuItem value="debtors">Debtors</MenuItem>
						<MenuItem value="creditors">Creditors</MenuItem>
						<MenuItem value="assets">Assets</MenuItem>
						<MenuItem value="loans">Loans</MenuItem>
						<MenuItem value="stock">Stock</MenuItem>
					</Select>
				</TableCell>
				<TableCell>
					<IconDeleteButton onClick={deleteItem(row)} />
				</TableCell>
			</TableRow>
		)
	}

	const renderItems = (items: ProcessFileItem[]): ReactElement => {
		return (
			<Table size="small">
				<TableBody>{items.map((item) => renderSingleItem(item))}</TableBody>
			</Table>
		)
	}

	return (
		<>
			<Dialog open={open} fullWidth maxWidth="md">
				{currentItems.length === 0 ? (
					<>
						<DialogTitle>
							Complete the following steps to import data into your Cash Flow
							Canvas.
						</DialogTitle>
						<DialogContent>
							<Grid container spacing={0}>
								<Grid item xs={6}>
									<ol style={{ paddingRight: 24 }}>
										<li>
											<Typography>
												Open your chosen accounting package. The kit supports
												Xero, MYOB, and QuickBooks.
											</Typography>
										</li>
										<li>
											<Typography>
												Go to the reporting section in your accounting package.
											</Typography>
										</li>
										<li>
											<Typography>
												Select and export the report you would like to use in
												the kit. It will download as an Excel file.
											</Typography>
										</li>
										<li>
											<Typography>
												Return to this page and press the open file button.
											</Typography>
										</li>
										<li>
											<Typography>
												Select the Excel file from your file system.
											</Typography>
										</li>
									</ol>
									<Typography>
										Your data will then appear in a new screen.
									</Typography>
								</Grid>
								<Grid item xs={6}>
									<img
										src="/images/importdata.png"
										alt="Import Data"
										style={{ width: "100%", padding: 0 }}
									/>
								</Grid>
							</Grid>
						</DialogContent>
						<DialogActions>
							<Button onClick={onOpenFileDialog}>Open File</Button>
							<Button onClick={onEmptyAndClose}>Cancel</Button>
						</DialogActions>
					</>
				) : (
					<>
						<DialogTitle>
							Follow these steps to get your data ready to import.
						</DialogTitle>
						<DialogContent>
							<ol>
								<li>
									<Typography>
										For each item, select if it is cash in or cash out.
									</Typography>
								</li>
								<li>
									<Typography>
										Remove any unwanted items from the list by clicking on the
										bin icon.
									</Typography>
								</li>
								<li>
									<Typography>
										Press 'Add to Canvas' to import your data.
									</Typography>
								</li>
							</ol>
							{renderItems(currentItems)}
						</DialogContent>
						<DialogActions>
							<Button
								onClick={onAddToCanvas}
								disabled={currentItems.length === 0}
							>
								Add To Canvas
							</Button>
							<Button onClick={onEmptyAndClose}>Cancel</Button>
						</DialogActions>
					</>
				)}
			</Dialog>
			<input
				hidden
				id="fileUpload"
				type="file"
				ref={fileRef}
				onChange={onFileChange}
			/>
		</>
	)
}
