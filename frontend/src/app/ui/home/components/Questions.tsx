import { APP_API_URL } from '@/constants';
import ArrowDownIcon from '../../common/icons/ArrowDownIcon';
import { QuestionsInfo } from '@/app/api/home/questions/types';

const Questions = async () => {
	const questionsApiResponse = await fetch(`${APP_API_URL}/api/home/questions`, { cache: 'no-cache' });
	const questionsInfo: QuestionsInfo = await questionsApiResponse.json();

	return (
		<section className='flex justify-between items-start w-full gap-5 mt-36 px-12 h-[45vh]'>
			<div className='small-intersection-animation flex flex-col items-start justify-between gap-5'>
				<h3 className='text-4xl font-bold'>Frequently asked questions</h3>
				<div className='flex flex-col'>
					<p>{questionsInfo.title}</p>
					<p className='text-[var(--contrast)] underline'>{questionsInfo.email}</p>
				</div>
			</div>
			<div className='flex flex-col gap-3 w-[40%]'>
				{questionsInfo.questions.map((info) => (
					<details
						key={crypto.randomUUID().toString()}
						name='questions'
						className='small-intersection-animation cursor-pointer group w-full'>
						<summary className='flex items-center justify-between text-zinc-100 rounded-xl shadow-md list-none border p-3 bg-gradient-to-tl from-[var(--card-gray)] to-[var(--card-gray-light)] group-hover:from-[var(--contrast)] group-hover:to-[var(--contrast-light)] group-open:from-[var(--contrast)] group-open:to-[var(--contrast-light)] group-open:border-[var(--contrast-light)]'>
							{info.question}
							<ArrowDownIcon className='w-6 transition-all duration-300 group-open:rotate-180' />
						</summary>
						<p className='p-3 fade-in-animation'>{info.answer}</p>
					</details>
				))}
			</div>
		</section>
	);
};

export default Questions;
