import { NextRequest, NextResponse } from 'next/server';
import { sql } from '@vercel/postgres';
import { UploadImageInput } from './types';

export async function POST(request: NextRequest) {
	try {
		const { url, prompt, title, keywords }: UploadImageInput = await request.json();

		const result = await sql`INSERT INTO art (id, url, title, prompt, keywords, user_id)
		        VALUES (
		            ${crypto.randomUUID().toString()},
		            ${url},
		            ${title},
		            ${prompt},
		            ARRAY[${keywords}],
		            '260fb5e0-619e-410a-af31-672d30fe54bf'
		    );`;

		return NextResponse.json({ ok: true }, { status: 200 });
	} catch (error) {
		console.log(error);
		return NextResponse.json({ error }, { status: 500 });
	}
}
