import Button from './Button';

const Header = () => {
	return (
		<header className='w-full flex justify-between px-10 py-4'>
			<div className='flex items-center gap-1'>
				<h1 className='text-2xl'>Creative</h1>
				<span className='bg-[var(--contrast)] w-2 h-2 rounded-full' />
				<h1 className='text-2xl'>ai</h1>
			</div>

			<div className='flex items-center gap-3'>
				<Button
					primary
					content='Sign Up'
				/>
				<Button
					secondary
					content='Login'
				/>
			</div>
		</header>
	);
};

export default Header;
