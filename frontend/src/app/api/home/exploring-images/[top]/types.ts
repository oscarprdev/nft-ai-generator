export interface TopImagesInfo {
	month: TopImagesItem[];
	week: TopImagesItem[];
	day: TopImagesItem[];
}

export interface TopImagesItem {
	image: string;
	prompt: string;
	alt: string;
}
