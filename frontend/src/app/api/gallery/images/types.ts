export interface GalleryImagesResponse {
	images: GalleryImageItem[];
}

interface GalleryImageItem {
	id: string;
	url: string;
	prompt: string;
	isnft: boolean;
	createdat: string;
	user_id: string;
	user_name: string;
}
