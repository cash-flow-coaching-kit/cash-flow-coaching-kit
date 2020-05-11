import { PossibleActionItems } from "../../../state/action-checklist/shape"

// eslint-disable-next-line import/prefer-default-export
export const ActionItemMapping: Record<
	PossibleActionItems,
	PossibleActionItems
> = {
	cashInActions: "cashInActions",
	cashOutActions: "cashOutActions",
	planningBusiness: "planningBusiness",
	recordKeeping: "recordKeeping",
	funding: "funding",
	managing: "managing",
	planningCommitments: "planningCommitments",
	tracking: "tracking",
	transition: "transition",
}
