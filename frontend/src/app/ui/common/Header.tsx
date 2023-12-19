import Logo from './Logo';
import ButtonLink from './ButtonLink';

const Header = () => {
	return (
		<header className='w-full flex justify-between px-10 py-4'>
			<Logo />
			<div className='flex items-center gap-3'>
				<ButtonLink
					href={'?modal=signup'}
					primary
					content='Sign Up'
				/>
				<ButtonLink
					href={'?modal=login'}
					secondary
					content='Login'
				/>
			</div>
		</header>
	);
};

export default Header;
