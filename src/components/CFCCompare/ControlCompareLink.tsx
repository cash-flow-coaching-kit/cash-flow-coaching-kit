import React, { ReactElement, useState, useCallback, useEffect } from "react"
import CompareArrowsIcon from "@material-ui/icons/CompareArrows"
import { useHistory, useParams } from "react-router-dom"
import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core"
import { PrivateRoutes } from "../../util/routes/routes"
import useCurrentClient from "../../state/client/useCurrentClient"
import CFCUseCase from "../../data/CFC/CFCLogic"

export default function ControlCompareLink(): ReactElement {
	const history = useHistory()
	const [count, setCount] = useState(0)
	const { id } = useParams() as any  // eslint-disable-line
	const [currentClient, clientSynced] = useCurrentClient()
	const getCount = useCallback(async () => {
		if (currentClient?.id) {
			const c = await CFCUseCase.countClientRecords(currentClient.id)
			setCount(c)
		}
	}, [currentClient, setCount])

	useEffect(() => {
		if (clientSynced) {
			getCount()
		}
	}, [clientSynced, getCount, id])

	const goTo = (route: PrivateRoutes) => (): void => {
		// eslint-disable-next-line
		history.push(route)
	}

	if (count < 2) {
		return <></>
	}

	return (
		<ListItem button onClick={goTo(PrivateRoutes.CFCCompare)}>
			<ListItemIcon>
				<CompareArrowsIcon />
			</ListItemIcon>
			<ListItemText>Compare Canvasses</ListItemText>
		</ListItem>
	)
}
