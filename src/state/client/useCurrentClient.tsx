import { useContext } from "react"
import ClientContext from "./client-context"
import { ClientDataStruct } from "../../data/_config/shape"

const useCurrentClient = (): [ClientDataStruct | undefined, boolean] => {
	const {
		state: { currentClient, clientSynced },
	} = useContext(ClientContext)

	return [currentClient, clientSynced]
}

export default useCurrentClient
