
import { GoogleGenAI } from "@google/genai"
import "dotenv/config" 

const ai = new GoogleGenAI({apiKey: process.env.GEMINI_API_KEY});
console.log(ai)

export const model = "gemini-3.8-flash"
console.log(model)
