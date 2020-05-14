/* eslint-disable import/prefer-default-export */
import { FormItem } from "./shape"

export function createNewFormItem(): FormItem {
	return {
		description: "",
		reviewBy: new Date(),
	}
}
