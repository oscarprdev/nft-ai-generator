import Link from 'next/link';

interface ButtonLinkProps {
	href: string;
	content: string;
	primary?: boolean;
	secondary?: boolean;
	tertiary?: boolean;
}

const ButtonLink = ({ href, content, primary, secondary, tertiary }: ButtonLinkProps) => {
	return (
		<Link
			href={href}
			scroll={false}
			className={`z-10 py-2 px-5 rounded-full border-2 ${
				primary &&
				'bg-transparent border-[var(--contrast)] text-[var(--contrast)] hover:bg-gradient-to-tl from-[var(--contrast)] to-[var(--contrast-light)]  hover:text-white'
			} ${
				secondary &&
				'bg-gradient-to-tl from-[var(--contrast)] to-[var(--contrast-light)] border-[var(--contrast-light)] text-white hover:bg-gradient-to-tl hover:from-transparent hover:to-transparent hover:text-[var(--contrast)] hover:border-[var(--contrast)]'
			} ${
				tertiary &&
				'bg-gradient-to-tl hover:from-[var(--card-gray)] hover:to-[var(--card-gray-light)]  hover:border-[var(--card-gray-light)] hover:text-white hover:bg-gradient-to-tl from-transparent to-transparent text-[var(--card-gray)] border-[var(--card-gray)]'
			}
			transition-all linear duration-300`}>
			{content}
		</Link>
	);
};

export default ButtonLink;
