import LoaderIcon from './icons/LoaderIcon';

interface ButtonProps {
	content: string;
	primary?: boolean;
	secondary?: boolean;
	tertiary?: boolean;
	disabled?: boolean;
	pending?: boolean;
	type?: 'submit' | 'reset' | 'button';
	onClick?: () => void;
}

const Button = ({ content, primary, secondary, tertiary, disabled, pending, type, onClick }: ButtonProps) => {
	return (
		<button
			type={type}
			disabled={disabled}
			className={`z-10 w-full py-2 px-5 rounded-full border-2 ${
				primary &&
				'bg-transparent border-[var(--contrast)] text-[var(--contrast)] hover:bg-gradient-to-tl from-[var(--contrast)] to-[var(--contrast-light)]  hover:text-white'
			} ${
				secondary &&
				'bg-gradient-to-tl from-[var(--contrast)] to-[var(--contrast-light)] border-[var(--contrast-light)] text-white hover:bg-gradient-to-tl hover:from-transparent hover:to-transparent hover:text-[var(--contrast)] hover:border-[var(--contrast)]'
			} ${
				tertiary &&
				'bg-gradient-to-tl hover:from-[var(--card-gray)] hover:to-[var(--card-gray-light)]  hover:border-[var(--card-gray-light)] hover:text-white hover:bg-gradient-to-tl from-transparent to-transparent text-[var(--card-gray)] border-[var(--card-gray)]'
			}
			${
				disabled &&
				'bg-gradient-to-tl from-zinc-200 to-transparent text-zinc-400 border-zinc-200 hover:from-zinc-200 hover:to-transparent hover:text-zinc-400 hover:border-zinc-200'
			}
			transition-all linear duration-300`}
			onClick={onClick}>
			{pending ? (
				<div className='grid place-items-center animate-spin'>
					<LoaderIcon className='w-5' />
				</div>
			) : (
				content
			)}
		</button>
	);
};

export default Button;
