import { nanoid } from "nanoid"
import { CashFlow } from "../../data/_config/shape"

export default function createCashFlowItem(): CashFlow {
	return {
		id: nanoid(),
		description: "",
		amount: 0,
		gstApplicable: true,
	}
}
