import ButtonLink from '../ButtonLink';

const HomeHeader = () => {
	return (
		<div className='flex items-center gap-3'>
			<ButtonLink
				href={'?modal=signup'}
				primary
				content='Sign Up'
			/>
			<ButtonLink
				href={'?modal=login'}
				secondary
				content='Login'
			/>
		</div>
	);
};

export default HomeHeader;
