import { sql } from '@vercel/postgres';

async function seed() {
    const createTable =  await sql`
        CREATE TABLE IF NOT EXISTS users (
            id SERIAL PRIMARY KEY,
            name varchar(255) NOT NULL,
            email varchar(255) UNIQUE NOT NULL,
            "createdAt" TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        );
    `;

    console.log('Created "users" table');

    const users = await Promise.all([
        sql`
            INSERT INTO users (name, email) 
            VALUES ('John', 'john@john.com')
            ON CONFLICT (email) DO NOTHING;
        `,
        sql`
            INSERT INTO users (name, email) 
            VALUES ('Jane', 'jane@jane.com')
            ON CONFLICT (email) DO NOTHING;
        `,
        sql`
            INSERT INTO users (name, email) 
            VALUES ('Joe', 'Joe@joe.com')
            ON CONFLICT (email) DO NOTHING;
        `
    ]);

    console.log('Inserted ' + users.length + ' users');

    return {createTable, users};
}

export async function load() {
    try {
        const { rows: users } = await sql`SELECT * FROM users`;
        return {users: users};
    } catch (error) {
        if(error?.message === 'relation "users" does not exist') {
            console.log('Seeding database...');
            await seed();
            const { rows: users } = await sql`SELECT * FROM users`;

            return { users: users};
        } else {
            throw error;
        }
    }
}