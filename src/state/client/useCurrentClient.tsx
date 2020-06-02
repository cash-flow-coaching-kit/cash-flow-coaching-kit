import { useContext } from "react"
import ClientContext from "./client-context"
import { ClientDataStruct } from "../../data/_config/shape"

/**
 * A custom hook to easily get the current client data
 *
 * @returns {[ClientDataStruct | undefined, boolean]}
 */
const useCurrentClient = (): [ClientDataStruct | undefined, boolean] => {
	const {
		state: { currentClient, clientSynced },
	} = useContext(ClientContext)

	return [currentClient, clientSynced]
}

export default useCurrentClient
