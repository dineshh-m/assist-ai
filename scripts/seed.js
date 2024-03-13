const { db } = require("@vercel/postgres");
const { hash } = require("bcrypt");

async function seedUsersTable(client) {
  await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  const createTable = await client.sql`
        CREATE TABLE IF NOT EXISTS users (
            id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
            user_name VARCHAR(100) NOT NULL,
            user_email TEXT NOT NULL UNIQUE,
            user_password TEXT NOT NULL
        );
    `;

    const hashedPassword = await hash("dinesh@assistai", 10);
    const insertedUsers = await client.sql`
    INSERT INTO users (user_name, user_email, user_password) 
    VALUES ('Dinesh', 'dineshmoorthy@assistai.com', ${hashedPassword})
    `;

    return {
        createTable,
        insertedUsers,
    };
}

async function seedConversationsTable(client) {
  await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  const createTable = await client.sql`
        CREATE TABLE IF NOT EXISTS conversations (
            id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
            conversation_name TEXT NOT NULL,
            user_id UUID,
            FOREIGN KEY(user_id) REFERENCES users(id)
        );
    `;
    return {
      createTable,
    };
}

async function seedMessagesTable(client) {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    const createTable = await client.sql`
        CREATE TABLE IF NOT EXISTS messages (
            id SERIAL PRIMARY KEY,
            conversation_id UUID NOT NULL,
            role VARCHAR(5) NOT NULL,
            message TEXT NOT NULL,
            generated_timestamp TIMESTAMP NOT NULL
        );
    `;
    return {
        createTable
    };
}

async function main() {
    const client = await db.connect();

    await seedUsersTable(client);
    await seedConversationsTable(client);
    await seedMessagesTable(client);

    await client.end();
}

main().catch( error => {
    console.error('An error occured while attempting to seed the database', error);
});