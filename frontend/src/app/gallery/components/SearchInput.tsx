import SearchIcon from '@/app/components/icons/SearchIcon';

const SearchInput = () => {
	return (
		<label className='relative w-[20vw] min-w-[200px] max-w-[600px]'>
			<input
				type='text'
				placeholder='Search by user, title, collection...'
				className='w-full bg-zinc-100 pl-12 p-3 border-none outline-none rounded-full placeholder:text-zinc-500 font-light'
			/>
			<SearchIcon className='absolute top-[0.78rem] left-4 w-6 text-zinc-400' />
		</label>
	);
};

export default SearchInput;
