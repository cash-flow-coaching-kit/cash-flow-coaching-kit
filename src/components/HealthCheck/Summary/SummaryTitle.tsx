import React, { ReactElement } from "react"
import { Typography } from "@material-ui/core"
import { format } from "date-fns"

/**
 * Prop structure for the `<SummaryTitle>` component
 *
 * @interface ISummaryTitleProps
 */
interface ISummaryTitleProps {
	createdAt?: number
}

/**
 * Title to display at the top of the summary page
 *
 * @param {number} {createdAt}
 * @returns ReactElement
 */
const SummaryTitle = ({ createdAt }: ISummaryTitleProps): ReactElement => {
	return (
		<Typography variant="h5" align="center">
			Your health check results{" "}
			{createdAt ? `on the ${format(createdAt, "do 'of' MMMM yyyy")}` : false}
		</Typography>
	)
}

export default SummaryTitle
