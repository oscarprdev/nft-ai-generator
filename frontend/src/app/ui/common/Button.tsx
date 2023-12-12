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
				primary && 'bg-transparent border-[var(--contrast)] text-[var(--contrast)] hover:bg-[var(--contrast)] hover:text-white'
			} ${
				secondary && 'bg-[var(--contrast)] border-[var(--contrast)] text-white hover:bg-transparent hover:text-[var(--contrast)]'
			} transition-all linear duration-300`}
			onClick={onClick}>
			{content}
		</button>
	);
};

export default Button;
