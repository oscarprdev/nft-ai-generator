import PurchasingCard, { PlanKinds } from './PurchasingCard';

const Purchasing = () => {
	return (
		<section className='flex flex-col items-center w-full h-screen px-12 mt-16'>
			<div className='small-intersection-animation flex flex-col items-center gap-2'>
				<h3 className='text-4xl font-bold text-center'>Purchase subscription</h3>
				<p className='text-md'>Choose the plan that works better for you</p>
			</div>
			<div className='flex items-center justify-center gap-5 w-full h-full mt-10'>
				<PurchasingCard plan={PlanKinds.free} />
				<PurchasingCard plan={PlanKinds.standard} />
				<PurchasingCard plan={PlanKinds.pro} />
			</div>
		</section>
	);
};

export default Purchasing;
