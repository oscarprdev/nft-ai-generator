export interface Purchasing {
	free: PurchasingInfo;
	standard: PurchasingInfo;
	pro: PurchasingInfo;
}

interface PurchasingItem {
	ok: boolean;
	text: string;
}

export interface PurchasingInfo {
	title: PurchasingItem;
	pricing: PurchasingItem;
	initial: PurchasingItem;
	credits: PurchasingItem;
	access: PurchasingItem;
	prompts: PurchasingItem;
	creation: PurchasingItem;
	sell: PurchasingItem;
}
