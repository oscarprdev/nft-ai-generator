'use client';

import SearchIcon from '@/app/components/icons/SearchIcon';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { ChangeEvent } from 'react';
import { useDebouncedCallback } from 'use-debounce';

const DEBOUNCE_TIMEOUT = 500;

const SearchInput = () => {
	const pathname = usePathname();
	const { replace } = useRouter();

	const handleInput = useDebouncedCallback((e: ChangeEvent<HTMLInputElement>) => {
		const input = e.target.value;

		replace(`${pathname}?filter=${input}`);
	}, DEBOUNCE_TIMEOUT);

	return (
		<label className='relative w-[20vw] min-w-[200px] max-w-[600px]'>
			<input
				onChange={handleInput}
				type='text'
				placeholder='Search by user, title, collection...'
				className='w-full bg-zinc-100 pl-12 p-3 border-none outline-none rounded-full placeholder:text-zinc-500 font-light'
			/>
			<SearchIcon className='absolute top-[0.78rem] left-4 w-6 text-zinc-400' />
		</label>
	);
};

export default SearchInput;
