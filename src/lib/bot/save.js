import { calculateCost, cleanNullBytes, countTokens, getEmbedding } from "./utils";
import { prisma } from "@/lib/prisma";


export async function saveChat(role, content, config = { scope: -1, userId: -1, chatType, model: "gpt-4o-mini", metadata: null }, parent = null, chained = null) {
    // console.log(content.pesan)
    // console.log(userId)
    // console.log(config)
    const embedding = await getEmbedding(content.pesan, config.model);
    const tokenCount = countTokens(content.messages || [{ content: content.pesan, role }]);
    const cost = role === "user"
        ? calculateCost(tokenCount, 0)
        : calculateCost(0, tokenCount);
    const chatType = config.chatType;
    parent = parent;
    let data = {
        role,
        content: cleanNullBytes(content.pesan),
        embedding,
        token: tokenCount,
        cost: cost,
        user_id: config.userId,
        session_id: config.scope,
        type: chatType,
        parent,
        tools: content.tools,
        status: role === "assistant" ? "success" : "failed",
        metadata: config?.metadata || null
    };

    if (role === "assistant") {
        await prisma.chatHistory.update({
            where: {
                id: parent,
            },
            data: {
                status: "success",
            },
        });
    }

    if (chained) {
        data = {
            ...data,
            data: chained
        }
    }
    const create_chat = prisma.chatHistory.create({
        data: data,
    });


    await prisma.sessionChat.update({
        where: {
            uuid: config.scope,
        },
        data: {
            updated_at: new Date(),
        },
    });

    return create_chat;
}