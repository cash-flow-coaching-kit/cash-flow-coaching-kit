import React, { ReactElement } from "react"
import {
	ListItem,
	ListItemIcon,
	Checkbox,
	ListItemText,
} from "@material-ui/core"
import { CheckboxListItemProps } from "./__config/shape"

export default React.memo(function CheckboxListItem({
	label,
	checked,
	onClick,
}: CheckboxListItemProps): ReactElement {
	return (
		<ListItem button onClick={onClick}>
			<ListItemIcon>
				<Checkbox
					edge="start"
					checked={checked}
					tabIndex={-1}
					disableRipple
					inputProps={{ "aria-labelledby": label }}
				/>
			</ListItemIcon>
			<ListItemText>{label}</ListItemText>
		</ListItem>
	)
})
