import { PossibleActionItems } from "../../state/action-checklist/shape"
import { WithActionContainer } from "../../data/_config/shape"

/**
 * Used with the array `filter` method, this allows you to
 * filter a object using the `actionContainer` property.
 * The objects interface must use `WithActionContainer`
 * to work
 *
 * [{actionContainer: "..."}, ...].filter(filterByActionContainer("..."))
 *
 * @param {PossibleActionItems} container
 * @returns WithActionContainer[]
 */
const filterByActionContainer = (container: PossibleActionItems) => (
	item: WithActionContainer
): boolean => {
	return item.actionContainer === container
}

export default filterByActionContainer
