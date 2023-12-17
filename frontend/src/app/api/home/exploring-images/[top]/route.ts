import { NextRequest, NextResponse } from 'next/server';
import { TopImagesInfo } from './types';
import { topImagesInfo } from './data';

interface PurchasingParams {
	params: {
		top: keyof TopImagesInfo;
	};
}

export async function GET(request: NextRequest, { params: { top } }: PurchasingParams) {
	const response = topImagesInfo[top];

	return NextResponse.json(response);
}
