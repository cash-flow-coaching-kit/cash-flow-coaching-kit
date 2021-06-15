import React, { ReactElement } from "react"
import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core"
import PictureAsPdfIcon from "@material-ui/icons/PictureAsPdf"
import ExpandableNav from "../ExpandableNav"
import fileSaver from 'file-saver'

type QPProps = {
	filename: string
}

const saveFile = async(filename:string) => {
	const blob = await fetch("./pdf/" + filename).then((r) => r.blob())
	fileSaver.saveAs(blob, filename)
}
export default function QuicksnapsPanel({ filename }: QPProps): ReactElement {
	return (
		<ExpandableNav>
			<List component="nav" disablePadding>
				<ListItem
					component="a"
					onClick={() => saveFile(filename)}
					target="_blank"
					rel="noopener noreferrer"
					style={{
						color: "inherit",
						cursor: "pointer"
					}}
				>
					<ListItemIcon>
						<PictureAsPdfIcon />
					</ListItemIcon>
					<ListItemText>Download Quicksnaps PDF</ListItemText>
				</ListItem>
			</List>
		</ExpandableNav>
	)
}
