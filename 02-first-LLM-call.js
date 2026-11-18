import { ai, model } from './01-sdk-client.js'

async function main() {
    try {
        const prompt = "Explain js closures in easy"
        const respone = await ai.models.generateContent({model, contents: prompt})
        console.log(respone.text)
    } catch (error) {
        console.log(error)
    }
}
main()