const AsteriskIcon = ({ className }: { className: string }) => {
	return (
		<div className={className}>
			<svg
				width='inherit'
				height='inherit'
				viewBox='0 0 24 24'
				strokeWidth='5'
				stroke='currentColor'
				fill='none'
				strokeLinecap='round'
				strokeLinejoin='round'>
				<path
					stroke='none'
					d='M0 0h24v24H0z'
					fill='none'
				/>
				<path d='M12 12v-9' />
				<path d='M12 12l-9 -2.5' />
				<path d='M12 12l9 -2.5' />
				<path d='M12 12l6 8.5' />
				<path d='M12 12l-6 8.5' />
			</svg>
		</div>
	);
};

export default AsteriskIcon;
