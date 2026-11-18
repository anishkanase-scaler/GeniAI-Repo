
import { GoogleGenAI } from "@google/genai"
import "dotenv/config" 

export const ai = new GoogleGenAI({apiKey: process.env.GEMINI_API_KEY});
console.log(ai)

export const model = "gemini-3.1-flash-lite"
console.log(model)
