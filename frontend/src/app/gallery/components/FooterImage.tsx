import Link from 'next/link';
import { ReactNode } from 'react';

interface FooterImageProps {
	children: ReactNode;
	userName: string;
	title: string;
}

const FooterImage = ({ children, userName, title }: FooterImageProps) => {
	return (
		<footer className='flex items-center justify-between w-full'>
			<div className='flex flex-col w-[45%]'>
				<span className='flex items-center'>
					<p className='text-sm  truncate capitalize'>{title}</p>
				</span>
				<Link
					href={`/profile/${userName}`}
					className='text-md text-zinc-500'>
					<p className='capitalize hover:text-[var(--contrast)] hover:underline transition-colors duration-300 truncate'>
						<span className='text-sm'>@</span>
						{userName}
					</p>
				</Link>
			</div>
			{children}
		</footer>
	);
};

export default FooterImage;
