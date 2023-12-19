import HomeView from '@/app/ui/home/HomeView';
import Modal from './ui/common/Modal';

interface HomeProps {
	searchParams: {
		top?: string;
		modal?: string;
	};
}

export default async function Home({ searchParams }: HomeProps) {
	return (
		<main className='flex flex-col items-center w-full'>
			<HomeView top={searchParams.top} />
			<Modal modal={searchParams.modal} />
		</main>
	);
}
