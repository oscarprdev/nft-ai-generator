import { NextRequest, NextResponse } from 'next/server';
import { sql } from '@vercel/postgres';

export async function GET(request: NextRequest) {
	try {
		const filter = request.nextUrl.searchParams.get('filter');
		let result;

		if (filter === 'all') {
			result = await sql`
				SELECT art.*, users.name as user_name
				FROM art
				JOIN users ON art.user_id = users.id
				;`;
		} else {
			result = await sql`
				SELECT art.*, users.name as user_name
				FROM art
				JOIN users ON art.user_id = users.id
				WHERE ${filter} = ANY(keywords);
				;`;
		}

		return NextResponse.json({ images: result.rows }, { status: 200 });
	} catch (error) {
		return NextResponse.json({ error }, { status: 500 });
	}
}
