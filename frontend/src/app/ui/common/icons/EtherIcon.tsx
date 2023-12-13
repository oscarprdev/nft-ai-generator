import React from 'react';

const EtherIcon = ({ className }: { className: string }) => {
	return (
		<div className={className}>
			<svg
				width='inherit'
				height='inherit'
				viewBox='0 0 24 24'
				strokeWidth='2'
				stroke='currentColor'
				fill='none'
				strokeLinecap='round'
				strokeLinejoin='round'>
				<path
					stroke='none'
					d='M0 0h24v24H0z'
					fill='none'
				/>
				<path d='M6 12l6 -9l6 9l-6 9z' />
				<path d='M6 12l6 -3l6 3l-6 2z' />
			</svg>
		</div>
	);
};

export default EtherIcon;
