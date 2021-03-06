import { v4 as uuidv4 } from "uuid"
import { CashFlow } from "../../data/_config/shape"

export default function createCashFlowItem(
	description = "",
	amount = 0,
	gstApplicable = true
): CashFlow {
	return {
		id: uuidv4(),
		description,
		amount,
		gstApplicable,
	}
}
