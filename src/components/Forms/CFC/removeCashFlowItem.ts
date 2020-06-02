import { CashFlow } from "../../../data/_config/shape"
import filterById from "../../../util/filters/ById"

/**
 * Removes to resets a cash flow item
 *
 * @export
 * @param {CashFlow["id"]} id
 * @param {CashFlow[]} values
 * @returns {CashFlow[]}
 */
export default function removeCashflowItem(
	id: CashFlow["id"],
	values: CashFlow[]
): CashFlow[] {
	if (values.length === 1) {
		return [
			{
				id: values[0].id,
				description: "",
				amount: 0,
				gstApplicable: true,
			},
		]
	}
	return values.filter(filterById(id, true))
}
