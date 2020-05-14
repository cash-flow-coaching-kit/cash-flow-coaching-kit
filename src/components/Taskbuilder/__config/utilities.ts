/* eslint-disable import/prefer-default-export */
import { ChecklistOptions } from "./shape"
import { PossibleActionItems } from "../../../state/action-checklist/shape"

/**
 * Options to fill the checklist options in the TaskBuilder component
 *
 * @export
 * @param {PossibleActionItems} container
 * @returns {string[]}
 */
export function checklistOptions(container: PossibleActionItems): string[] {
	const options: ChecklistOptions = {
		// NOT USED - There are no discover topics pages for these
		cashInActions: [],
		cashOutActions: [],

		// USED
		planningBusiness: [
			"Forecast my demand.",
			"Set the right price for my product or service.",
			"Assess the capital I need to start up or grow.",
			"Build my business plan.",
		],
		recordKeeping: [],
		funding: [],
		managing: [],
		planningCommitments: [],
		tracking: [],
		transition: [],
	}

	return options[container]
}
