import { PossibleActionItems } from "../../../../state/action-checklist/shape"
import { actionTitleMapping } from "./data"

// eslint-disable-next-line import/prefer-default-export
export const actionItemKeyTitleMapping = (key: PossibleActionItems): string => {
	return actionTitleMapping[key]
}
