const ArrowDownIcon = ({ className }: { className: string }) => {
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
				<path d='M12 5l0 14' />
				<path d='M16 15l-4 4' />
				<path d='M8 15l4 4' />
			</svg>
		</div>
	);
};

export default ArrowDownIcon;
