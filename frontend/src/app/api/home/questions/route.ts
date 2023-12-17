import { NextRequest, NextResponse } from 'next/server';
import { questionsInfo } from './data';

export async function GET(request: NextRequest) {
	return NextResponse.json(questionsInfo);
}
