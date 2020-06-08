/* eslint-disable import/prefer-default-export */
import { ChecklistOptions } from "./shape"
import { PossibleActionItems } from "../../../state/action-checklist/shape"
import { ActionChecklistStruct, ClientId } from "../../../data/_config/shape"
import { newChecklistItem } from "../../../data/ActionChecklist/_config/utilities"

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
		recordKeeping: [
			"Ensure my records are reliable.",
			"Find an efficient accounting system for my needs.",
			"Get help if I need it.",
			"Ensure my records meet my commitments.",
			"Complete the record keeping activity.",
			"Download the ATO app.",
		],
		funding: [
			"Understand the four main funding types.",
			"Articulate my purpose for seeking funding.",
			"Know how much funding I need.",
			"Know when to seek funding.",
			"Understand the terms that suit my business.",
			"Complete the funding activity.",
		],
		managing: [
			"Manage the timing of my cash flow.",
			"Understand the difference between profit and cash flow.",
			"Know how much cash doesn’t belong to my business.",
			"Set out my working capital.",
			"Use the Cash Flow Canvas.",
		],
		planningCommitments: [
			"Understand which business actions trigger payments.",
			"Be aware of important dates.",
			"Calculate how much to put aside.",
			"Know what can go wrong when I don’t meet obligations.",
			"Complete the financial commitments activity.",
		],
		tracking: [
			"Set out a plan to review regularly.",
			"Learn what to look for in my cash flow.",
			"Watch my performance to measure my success.",
			"Complete the performance tracking activity.",
		],
		transition: [],
	}

	return options[container]
}

/**
 * Generates a name field based on a string value
 * Changes the text to lowercase and replaces all
 * non text/number characters to a underscore
 *
 * @export
 * @param {string} str
 * @returns {string}
 */
export function createNameField(str: string): string {
	return str.toLowerCase().replace(/[^a-zA-Z0-9]/g, "_")
}

/**
 * Checks if a generic string matches a "name"
 *
 * @export
 * @param {string} str
 * @param {string} name
 * @returns {boolean}
 */
export function stringNameMatches(str: string, name: string): boolean {
	return createNameField(str) === name
}

/**
 * Checks if a label is in the checklist data
 *
 * @export
 * @param {string} label
 * @param {ActionChecklistStruct[]} checklists
 * @returns {boolean}
 */
export function inChecklists(
	label: string,
	checklists: ActionChecklistStruct[]
): boolean {
	return (
		typeof checklists.find((item) => item.description === label) !== "undefined"
	)
}

/**
 * Checks if the current item is in the checklist
 * data
 *
 * @export
 * @param {string} label
 * @param {ActionChecklistStruct[]} checklists
 * @returns {boolean}
 */
export function determineChecked(
	label: string[],
	checklists: ActionChecklistStruct[]
): boolean[] {
	if (checklists.length === 0) return new Array(label.length).fill(false)

	return label.map((str) => inChecklists(str, checklists))
}

/**
 * Constructs a array of items based on the answers
 * array.
 *
 * @export
 * @param {boolean[]} answers
 * @param {ClientId} client
 * @param {PossibleActionItems} container
 * @returns {ReducerHOF<ActionChecklistStruct[], string>}
 */
export function constructSelectedItems(
	answers: boolean[],
	client: ClientId,
	container: PossibleActionItems
): ReducerHOF<ActionChecklistStruct[], string> {
	return (acc, cur, i): ActionChecklistStruct[] => {
		if (answers[i]) {
			return acc.concat({
				...newChecklistItem(client, container),
				description: cur,
			})
		}

		return acc
	}
}
