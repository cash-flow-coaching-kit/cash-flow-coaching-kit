import Dexie from "dexie"
import { CFCStruct, CFCId } from "../_config/shape"
import hasProperty from "../../util/object/hasProperty"

/**
 * Database definition for the CFC data
 *
 * @class CFCDatabase
 * @extends {Dexie}
 */
class CFCDatabase extends Dexie {
	/**
	 * Table used to store Canvas data
	 *
	 * @type {Dexie.Table<CFCStruct, CFCId>}
	 * @memberof CFCDatabase
	 */
	canvases!: Dexie.Table<CFCStruct, CFCId>

	/**
	 * Creates an instance of CFCDatabase.
	 *
	 * @memberof CFCDatabase
	 */
	constructor() {
		super("CFCDatabase")
		this.applyMigrations()

		// eslint-disable-next-line
		this.canvases = this.table("canvases")

		this.replaceIdsWithStrings()
	}

	/**
	 * Applys the migration for the database.
	 * Add new migrations when the database needs to update
	 *
	 * @private
	 * @memberof CFCDatabase
	 */
	private applyMigrations(): void {
		this.version(1).stores({
			canvases: `
        ++id,
        clientId,
        createdAt,
        canvasTitle,
        canvasType,
        canvasTimeFrame,
        canvasStartDate,
        canvasEndDate,
        gstOnSales,
        gstOnPurchases,
        openingBalance,
        paygWithholding,
        superAmount,
        incomeTax,
        cashToOwner,
        cashToBank,
        stock,
        creditors,
        debtors,
        assets,
        loans,
        *cashInItems,
        *cashOutItems
      `,
		})

		this.version(1.1).stores({
			canvases: `
        ++id,
        clientId,
        createdAt,
        canvasTitle,
        canvasType,
        canvasTimeFrame,
        canvasStartDate,
        canvasEndDate,
        gstOnSales,
        gstOnPurchases,
        openingBalance,
        paygWithholding,
        superAmount,
        incomeTax,
        cashToOwner,
        cashToBank,
        stock,
        creditors,
        debtors,
        assets,
        loans,
        *cashInItems,
				*cashOutItems,
				[canvasType+canvasTimeFrame+clientId]
      `,
		})
	}

	private replaceIdsWithStrings(): void {
		this.canvases.toCollection().modify((canvas) => {
			if (typeof canvas.id === "number") {
				canvas.id = `${canvas.id}`
			}
			if (typeof canvas.clientId === "number") {
				canvas.clientId = `${canvas.clientId}`
			}
			if (!hasProperty(canvas, "gstOnPurchases")) {
				canvas.gstOnPurchases = undefined
			}
			if (!hasProperty(canvas, "gstOnSales")) {
				canvas.gstOnSales = undefined
			}
		})
	}
}

const CFCDB = new CFCDatabase()

export default CFCDB
