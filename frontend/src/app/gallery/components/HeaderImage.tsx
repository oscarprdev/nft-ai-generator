import EtherIcon from '@/app/components/icons/EtherIcon';
import HeartIcon from '@/app/components/icons/HeartIcon';

interface HeaderImageProps {
	likes: string;
}

const HeaderImage = ({ likes }: HeaderImageProps) => {
	return (
		<header className='absolute z-10 flex justify-between  top-4 left-4 right-4'>
			<span className='max-w-[50%] flex bg-blur text-white text-sm rounded-lg px-2 py-1'>
				<EtherIcon className='w-4' />
				<p className='uppercase truncate'>0.075</p>
			</span>
			<span className='flex items-center gap-1 group bg-blur rounded-lg px-2 py-1 cursor-pointer'>
				<HeartIcon className='w-4 fill-none text-white group-hover:fill-white transition-colors duration-300' />
				<p className='text-sm text-white'>{likes}</p>
			</span>
		</header>
	);
};

export default HeaderImage;
