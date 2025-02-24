import { createOpenAI as createGroq } from "@ai-sdk/openai"
import { streamText } from "ai"
import { assistantContext } from "@/constants/assistant-context"

export const runtime = "edge"

const groq = createGroq({
  baseURL: "https://api.groq.com/openai/v1",
  apiKey: process.env.GROQ_API_KEY,
})

export async function POST(req: Request) {
  try {
    const { messages } = await req.json()

    console.log("Received messages:", messages)

    const response = streamText({
      model: groq("mixtral-8x7b-32768"),
      messages: [
        {
          role: "system",
          content: assistantContext,
        },
        ...messages,
      ],
      temperature: 0.3
    })

    console.log("Stream response created")

    return response.toDataStreamResponse()
  } catch (error) {
    console.error("Error in chat API:", error)
    throw error 
  }
}

