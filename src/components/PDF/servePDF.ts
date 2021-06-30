import pdfMake from "pdfmake/build/pdfmake"
import { detect } from "detect-browser"

export default function servePDF(pdf: pdfMake.TCreatedPdf): void {
	const browser = detect()
	if (browser?.name === "ie" || browser?.name === "edge") {
		pdf.download()
		return
	}

	pdf.open()
}
