import { ClientId } from "../../data/_config/shape"

const storageKey = "currentClientId"
export const emptyClientValue = ""

export function setStorageClient(id: ClientId): void {
	window.localStorage.setItem(storageKey, `${id}`)
}

export function getStorageClient(): ClientId | undefined {
	const id = window.localStorage.getItem(storageKey)
	if (id) {
		return id
	}

	return undefined
}

export function removeStorageClient(): void {
	window.localStorage.removeItem(storageKey)
}
