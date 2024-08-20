import { OpenAI } from "langchain/llms/openai";

export const analyse = async (prompt) => {
  const model = new OpenAI({
    temperature: 0,
    modelName: "gpt-3.5-turbo",
    apiKey: process.env.OPENAI_API_KEY,
  });
  const res = await model.call(prompt);
  console.log(res);
};
