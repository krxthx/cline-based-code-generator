import { buildApiHandler } from "../../api"
import { ApiConfiguration } from "../../shared/api"
import { HaiBuildDefaults } from "../../shared/haiDefaults"
import { getApiStreamResponse } from "../code-prep/helper"
import * as vscode from "vscode"

const MAX_ATTEMPTS = 3

export async function generateConventions(apiConfiguration: ApiConfiguration) {
    const llmApi = buildApiHandler(apiConfiguration)

    for (let attempt = 1; attempt <= MAX_ATTEMPTS; attempt++) {
        try {
            const apiStream = llmApi.createMessage(HaiBuildDefaults.defaultGenerateConventionsSystemPrompt, [
                {
                    role: "user",
                    content: HaiBuildDefaults.defaultGenerateConventionsUserPrompt
                }
            ])
            const res = await getApiStreamResponse(apiStream)
            console.log("Generated coding conventions successfully")
            return res
        } catch (err) {
            console.log("Error generating conventions:", err)
            if (attempt >= MAX_ATTEMPTS) {
                vscode.window.showErrorMessage(`Failed to generate conventions. ${err}`)
            }
        }
    }
    return []
}