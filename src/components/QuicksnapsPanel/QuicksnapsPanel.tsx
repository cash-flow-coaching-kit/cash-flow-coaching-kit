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
	return(fileSaver.saveAs(blob, filename))
}
export default function QuicksnapsPanel({ filename }: QPProps): ReactElement {
	return (
		<ExpandableNav>
			<List component="nav" disablePadding>
				<ListItem
					component="button"
					onClick={() => saveFile(filename)}
					className="pdfDownloadLink"
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
