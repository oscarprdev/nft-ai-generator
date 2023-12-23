import { NextRequest, NextResponse } from 'next/server';
import { keywords } from './data';

export async function GET(request: NextRequest) {
	return NextResponse.json(keywords);
}
