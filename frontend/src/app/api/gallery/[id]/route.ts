import { NextRequest, NextResponse } from 'next/server';
import { sql } from '@vercel/postgres';

interface GalleryDetailParams {
	params: {
		id: string;
	};
}

export async function GET(request: NextRequest, { params: { id } }: GalleryDetailParams) {
	try {
		const image = await sql`SELECT * FROM art WHERE art.id = ${id};`;

		return NextResponse.json({ image: image.rows });
	} catch (error) {
		return NextResponse.json({ error }, { status: 500 });
	}
}
