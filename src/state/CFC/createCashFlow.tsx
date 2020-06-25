import { CashFlow } from "../../data/_config/shape"
import { newTimestamp } from "../../util/dates"

export default function createCashFlowItem(
	id: number | null = null,
	description = "",
	amount = 0,
	gstApplicable = true
): CashFlow {
	return {
		id: id || newTimestamp(),
		description,
		amount,
		gstApplicable,
	}
}
