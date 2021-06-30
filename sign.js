exports.default = async function (configuration) {
	// do not include passwords or other sensitive data in the file
	// rather create environment variables with sensitive data
	const CERTIFICATE_NAME = process.env.WIN_CSC_LINK
	const TOKEN_PASSWORD = process.env.WIN_CSC_KEY_PASSWORD

	require("child_process").execSync(
		`your command here ${CERTIFICATE_NAME} ${TOKEN_PASSWORD}`,
		{
			stdio: "inherit",
		}
	)
}
