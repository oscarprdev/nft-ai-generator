export interface GalleryImagesResponse {
	images: GalleryImageItem[];
}

export interface GalleryImageItem {
	id: string;
	url: string;
	title: string;
	prompt: string;
	isnft: boolean;
	likes: string;
	createdat: string;
	user_id: string;
	user_name: string;
}
