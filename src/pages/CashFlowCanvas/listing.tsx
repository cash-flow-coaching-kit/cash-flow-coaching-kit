import React, { ReactElement, useCallback, useState, useEffect } from "react"
import { Typography, Grid, Card, CardContent } from "@material-ui/core"
import { useMachine } from "@xstate/react"
import { PageContainer } from "../../components/Layouts"
import SectionTitle from "../../components/SectionTitle"
import fetchMachine from "../../components/Forms/CFC/__config/machine"
import useCurrentClient from "../../state/client/useCurrentClient"
import CFCUseCase from "../../data/CFC/CFCLogic"
import { CFCStruct, CFCId } from "../../data/_config/shape"
import CanvasList from "../../components/CFC/CanvasList"
import Loading from "../../components/Loading"
import NoCanvases from "../../components/CFC/NoCanvases"
import filterById from "../../util/filters/ById"

const CFCListing = (): ReactElement => {
	const [stateMachine, changeState] = useMachine(fetchMachine)
	const [currentClient] = useCurrentClient()
	const [canvasData, setCanvasData] = useState<CFCStruct[]>([])
	const fetchData = useCallback(async () => {
		if (currentClient?.id) {
			try {
				const data = await CFCUseCase.findByClient(currentClient.id)
				if (data.length === 0) {
					changeState("REJECT")
					return
				}

				setCanvasData(data)
				changeState("RESOLVE")
			} catch {
				changeState("REJECT")
			}
		}
	}, [currentClient, changeState])

	useEffect(() => {
		fetchData()
	}, [fetchData])

	async function removeCanvas(id: CFCId): Promise<void> {
		const newData = canvasData.filter(filterById(id, true))
		setCanvasData(newData)
		if (newData.length === 0) {
			changeState("REJECT")
		}
		await CFCUseCase.delete(id)
	}

	function renderBasedOnState(): ReactElement {
		switch (stateMachine.value) {
			case "failure":
				return (
					<CardContent>
						<NoCanvases />
					</CardContent>
				)
			case "success":
				return <CanvasList data={canvasData} remove={removeCanvas} />
			case "loading":
			default:
				return <Loading />
		}
	}

	return (
		<>
			<PageContainer>
				<SectionTitle>
					Previously saved canvases{" "}
					<Typography variant="subtitle1" component="p" color="textSecondary">
						Load previous canvas by selecting the list below
					</Typography>
				</SectionTitle>

				<Grid container spacing={2}>
					<Grid item sm={6}>
						<Card>{renderBasedOnState()}</Card>
					</Grid>
				</Grid>
			</PageContainer>
		</>
	)
}

export default CFCListing
