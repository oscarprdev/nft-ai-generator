import Logo from './Logo';

const Footer = () => {
	return (
		<footer className='flex flex-col gap-5 items-center h-[30vh] pt-10 bg-zinc-900'>
			<Logo light />
			<p className='max-w-[40vw] text-center text-zinc-300'>
				Allow graphic designers to focus on more complex and strategic design tasks while keeping safe their art authority by blockchain
				technology
			</p>
			<p className='text-zinc-500 box-border'>
				2023 Creative.ai. All rights reserved. Site by
				<a
					href='https://github.com/oscarprdev'
					className='underline text-[var(--contrast)] ml-1 hover:font-bold box-border'>
					Oscar Perez
				</a>
			</p>
		</footer>
	);
};

export default Footer;
