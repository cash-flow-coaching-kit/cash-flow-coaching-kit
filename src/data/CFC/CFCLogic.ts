import ILogicLayer from "../_config/logicLayer"
import {
	CFCStruct,
	BaseCFCStruct,
	ClientId,
	CanvasType,
	CFCTimeFrame,
} from "../_config/shape"
import CFCDB from "./CFCDatabase"

/**
 * Logic implementation for the CFC data
 *
 * @class CFCLogic
 * @extends {ILogicLayer<CFCStruct, BaseCFCStruct>}
 */
class CFCLogic extends ILogicLayer<CFCStruct, BaseCFCStruct> {
	/**
	 * Creates an instance of CFCLogic.
	 *
	 * @memberof CFCLogic
	 */
	constructor() {
		super(CFCDB, CFCDB.canvases)
	}

	/**
	 * Counts the number of records for a given client
	 *
	 * @param {ClientId} clientId
	 * @returns {Promise<number>}
	 * @memberof CFCLogic
	 */
	countClientRecords(clientId: ClientId): Promise<number> {
		return this.database.transaction("r", this.table.name, () => {
			return this.table.where({ clientId }).count()
		})
	}

	/**
	 * Finds records for a client based on the canvas type and timeframe
	 *
	 * @param {CanvasType} type
	 * @param {CFCTimeFrame} timeframe
	 * @param {ClientId} clientId
	 * @returns {Promise<CFCStruct[]>}
	 * @memberof CFCLogic
	 */
	findPossibleDuplicates(
		type: CanvasType,
		timeframe: CFCTimeFrame,
		clientId: ClientId,
		canvasTitle: string
	): Promise<CFCStruct[]> {
		return this.database.transaction("r", this.table.name, () => {
			return this.table
				.where({
					canvasType: type,
					canvasTimeFrame: timeframe,
					clientId,
				})
				.or("canvasTitle")
				.equals(canvasTitle)
				.toArray()
		})
	}
}

// Creates a instance of the logic class and exports the instance
const CFCUseCase = new CFCLogic()

export default CFCUseCase
