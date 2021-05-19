import React, { ReactElement } from "react"
import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core"
import PictureAsPdfIcon from "@material-ui/icons/PictureAsPdf"
import ExpandableNav from "../ExpandableNav"

type QPProps = {
	filename: string
}

export default function QuicksnapsPanel({ filename }: QPProps): ReactElement {
	return (
		<ExpandableNav>
			<List component="nav" disablePadding>
				<ListItem
					component="a"
					href={`./pdf/${filename}`}
					target="_blank"
					rel="noopener noreferrer"
					style={{
						color: "inherit",
					}}
				>
					<ListItemIcon>
						<PictureAsPdfIcon />
					</ListItemIcon>
					<ListItemText>Quicksnaps PDF</ListItemText>
				</ListItem>
			</List>
		</ExpandableNav>
	)
}
