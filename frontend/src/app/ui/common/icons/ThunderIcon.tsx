const ThunderIcon = ({ className }: { className: string }) => {
	return (
		<div className={className}>
			<svg
				width='inherit'
				height='inherit'
				fill='inherit'
				viewBox='0 0 256 256'>
				<defs></defs>
				<g
					className='stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;'
					transform='translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)'>
					<path
						d='M 71.79 34.614 c -0.334 -0.497 -0.926 -0.745 -1.513 -0.63 l -18.311 3.528 l 3.718 -35.877 c 0.071 -0.682 -0.332 -1.32 -0.979 -1.55 c -0.648 -0.229 -1.362 0.011 -1.738 0.585 L 18.202 53.746 c -0.328 0.5 -0.325 1.144 0.008 1.639 c 0.33 0.493 0.922 0.742 1.513 0.632 l 18.312 -3.529 l -3.718 35.876 c -0.071 0.684 0.332 1.322 0.979 1.551 C 35.455 89.971 35.622 90 35.792 90 c 0.502 0 0.965 -0.251 1.241 -0.67 l 34.765 -53.076 C 72.126 35.754 72.122 35.11 71.79 34.614 z'
						className='stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;'
						transform=' matrix(1 0 0 1 0 0) '
						strokeLinecap='round'
					/>
				</g>
			</svg>
		</div>
	);
};

export default ThunderIcon;
