import { CashFlow } from "../../data/_config/shape"
import { newTimestamp } from "../../util/dates"

export default function createCashFlowItem(): CashFlow {
	return {
		id: newTimestamp(),
		description: "",
		amount: 0,
		gstApplicable: true,
	}
}
