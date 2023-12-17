interface LogoProps {
	light?: boolean;
}

const Logo = ({ light }: LogoProps) => {
	return (
		<div className={`flex items-center gap-1 ${light && 'text-zinc-200'}`}>
			<h1 className='text-2xl'>Creative</h1>
			<span className='bg-[var(--contrast)] w-2 h-2 rounded-full' />
			<h1 className='text-2xl'>ai</h1>
		</div>
	);
};

export default Logo;
