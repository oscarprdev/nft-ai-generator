import HomeView from '@/app/ui/home/HomeView';

interface HomeProps {
	searchParams: {
		top?: string;
	};
}

export default async function Home({ searchParams }: HomeProps) {
	return (
		<main className='flex flex-col items-center w-full'>
			<HomeView top={searchParams.top} />
		</main>
	);
}
