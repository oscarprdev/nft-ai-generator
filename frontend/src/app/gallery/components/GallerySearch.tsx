import Link from 'next/link';

const keywords = [
	'all',
	'abstract',
	'fantasy',
	'surreal',
	'cyberpunk',
	'galactic',
	'nature',
	'dream',
	'futuristic',
	'neon',
	'steampunk',
	'cosmic',
	'minimalist',
	'mythical',
	'ethereal',
	'urban',
	'dystopian',
	'whimsical',
	'organic',
	'vibrant',
	'elemental',
];

interface GallerySearchProps {
	filter?: string;
}

const GallerySearch = ({ filter }: GallerySearchProps) => {
	const filterKeyWord = filter || 'all';

	return (
		<section className='w-full max-w-[var(--max-width-app)] grid place-items-center p-2 pb-3 border-b border-b-zinc-200'>
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
		</section>
	);
};

export default GallerySearch;
