import React, {
	ReactElement,
	createRef,
	useState,
	useContext,
	useEffect,
} from "react"
import { useParams } from "react-router-dom"
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
import {
	generalProcessFile,
	NO_MERGE,
	ProcessFileItem,
} from "./lib/ImportDataGeneralLib"
import IconDeleteButton from "../IconDeleteButton"
import CFCContext from "../../state/CFC/context"
import CFCUseCase from "../../data/CFC/CFCLogic"
import { CFCStruct } from "../../data/_config/shape"

export default function ImportDataModal({
	open,
	onClose,
}: {
	open: boolean
	onClose: any
}): ReactElement {
	const fileRef: any = createRef()
	const [currentItems, setCurrentItems] = useState<ProcessFileItem[]>([])
	const { id: canvasId } = useParams<any>()

	// Canvas Item Updaters are a list of function from context to update the canvas
	const { canvasItemUpdater } = useContext(CFCContext)

	const [canvasData, setCanvasData] = useState<any>()
	useEffect(() => {
		// load the current canvas so we can merge
		;(async () => {
			const t = await CFCUseCase.findById(canvasId)
			setCanvasData(t)
		})()
	}, [canvasId])

	const deleteItem = (id: string) => (event: any): void => {
		const newItems = currentItems
			.filter((i) => i.id !== id)
			.map((i) => (i.merge === id ? { ...i, merge: NO_MERGE } : i))
		setCurrentItems(newItems)
	}

	const toggleType = (id: string) => (event: any): void => {
		const newItems: ProcessFileItem[] = currentItems.map((i) => {
			if (i.id === id) {
				return {
					...i,
					type: event.target.value as ProcessFileItem["type"],
					merge: NO_MERGE,
				}
			}
			return i
		})
		setCurrentItems(newItems)
	}

	const toggleGST = (id: string) => (event: any): void => {
		const newItems: ProcessFileItem[] = currentItems.map((i) => {
			if (i.id === id) {
				return {
					...i,
					gst: event.target.value as ProcessFileItem["gst"],
				}
			}
			return i
		})
		setCurrentItems(newItems)
	}

	const toggleMergeInto = (id: string) => (event: any): void => {
		const newItems: ProcessFileItem[] = currentItems.map((i) => {
			// edge case where linked to an item that gets linked - update the link
			if (i.id === id || i.merge === id) {
				return {
					...i,
					merge: event.target.value as ProcessFileItem["merge"],
				}
			}
			return i
		})
		setCurrentItems(newItems)
	}

	const onOpenFileDialog = () => fileRef!.current.click()

	const onFileChange = (event: any) => {
		const file = event.target.files[0]
		const reader = new FileReader()
		// eslint-disable-next-line
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

	const renderMergeOptions = (
		parentId: string,
		type: string,
		merge: string,
		cashItems: CFCStruct[]
	) => (
		<Select value={merge} onChange={toggleMergeInto(parentId)}>
			<MenuItem value={NO_MERGE}>Create a new line item</MenuItem>
			{
				// existing items
				cashItems !== undefined &&
					cashItems.map(({ id, description }: any) => (
						<MenuItem key={id} value={id}>
							Add to {description || "No description"}
						</MenuItem>
					))
			}
			{
				// new import items
				currentItems
					.filter(
						(i) => i.merge === NO_MERGE && i.type === type && i.id !== parentId
					)
					.map(({ id, description }) => (
						<MenuItem key={id} value={id}>
							Merge with {description}
						</MenuItem>
					))
			}
		</Select>
	)

	const renderSingleItem = (item: ProcessFileItem): ReactElement => {
		const { id, description, amount, type, gst, merge } = item
		return (
			<TableRow key={id}>
				<TableCell>{description}</TableCell>
				<TableCell align="right">${Math.floor(amount)}</TableCell>
				<TableCell>
					<Select value={type} onChange={toggleType(id)}>
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
					{type === "in" &&
						renderMergeOptions(id, "in", merge, canvasData?.cashInItems)}
					{type === "out" &&
						renderMergeOptions(id, "out", merge, canvasData?.cashOutItems)}
				</TableCell>
				<TableCell>
					{(type === "in" || type === "out") && (
						<Select value={gst} onChange={toggleGST(id)}>
							<MenuItem value="applygst">Apply GST</MenuItem>
							<MenuItem value="nogst">No GST</MenuItem>
						</Select>
					)}
				</TableCell>
				<TableCell>
					<IconDeleteButton onClick={deleteItem(id)} />
				</TableCell>
			</TableRow>
		)
	}

	const renderItems = (): ReactElement => (
		<Table size="small">
			<TableBody>
				{currentItems.map((item) => renderSingleItem(item))}
			</TableBody>
		</Table>
	)

	const cashItemCount = (type: "in" | "out") =>
		currentItems.filter((i) => i.type === type && i.merge === NO_MERGE).length +
		canvasData?.cashInItems.length

	const renderSubmitButton = () => {
		if (currentItems.length === 0)
			return <Button disabled>No items to add</Button>
		if (cashItemCount("in") > 6) return <Button disabled>Max 6 Cash In</Button>
		if (cashItemCount("out") > 6)
			return <Button disabled>Max 6 Cash Out</Button>
		return <Button onClick={onAddToCanvas}>Add To Canvas</Button>
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
							{renderItems()}
						</DialogContent>
						<DialogActions>
							{renderSubmitButton()}
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
