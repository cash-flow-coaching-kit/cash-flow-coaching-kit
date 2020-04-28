import Dexie from "dexie"
import { IBaseClient } from "../../state/client/client-outline"

class ClientDatabase extends Dexie {
	clients!: Dexie.Table<IBaseClient, number>

	constructor() {
		super("ClientDatabase")
		this.version(1.1).stores({
			clients: "++id,name",
		})

		this.clients = this.table("clients")
	}
}

const ClientDB = new ClientDatabase()

export default ClientDB
