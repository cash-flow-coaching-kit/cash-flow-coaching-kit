import { useState, useEffect } from "react"
import Dexie from "dexie"

function useIndexedDB<RT>(
	db: Dexie,
	table: Dexie.Table<RT, number>,
	initial: RT[]
): [RT[], () => Promise<RT[]>] {
	const [data, setData] = useState<RT[]>(initial)
	const retrive = async (): Promise<RT[]> => {
		return db.transaction("r", table, async () => {
			const dbData = await table.toArray()
			setData(dbData)

			return dbData
		})
	}

	useEffect(() => {
		// eslint-disable-next-line func-names
		;(async function (): Promise<void> {
			await retrive()
		})()
	}, [])

	return [data, retrive]
}

export default useIndexedDB
