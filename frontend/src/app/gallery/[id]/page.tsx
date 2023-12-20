import { getImageByIdAction } from '../actions/get-image-by-id.action';

interface GalleryDetail {
	params: {
		id: string;
	};
}

export default async function GalleryDetail({ params: { id } }: GalleryDetail) {
	const image = await getImageByIdAction(id);

	return (
		<main className='flex flex-col items-center w-full'>
			<p>Hello image detail {id}</p>
		</main>
	);
}
