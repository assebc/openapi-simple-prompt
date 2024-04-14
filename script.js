import { config } from "dotenv"
import OpenAI from "openai"
import readline from "readline"

config()

const openai = new OpenAI();

const userInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

userInterface.prompt();
userInterface.on("line", async (input) => {
  const res = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: input }],
    temperature: 1
  })
  console.log(res.data.choices[0].message.content);
})
