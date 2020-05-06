import ILogicLayer from "../_config/logicLayer"
import { ClientDataStruct, BaseClientStruct } from "../_config/shape"
import ClientDB from "./ClientDatabase"

class ClientLogic extends ILogicLayer<ClientDataStruct, BaseClientStruct> {
	constructor() {
		super(ClientDB, ClientDB.clients)
	}
}

const ClientUseCase = new ClientLogic()

export default ClientUseCase
