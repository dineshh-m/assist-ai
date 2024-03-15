import { sql } from "@vercel/postgres";
import { type NextRequest } from "next/server";

export async function GET(request: NextRequest, { params }: { params: { user_id: string }}) {
    const userId = params.user_id;
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
    return Response.json({ history });
}