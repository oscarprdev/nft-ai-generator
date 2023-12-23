import { NextRequest, NextResponse } from 'next/server';
import { sql } from '@vercel/postgres';

export async function GET(request: NextRequest) {
	try {
		const filter = request.nextUrl.searchParams.get('filter')?.toString();
		let result;

		if (filter === 'all') {
			result = await sql`
				SELECT art.*, users.name AS user_name, COUNT(art_likes.id) AS likes
				FROM art
				JOIN users ON art.user_id = users.id
				LEFT JOIN art_likes ON art.id = art_likes.art_id
				GROUP BY art.id, users.name;`;
		} else {
			result = await sql`
			SELECT art.*, users.name AS user_name, COUNT(art_likes.id) AS likes
			FROM art
			JOIN users ON art.user_id = users.id
			LEFT JOIN art_likes ON art.id = art_likes.art_id
			WHERE 
				(${filter} = ANY(keywords) OR
				LOWER(art.title) LIKE LOWER('%' || ${filter} || '%') OR
				LOWER(users.name) LIKE LOWER('%' || ${filter} || '%'))
			GROUP BY art.id, users.name;`;
		}

		return NextResponse.json({ images: result.rows }, { status: 200 });
	} catch (error) {
		console.log(error);
		return NextResponse.json({ error }, { status: 500 });
	}
}
