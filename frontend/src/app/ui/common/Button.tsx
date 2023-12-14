import React from 'react';

interface ButtonProps {
	content: string;
	primary?: boolean;
	secondary?: boolean;
	onClick?: () => void;
}

const Button = ({ content, primary, secondary, onClick }: ButtonProps) => {
	return (
		<button
			className={`py-2 px-5 rounded-full border-2 ${
				primary &&
				'bg-transparent border-[var(--contrast)] text-[var(--contrast)] hover:bg-gradient-to-tl from-[var(--contrast)] to-[var(--contrast-light)]  hover:text-white'
			} ${
				secondary &&
				'bg-gradient-to-tl from-[var(--contrast)] to-[var(--contrast-light)] border-[var(--contrast-light)] text-white hover:bg-gradient-to-tl hover:from-transparent hover:to-transparent hover:text-[var(--contrast)] hover:border-[var(--contrast)]'
			} transition-all linear duration-300`}
			onClick={onClick}>
			{content}
		</button>
	);
};

export default Button;
