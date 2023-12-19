'use client';

import Logo from '../Logo';
import HomeHeader from './HomeHeader';
import { usePathname } from 'next/navigation';
import AppHeader from './AppHeader';

const Header = () => {
	const pathname = usePathname();

	return (
		<header className='w-full flex justify-between px-10 py-4'>
			<Logo />
			{pathname !== '/' && <AppHeader pathname={pathname} />}
			{pathname === '/' && <HomeHeader />}
		</header>
	);
};

export default Header;
