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

/**
 * Get a list of identifiers that are "static",
 * ie they should always be showen
 *
 * @returns PossibleActionItems[]
 */
export const staticIdentifier = (): PossibleActionItems[] => [
	"cashInActions",
	"cashOutActions",
]

/**
 * Checks if the container is not cashInActions OR cashOutActions
 *
 * @param {PossibleActionItems} identifier
 * @returns boolean
 */
export const allowNotes = (identifier: PossibleActionItems): boolean => {
	return staticIdentifier().indexOf(identifier) === -1
}
