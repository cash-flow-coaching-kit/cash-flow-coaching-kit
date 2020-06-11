import Dexie from "dexie"
import { CFCStruct, CFCId } from "../_config/shape"

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
}

const CFCDB = new CFCDatabase()

export default CFCDB
