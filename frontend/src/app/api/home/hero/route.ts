import { NextRequest, NextResponse } from 'next/server';
import { heroImagesData } from './data';

export async function GET(request: NextRequest) {
	return NextResponse.json(heroImagesData);
}
