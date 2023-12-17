import Button from '../../common/Button';

const ActionCard = () => {
	return (
		<article className='small-intersection-animation flex flex-col text-center max-w-md gap-5'>
			<h3 className='text-4xl font-bold text-center'>Start your journey from AI art to NFT</h3>
			<div>
				<Button
					secondary
					content='Start free plan'
				/>
			</div>
		</article>
	);
};

export default ActionCard;
