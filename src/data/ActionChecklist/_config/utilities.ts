import Dexie from "dexie"
import { PossibleActionItems } from "../../../state/action-checklist/shape"
import { DatabaseId } from "../../_config/shape"

// eslint-disable-next-line import/prefer-default-export
export const findByContainer = <T>(
	container: PossibleActionItems,
	db: Dexie,
	table: Dexie.Table<T, DatabaseId>
): Promise<T[]> => {
	return db.transaction("r", table, () => {
		return table.where("actionContainer").equals(container).toArray()
	})
}
