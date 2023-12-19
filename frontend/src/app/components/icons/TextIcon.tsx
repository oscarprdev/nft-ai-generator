import React from 'react';

const TextIcon = ({ className }: { className: string }) => {
	return (
		<div className={className}>
			<svg
				width='inherit'
				height='inherit'
				viewBox='0 0 24 24'
				strokeWidth='2'
				stroke='currentColor'
				fill='inherit'
				strokeLinecap='round'
				strokeLinejoin='round'>
				<path
					stroke='none'
					d='M0 0h24v24H0z'
					fill='none'
				/>
				<path d='M9 15v-7a3 3 0 0 1 6 0v7' />
				<path d='M9 11h6' />
				<path d='M5 19h14' />
			</svg>
		</div>
	);
};

export default TextIcon;