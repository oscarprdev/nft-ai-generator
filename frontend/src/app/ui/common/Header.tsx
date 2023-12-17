import Button from './Button';
import Logo from './Logo';

const Header = () => {
	return (
		<header className='w-full flex justify-between px-10 py-4'>
			<Logo />
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
