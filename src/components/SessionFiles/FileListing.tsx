import React, { ReactElement } from "react"
import { List, ListItem, ListItemText } from "@material-ui/core"
import ExpandableNav from "../ExpandableNav"
import IfElseLoading from "../IfElseLoading"
import { FileListingProps, FileListingStruct } from "./__config/shape"
import CheckboxListItem from "./CheckboxListItem"

export default React.memo(function FileListing({
	title,
	setState,
	state,
	data,
	id,
	loading = false,
}: FileListingProps): ReactElement {
	const handleChange = (idx: number) => (): void => {
		setState((prev) => {
			const copy = [...prev[id]]
			// eslint-disable-next-line
			copy[idx] = !copy[idx]

			return {
				...prev,
				[id]: copy,
			}
		})
	}

	function mapList(item: FileListingStruct, idx: number): ReactElement {
		return (
			<CheckboxListItem
				key={item.id}
				onClick={handleChange(idx)}
				checked={state[idx]}
				label={item.name}
			/>
		)
	}

	return (
		<ExpandableNav title={title}>
			<IfElseLoading if={!loading}>
				<List component="nav" disablePadding>
					{data.length === 0 ? (
						<>
							<ListItem>
								<ListItemText>No data available to download</ListItemText>
							</ListItem>
						</>
					) : (
						<>{data.map(mapList)}</>
					)}
				</List>
			</IfElseLoading>
		</ExpandableNav>
	)
})
