import Home from './home/page';

interface HomeProps {
	searchParams: {
		top?: string;
		modal?: string;
	};
}

export default async function Page({ searchParams }: HomeProps) {
	return <Home searchParams={searchParams} />;
}
