import React, { ReactElement, createRef, useState, useContext } from "react"
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

	const deleteItem = (row: number, event: any) => {
		const newItems = currentItems.filter((i) => i.row !== row)
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
			const newItems = await generalProcessFile(file.type, data)
			setCurrentItems([...currentItems, ...newItems])
		}
		reader.readAsArrayBuffer(file)
	}

	const onAddToCanvas = () => {
		canvasItemUpdater.forEach((updater) => updater(currentItems))
		setCurrentItems([]) // clear list
		return onClose()
	}

	const renderSingleItem = (item: ProcessFileItem): ReactElement => {
		const { row, description, amount } = item
		return (
			<TableRow key={row}>
				<TableCell>{description}</TableCell>
				<TableCell align="right">${Math.floor(amount)}</TableCell>
				<TableCell>
					<IconDeleteButton onClick={deleteItem.bind(null, row)} />
				</TableCell>
			</TableRow>
		)
	}

	const renderItems = (items: ProcessFileItem[]): ReactElement => {
		return (
			<Table>
				<TableBody>{items.map((item) => renderSingleItem(item))}</TableBody>
			</Table>
		)
	}

	return (
		<>
			<Dialog open={open}>
				<DialogTitle>Import data</DialogTitle>
				<DialogContent>
					<p>
						You can import data into the Cash Flow Canvas from Xero, MYOB,
						QuickBooks or any spreadsheet.
					</p>
					<p>
						To import data click Open File and select the file you wish to
						import. This will load each item from your file. Remove items you
						don't want imported into the canvas. Once complete, select Add to
						Canvas.
					</p>
					<p>Imported data must be in .xlsx format.</p>
					{/* <pre>{JSON.stringify(currentItems, null, 2)}</pre> */}
					{currentItems.length === 0 ? (
						<p onClick={onOpenFileDialog}>Please import a file.</p>
					) : (
						renderItems(currentItems)
					)}
				</DialogContent>
				<DialogActions>
					<Button onClick={onOpenFileDialog}>Open File</Button>
					<Button onClick={onAddToCanvas} disabled={currentItems.length === 0}>
						Add To Canvas
					</Button>
					<Button onClick={onClose}>Close</Button>
				</DialogActions>
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
