import assert from "node:assert";
import { getEncoding, encodingForModel } from "js-tiktoken";
import OpenAI from "openai";
import { dot, norm } from "mathjs";
import { model } from "../config";

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });


export function cleanNullBytes(str) {
    return str.replace(/\u0000/g, '');
}

export function countTokens(messages, model = "gpt-4o-mini") { // {role, content} = messages
    const encoding = encodingForModel(model)
    let totalTokens = 0;
    console.log("Counting tokens for model: ", model)
    // you know that there are different cost for output and input right?
    // assistant role is output
    // user is input
    // how to differentiate
    for (const msg of messages) {
        // console.log(msg)
        // console.log(msg)
        totalTokens += encoding.encode(msg.content).length;
        // assert(encoding.decode(encoding.encode(msg.content)) === msg.content);
    }
    return totalTokens;
}

export function calculateCost(inputTokens = 0, outputTokens = 0, model = "gpt-4o-mini") {
    const pricing = {
        "gpt-4o-mini": { input: 0.15, output: 0.60 },
        "gpt-4o": { input: 2.50, output: 10.00 },
        "o3-mini": { input: 1.10, output: 4.40 },
        "o4-mini-2025-04-16": { input: 1.10, output: 4.40 }
    };
    if (!pricing[model]) throw new Error("Model pricing not available");
    const inputCost = (inputTokens / 1_000_000) * pricing[model].input;
    const outputCost = (outputTokens / 1_000_000) * pricing[model].output;
    return (inputCost + outputCost).toFixed(8);
}

export async function getEmbedding(text) {
    const response = await client.embeddings.create({
        model: "text-embedding-3-small",
        input: text,
    });
    return response.data[0].embedding;
}

export function cosineSimilarity(a, b) {
    const dotProduct = dot(a, b);
    return dotProduct / (norm(a) * norm(b));
}