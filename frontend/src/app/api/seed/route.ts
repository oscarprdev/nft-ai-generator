import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
import { PUBLIC_R2_URL } from '@/constants';

export async function GET(request: Request) {
	try {
		await sql`CREATE TABLE users (
		    id UUID PRIMARY KEY,
		    name varchar(255) NOT NULL,
		    email varchar(255) UNIQUE NOT NULL,
		    password varchar(255) NOT NULL
		);`;
		await sql`CREATE TABLE art (
		    id UUID PRIMARY KEY,
		    url varchar(255) UNIQUE NOT NULL,
		    prompt varchar(255) NOT NULL,
		    isNft BOOLEAN DEFAULT FALSE,
		    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
		    user_id UUID REFERENCES users(id)
		);`;

		const userId = crypto.randomUUID().toString();

		await sql`INSERT INTO users (id, name, email, password)
		    VALUES (${userId}, 'oscar', 'oprdev@gmail.com', '1234Test');
		    `;

		const result = await Promise.all([
			sql`
		            INSERT INTO art (id, url, prompt, user_id)
		            VALUES (
		                    ${crypto.randomUUID().toString()},
		                    ${`${PUBLIC_R2_URL}/image-1.webp`},
		                    'Orange astronaut surrounded by flowers',
		                    ${userId}
		                );
		            `,
			sql`
		            INSERT INTO art (id, url, prompt, user_id)
		            VALUES (
		                    ${crypto.randomUUID().toString()},
		                    ${`${PUBLIC_R2_URL}/image-2.webp`},
		                    'Beautiful woman face with metallic ballons',
		                    ${userId}
		                );
		            `,
			sql`
		            INSERT INTO art (id, url, prompt, user_id)
		            VALUES (
		                    ${crypto.randomUUID().toString()},
		                    ${`${PUBLIC_R2_URL}/image-3.webp`},
		                    'Minimalist oranged tree in a crystalized lake',
		                    ${userId}
		                );
		            `,
		]);

		return NextResponse.json({ result }, { status: 200 });
	} catch (error) {
		console.log(error);
		return NextResponse.json({ error }, { status: 500 });
	}
}
