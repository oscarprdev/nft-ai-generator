import GalleryImages from './components/GalleryImages';
import GallerySearch from './components/GallerySearch';

interface GalleryProps {
	searchParams: {
		filter?: string;
	};
}

export default async function Gallery({ searchParams: { filter } }: GalleryProps) {
	return (
		<main className='flex flex-col items-center w-full'>
			<GallerySearch filter={filter} />
			<GalleryImages filter={filter} />
		</main>
	);
}
