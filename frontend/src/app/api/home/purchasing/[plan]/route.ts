import { NextRequest, NextResponse } from 'next/server';
import { purchasingInfo } from './data';
import { Purchasing } from './types';

interface PurchasingParams {
	params: {
		plan: keyof Purchasing;
	};
}

export async function GET(request: NextRequest, { params }: PurchasingParams) {
	const plan = params.plan;

	return NextResponse.json(purchasingInfo[plan]);
}
