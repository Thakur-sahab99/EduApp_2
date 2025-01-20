import { Configuration, OpenAIApi } from "openai-edge"
import { OpenAIStream, StreamingTextResponse } from "ai"

const config = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
})
const openai = new OpenAIApi(config)

export const runtime = "edge"

export async function POST(req: Request) {
  try {
    const { messages } = await req.json()

    const response = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      stream: true,
      messages: [
        {
          role: "system",
          content: `You are EduBot, a helpful AI assistant for an online education platform. 
          You help students with their questions about courses, provide study tips, and offer general academic advice.
          Keep your responses concise, friendly, and focused on education-related topics.
          If asked about topics outside of education, politely redirect the conversation back to learning and academic subjects.`,
        },
        ...messages,
      ],
      temperature: 0.7,
      max_tokens: 500,
    })

    const stream = OpenAIStream(response)
    return new StreamingTextResponse(stream)
  } catch (error) {
    return new Response(JSON.stringify({ error: "An error occurred while processing your request" }), { status: 500 })
  }
}

