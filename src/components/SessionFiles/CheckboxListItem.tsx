import React, { ReactElement } from "react"
import {
	ListItem,
	ListItemIcon,
	Checkbox,
	ListItemText,
} from "@material-ui/core"
import { CheckboxListItemProps } from "./__config/shape"

export default React.memo(
	({ label, checked, onClick }: CheckboxListItemProps): ReactElement => (
		<ListItem button onClick={onClick}>
			<ListItemIcon>
				<Checkbox
					edge="start"
					checked={checked}
					tabIndex={-1}
					disableRipple
					inputProps={{ "aria-label": label }}
				/>
			</ListItemIcon>
			<ListItemText>{label}</ListItemText>
		</ListItem>
	)
)
