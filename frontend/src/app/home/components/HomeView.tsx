import React from 'react';
import Hero from './Hero';
import Branding from './Branding';
import Features from './Features';
import ExploringImages from './ExploringImages';
import Purchasing from './Purchasing';
import Questions from './Questions';
import ActionCard from './ActionCard';
import HomeGallery from './HomeGallery';

interface HomeViewProps {
	top?: string;
}

const HomeView = async ({ top }: HomeViewProps) => {
	return (
		<section className='flex flex-col items-center w-full max-w-[var(--max-width-app)]'>
			<Hero />
			<Branding />
			<Features />
			<ExploringImages top={top} />
			<Purchasing />
			<Questions />
			<ActionCard />
			<HomeGallery />
		</section>
	);
};

export default HomeView;
