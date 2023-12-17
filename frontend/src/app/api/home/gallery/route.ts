import { NextRequest, NextResponse } from 'next/server';
import { galleryInfo } from './data';

export async function GET(request: NextRequest) {
	return NextResponse.json(galleryInfo);
}
