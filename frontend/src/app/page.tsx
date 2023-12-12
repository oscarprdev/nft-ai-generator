import HomeView from '@/app/ui/home/HomeView';
import Header from './ui/common/Header';

export default function Home() {
	return (
		<main className='flex flex-col items-center w-full'>
			<Header />
			<HomeView />
		</main>
	);
}
