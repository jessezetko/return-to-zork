import { ChatGoogleGenerativeAI } from '@langchain/google-genai'
import { BaseChatModel } from '@langchain/core/language_models/chat_models'

import { GEMINI_API_KEY, GEMINI_MODEL } from '@src/env.js'

let llmClient: BaseChatModel | null = null

export async function fetchLLMClient(): Promise<BaseChatModel> {
  if (!llmClient) llmClient = createLLMClient()
  return llmClient
}

function createLLMClient(): BaseChatModel {
  if (!GEMINI_API_KEY) throw new Error('GEMINI_API_KEY environment variable is required')

  return new ChatGoogleGenerativeAI({
    model: GEMINI_MODEL,
    apiKey: GEMINI_API_KEY
  })
}
