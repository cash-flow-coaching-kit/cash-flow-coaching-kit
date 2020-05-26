import { BaseCFCStruct } from "../../../data/_config/shape"

const initialValues: BaseCFCStruct = {
	canvasTitle: "",
	canvasType: "review",
	canvasTimeFrame: "quaterly",
	canvasStartDate: new Date(),
	canvasEndDate: new Date(),
	openingBalance: 0,
	paygWithholding: 0,
	superAmount: 0,
	incomeTax: 0,
	cashToOwner: 0,
	stock: 0,
	creditors: 0,
	debtors: 0,
	assets: 0,
	loans: 0,
	cashInItems: [],
	cashOutItems: [],
}

export default initialValues
