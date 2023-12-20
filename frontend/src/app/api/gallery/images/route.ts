import { NextRequest, NextResponse } from 'next/server';
import { sql } from '@vercel/postgres';

export async function GET(request: NextRequest) {
	try {
		const filter = request.nextUrl.searchParams.get('filter');

		const result = await sql`
		SELECT art.*, users.name as user_name
		FROM art
		JOIN users ON art.user_id = users.id;`;

		return NextResponse.json({ images: result.rows }, { status: 200 });
	} catch (error) {
		console.log(error);
		return NextResponse.json({ error }, { status: 500 });
	}
}