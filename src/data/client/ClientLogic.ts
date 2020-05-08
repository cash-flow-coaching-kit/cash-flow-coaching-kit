import ILogicLayer from "../_config/logicLayer"
import { ClientDataStruct, BaseClientStruct } from "../_config/shape"
import ClientDB from "./ClientDatabase"

/**
 * Logic implementation for the Client Database
 *
 * @class ClientLogic
 * @extends {ILogicLayer<ClientDataStruct, BaseClientStruct>}
 */
class ClientLogic extends ILogicLayer<ClientDataStruct, BaseClientStruct> {
	/**
	 * Creates an instance of ClientLogic.
	 *
	 * @memberof ClientLogic
	 */
	constructor() {
		super(ClientDB, ClientDB.clients)
	}
}

// Creates a instance of the logic class and exports the instance
const ClientUseCase = new ClientLogic()

export default ClientUseCase
