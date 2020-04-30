import React, { ReactElement } from "react"
import { Typography } from "@material-ui/core"
import { format } from "date-fns"

interface ISummaryTitleProps {
	createdAt?: number
}

const SummaryTitle = ({ createdAt }: ISummaryTitleProps): ReactElement => {
	return (
		<Typography variant="h5" align="center">
			Your health check results{" "}
			{createdAt ? `on the ${format(createdAt, "do 'of' MMMM yyyy")}` : false}
		</Typography>
	)
}

export default SummaryTitle
