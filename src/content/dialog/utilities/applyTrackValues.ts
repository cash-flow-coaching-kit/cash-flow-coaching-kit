import { CFCStruct, CashFlow } from "../../../data/_config/shape"
import { isGSTValid } from "../../../util/money/gst"

const performDivide = (value: number, divideBy: number): number => {
	return Math.floor(value / divideBy)
}

export default (data: CFCStruct, divideBy: number): CFCStruct => {
	return {
		...data,
		gstOnPurchases:
			typeof data.gstOnPurchases !== "undefined"
				? performDivide(data.gstOnPurchases, divideBy)
				: undefined,
		gstOnSales: typeof isGSTValid(data.gstOnSales)
			? performDivide(data.gstOnSales!, divideBy)
			: undefined,
		paygWithholding: performDivide(data.paygWithholding, divideBy),
		superAmount: performDivide(data.superAmount, divideBy),
		cashToOwner: performDivide(data.cashToOwner, divideBy),
		debtors: performDivide(data.debtors, divideBy),
		creditors: performDivide(data.creditors, divideBy),
		assets: performDivide(data.assets, divideBy),
		loans: performDivide(data.loans, divideBy),
		stock: performDivide(data.stock, divideBy),
		cashInItems: data.cashInItems.reduce((acc: CashFlow[], cur) => {
			return acc.concat({
				...cur,
				amount: performDivide(cur.amount, divideBy),
			})
		}, []),
		cashOutItems: data.cashOutItems.reduce((acc: CashFlow[], cur) => {
			return acc.concat({
				...cur,
				amount: performDivide(cur.amount, divideBy),
			})
		}, []),
	}
}
