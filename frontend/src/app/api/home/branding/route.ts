import { NextRequest, NextResponse } from 'next/server';
import { brandingImages } from './data';

export async function GET(request: NextRequest) {
	return NextResponse.json(brandingImages);
}
