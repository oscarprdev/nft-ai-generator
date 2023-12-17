import HomeView from '@/app/ui/home/HomeView';
import Header from './ui/common/Header';

interface HomeProps {
	searchParams: {
		top?: string;
	};
}

export default async function Home({ searchParams }: HomeProps) {
	return (
		<main className='flex flex-col items-center w-full'>
			<Header />
			<HomeView top={searchParams.top} />
		</main>
	);
}
