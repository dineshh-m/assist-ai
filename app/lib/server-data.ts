import { GoogleGenerativeAI } from "@google/generative-ai";
import { MODEL_NAME } from "./gen-ai.config";
import { generationConfig, safetySettings } from "./gen-ai.config";
import { Auxilary } from "./definitions";
import { sql } from "@vercel/postgres";
import bcrypt from "bcrypt";

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEN_AI_KEY || "");
const model = genAI.getGenerativeModel({ model: MODEL_NAME});

export async function fetchChatResponseFromModel(history: Auxilary[], message: string): Promise<string> {
    const chat = model.startChat({
        generationConfig,
        safetySettings,
        history,
    });
    const result = await chat.sendMessage(message);
    const res = await result.response;
    const text = res.text();
    return text;
}

async function getConversationName(reply: string): Promise<string> {
    const prompt = `write a three words summary about this text '${reply}'`;
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    return text;
}

export async function createConversation(user_id: string, text: string) {
    const conversationName = await getConversationName(text);
    const insertedRow = await sql`
        INSERT INTO conversations (conversation_name, user_id) 
            VALUES (${conversationName}, ${user_id})
            RETURNING id
        ;
    `;
    const conversation = {
        conversation_id: insertedRow.rows[0].id,
        conversationName: conversationName,
    }
    return conversation;
}

export async function getUser(email: any) {
    const result = await sql`
        SELECT * FROM USERS WHERE user_email=${email};
    `
    if (result.rows.length > 0) {
        const row = result.rows[0];
        const user = {
            id: row.id,
            email: row.user_email,
            password: row.user_password,
        }
        return user;
    }
    return null;
}

export async function createUser({username, email, password}: {username: string, email: string, password: string}) {
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        await sql`
            INSERT INTO users (user_name, user_email, user_password) 
            VALUES(${username}, ${email}, ${hashedPassword})
            ;
        `;
    }catch(error) {
        console.log(error);
        return false;
    }
    return true;
}

export async function getConversationHistory(userId: string) {
    const result = await sql`
        SELECT * FROM conversations 
            WHERE user_id=${userId}; 
    `;
    const history = [];
    for (const row of result.rows) {
        const convo = {
            id: row.id,
            title: row.conversation_name,
        };
        history.push(convo);
    }
    history.reverse();
    return history;
}