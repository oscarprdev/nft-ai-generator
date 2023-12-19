import Link from 'next/link';

interface AppHeaderProps {
	pathname: string;
}

const routes = [
	{
		path: '/gallery',
		text: 'gallery',
	},
	{
		path: '/craft',
		text: 'craft',
	},
	{
		path: '/profile',
		text: 'profile',
	},
];

const AppHeader = ({ pathname }: AppHeaderProps) => {
	return (
		<ul className='flex items-center px-5 py-2 gap-5'>
			{routes.map((route) => (
				<li
					className='text-xl'
					key={crypto.randomUUID().toString()}>
					<Link
						href={route.path}
						className={`${
							pathname === route.path && 'underline text-[var(--contrast)]'
						} capitalize hover:text-[var(--contrast)] transition-colors duration-300`}>
						{route.text}
					</Link>
				</li>
			))}
		</ul>
	);
};

export default AppHeader;
