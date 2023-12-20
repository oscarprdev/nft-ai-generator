import { NextRequest, NextResponse } from 'next/server';
import { sql } from '@vercel/postgres';

export async function GET(request: NextRequest) {
	try {
		const result = await sql`
		SELECT art.*, users.name as user_name
		FROM art
		JOIN users ON art.user_id = users.id
		WHERE art.user_id = 'c8775019-b9ef-46d5-a60f-bd6c0275caa6';`;

		return NextResponse.json({ images: result.rows }, { status: 200 });
	} catch (error) {
		return NextResponse.json({ error }, { status: 500 });
	}
}
