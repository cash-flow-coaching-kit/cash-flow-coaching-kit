/* eslint-disable import/prefer-default-export */
import { PossibleActionItems } from "../../../../state/action-checklist/shape"
import { actionTitleMapping } from "./data"

/**
 * Gets the title for the current Action container
 *
 * @param {PossibleActionItems} key
 * @returns string
 */
export const actionItemKeyTitleMapping = (key: PossibleActionItems): string => {
	return actionTitleMapping[key]
}
