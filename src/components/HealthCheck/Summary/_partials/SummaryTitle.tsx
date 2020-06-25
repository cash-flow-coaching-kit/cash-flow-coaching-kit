import React, { ReactElement } from "react"
import { Typography } from "@material-ui/core"
import { format } from "date-fns"
import { ISummaryTitleProps } from "../_config/shape"

/**
 * Title to display at the top of the summary page
 *
 * @param {number} {createdAt}
 * @returns ReactElement
 */
const SummaryTitle = ({ createdAt }: ISummaryTitleProps): ReactElement => {
	return (
		<>
			<Typography variant="h5" align="center" component="h1">
				Your results{" "}
				{createdAt ? `on the ${format(createdAt, "do 'of' MMMM yyyy")}` : false}
			</Typography>
			<Typography align="center">
				Learn more about topics covered in the Health Check to improve your
				business.
			</Typography>
		</>
	)
}

export default SummaryTitle
