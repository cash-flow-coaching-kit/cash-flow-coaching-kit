import {
	StandardProps,
	ContainerProps,
	ContainerClassKey,
} from "@material-ui/core"
import { ReactNode } from "react"

/**
 * Prop structure for the `<PageContainer>` component
 *
 * @interface IPageContainer
 * @extends {StandardProps<ContainerProps, ContainerClassKey>}
 */
export interface IPageContainer
	extends StandardProps<ContainerProps, ContainerClassKey> {
	children: ReactNode
}
