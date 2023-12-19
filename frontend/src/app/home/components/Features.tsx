import ThunderIcon from '../../components/icons/ThunderIcon';
import TextIcon from '../../components/icons/TextIcon';
import ImageIcon from '../../components/icons/ImageIcon';
import EtherIcon from '../../components/icons/EtherIcon';
import CloudIcon from '../../components/icons/CloudIcon';

const Features = () => {
	return (
		<section className='w-full flex flex-col items-center gap-16 px-12 py-5'>
			<p className='z-10 intersection-animation text-4xl font-bold text-center'>
				Our cutting-edge features <br /> revolutionizing AI experience
			</p>
			<div className='w-full flex flex-col gap-8 intersection-animation'>
				<div className='flex items-center gap-8'>
					<article className='shadow-xl grid place-items-center rounded-xl border border-[var(--card-blue)] p-2 w-[50%] bg-gradient-to-tl from-[var(--card-blue)] to-[var(--card-blue-light)]'>
						<div className='relative overflow-hidden flex flex-col items-center p-5 gap-5'>
							<div className='flex items-center gap-1'>
								<span className='p-2 rounded-xl border-[2px] border-white'>
									<TextIcon className='w-8 text-white fill-none' />
								</span>
								<div className='flex items-center gap-1'>
									<span className='bg-white w-3 h-[0.1rem]' />
									<span className='bg-white w-3 h-[0.1rem]' />
								</div>
								<span className='p-2 rounded-xl border-[2px] border-white'>
									<ImageIcon className='w-8 text-white' />
								</span>
							</div>
							<p className='text-xl w-[85%] z-10 text-white'>Text to image. Imagine, ask, create, describe and generate.</p>
						</div>
					</article>
					<article className='shadow-xl grid place-items-center rounded-xl border border-[var(--card-gray)] p-2 w-[50%] bg-gradient-to-tl from-[var(--card-gray)] to-[var(--card-gray-light)]'>
						<div className='relative overflow-hidden flex flex-col items-center p-5 rounded-xl gap-5'>
							<div className='flex items-center gap-1'>
								<span className='p-2 rounded-xl border-[2px] border-white'>
									<ImageIcon className='w-8 text-white' />
								</span>
								<div className='flex items-center gap-1'>
									<span className='bg-white w-3 h-[0.1rem]' />
									<span className='bg-white w-3 h-[0.1rem]' />
								</div>
								<span className='p-2 rounded-xl border-[2px] border-white'>
									<EtherIcon className='w-8 text-white' />
								</span>
							</div>
							<p className='text-xl w-[85%] z-10 text-white'>AI generated art to NFT in a simple and enjoyable way.</p>
						</div>
					</article>
				</div>
				<div className='flex items-center gap-8'>
					<article className='shadow-xl grid place-items-center border border-[var(--card-green)] rounded-xl p-2 w-[50%] bg-gradient-to-tl from-[var(--card-green)] to-[var(--card-green-light)]'>
						<div className='relative overflow-hidden flex flex-col items-center p-5 rounded-xl gap-5'>
							<span className='p-2 rounded-xl border-[2px] border-white'>
								<ThunderIcon className='w-8 fill-zinc-100' />
							</span>
							<p className='text-xl w-[85%] z-10 text-zinc-100'>Lighting fast. Just start with an idea and see how fast it evolves.</p>
						</div>
					</article>
					<article className='shadow-xl grid place-items-center border border-[var(--contrast)] rounded-xl p-2 w-[50%] bg-gradient-to-tl from-[var(--contrast)] to-[var(--contrast-light)]'>
						<div className='relative overflow-hidden flex flex-col items-center p-5 rounded-xl gap-5'>
							<span className='z-10 p-2 rounded-xl border-[2px] border-white'>
								<CloudIcon className='w-8 text-white' />
							</span>
							<p className='text-xl w-[85%] z-10 text-white'>Edge to cloud makes your AI art seamless and dynamic.</p>
						</div>
					</article>
				</div>
			</div>
		</section>
	);
};

export default Features;
