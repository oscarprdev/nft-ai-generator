import { Suspense } from 'react';
import GalleryImages from './components/GalleryImages';
import GallerySearch from './components/GallerySearch';
import GalleryImagesSkeleton from './components/GalleryImagesSkeleton';

interface GalleryProps {
	searchParams: {
		filter?: string;
	};
}

export default async function Gallery({ searchParams: { filter } }: GalleryProps) {
	return (
		<main className='flex flex-col items-center w-full'>
			<GallerySearch filter={filter} />
			<Suspense fallback={<GalleryImagesSkeleton />}>
				<GalleryImages filter={filter} />
			</Suspense>
		</main>
	);
}
