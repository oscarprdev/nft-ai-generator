import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
import { PUBLIC_R2_URL } from '@/constants';

export async function GET(request: Request) {
	try {
		await sql`CREATE TABLE IF NOT EXISTS Users (
            id UUID PRIMARY KEY,
            Name varchar(255) NOT NULL,
            Email varchar(255) UNIQUE NOT NULL,
            Password varchar(255)
        );`;

		await sql`CREATE TABLE IF NOT EXISTS Art (
            id UUID PRIMARY KEY,
            Url varchar(255) UNIQUE NOT NULL,
            Prompt varchar(255),
            IsNft BOOLEAN DEFAULT FALSE,
            createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            user_id UUID REFERENCES Users(id)
        );`;

		const userId = crypto.randomUUID().toString();

		await sql`INSERT INTO Users (id, Name, Email, Password)
        VALUES (${userId}, 'oscar', 'oprdev@gmail.com', '1234Test');
        `;

		const result = await sql`INSERT INTO Art (id, Url, Prompt, user_id)
        VALUES 
        (${crypto.randomUUID().toString()}, ${`${PUBLIC_R2_URL}/image-1.webp`}, 'Orange astronaut surrounded by flowers', ${userId}),
        (${crypto.randomUUID().toString()}, ${`${PUBLIC_R2_URL}/image-2.webp`}, 'Beautiful woman face with metallic ballons', ${userId}),
        (${crypto.randomUUID().toString()}, ${`${PUBLIC_R2_URL}/image-3.webp`}, 'Minimalist oranged tree in a crystalized lake', ${userId});
        `;

		return NextResponse.json({ result }, { status: 200 });
	} catch (error) {
		console.log(error);
		return NextResponse.json({ error }, { status: 500 });
	}
}
