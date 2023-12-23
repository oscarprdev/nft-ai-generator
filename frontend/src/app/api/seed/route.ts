import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
import { PUBLIC_R2_URL } from '@/constants';

export async function GET(request: Request) {
	try {
		const userId = crypto.randomUUID().toString();

		await sql`INSERT INTO users (id, name, email, password)
		    VALUES (${userId}, 'oscar', 'oprdev@gmail.com', '1234Test');
		    `;

		const result = await Promise.all([
			sql`
		            INSERT INTO art (id, url, title, prompt, keywords, user_id)
		            VALUES (
		                    ${crypto.randomUUID().toString()},
		                    ${`${PUBLIC_R2_URL}/image-1.webp`},
							'Oranged astronaut',
		                    'Orange astronaut surrounded by flowers',
							ARRAY['abstract', 'fantasy', 'surreal'],
		                    ${userId}
		                );
		            `,
			sql`
		            INSERT INTO art (id, url, title, prompt, keywords, user_id)
		            VALUES (
		                    ${crypto.randomUUID().toString()},
		                    ${`${PUBLIC_R2_URL}/image-2.webp`},
							'Futuristic woman',
		                    'Beautiful woman face with metallic ballons',
							ARRAY['cyberpunk', 'galactic', 'nature'],
		                    ${userId}
		                );
		            `,
			sql`
		            INSERT INTO art (id, url, title, prompt, keywords, user_id)
		            VALUES (
		                    ${crypto.randomUUID().toString()},
		                    ${`${PUBLIC_R2_URL}/image-3.webp`},
							'Tree lake',
		                    'Minimalist oranged tree in a crystalized lake',
							ARRAY['dream', 'futuristic', 'neon'],
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
