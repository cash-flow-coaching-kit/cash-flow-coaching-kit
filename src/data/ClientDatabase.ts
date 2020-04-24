import Dexie from "dexie"

export interface IClient {
	id?: number
	name: string
}

class ClientDatabase extends Dexie {
	clients!: Dexie.Table<IClient, number>

	constructor() {
		super("ClientDatabase")
		this.version(1).stores({
			clients: "++id,name",
		})

		this.clients = this.table("clients")
	}
}

const ClientDB = new ClientDatabase()

export default ClientDB
