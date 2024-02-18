import HomeView from '@/app/home/components/HomeView';
import Modal from '../components/Modal';
import { redirect } from 'next/navigation';
import { closeAction } from './actions/close-action';

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
			<Modal
				modal={searchParams.modal}
				onClose={closeAction}
			/>
		</main>
	);
}
