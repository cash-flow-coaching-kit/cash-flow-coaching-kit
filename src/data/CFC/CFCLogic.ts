import ILogicLayer from "../_config/logicLayer"
import { CFCStruct, BaseCFCStruct } from "../_config/shape"
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
}

// Creates a instance of the logic class and exports the instance
const CFCUseCase = new CFCLogic()

export default CFCUseCase
