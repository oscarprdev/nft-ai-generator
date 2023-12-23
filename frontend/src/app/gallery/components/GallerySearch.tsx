import Link from 'next/link';
import SearchInput from './SearchInput';
import { getKeywordsAction } from '@/app/actions/get-keywords.action';

interface GallerySearchProps {
	filter?: string;
}

const GallerySearch = async ({ filter }: GallerySearchProps) => {
	const filterKeyWord = filter || 'all';
	const keywords = await getKeywordsAction();

	return (
		<section className='w-full max-w-[var(--max-width-app)] flex flex-col items-center gap-5 p-2 pb-5 border-b border-b-zinc-200'>
			<ul className='flex flex-wrap items-center justify-center gap-2'>
				{keywords.map((word) => (
					<li
						key={crypto.randomUUID().toString()}
						className={`${
							filterKeyWord === word ? 'text-[var(--contrast)] hover:text-[var(--contrast)] underline' : 'text-zinc-500 hover:text-zinc-800'
						}  hover:underline transition-colors duration-300 w-fit`}>
						<Link
							href={`/gallery/?filter=${word}`}
							className='capitalize'>
							{word}
						</Link>
					</li>
				))}
			</ul>
			<SearchInput />
		</section>
	);
};

export default GallerySearch;
