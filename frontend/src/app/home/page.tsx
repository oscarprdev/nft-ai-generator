import HomeView from '@/app/home/components/HomeView';
import Modal from '../components/Modal';

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
