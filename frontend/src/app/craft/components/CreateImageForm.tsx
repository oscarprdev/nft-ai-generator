'use server';

import { getKeywordsAction } from '@/app/actions/get-keywords.action';
import KeywordsSelector from './KeywordsSelector';
import PromptTextarea from './PromptTextarea';
import FormButton from '@/app/components/form/FormButton';
import FormInput from '@/app/components/form/FormInput';
import { cookies } from 'next/headers';
import { generateImageAction } from '../actions/generate-image.action';

const CreateImageForm = async () => {
	const keywords = await getKeywordsAction();
	const file = cookies().get('file')?.value;

	return (
		<form
			action={generateImageAction}
			className='lg:w-[600px] sm:w-[90vw] px-10 max-w-[var(--max-width-app)] flex flex-col items-center gap-4'>
			<label className='w-full'>
				<p className='font-light pb-2'>Title</p>
				<FormInput
					type='text'
					placeholder='Some awesome art title'
					id='title'
					name='title'
					required
				/>
			</label>
			<label className='w-full'>
				<p className='font-light pb-2'>Prompt</p>
				<PromptTextarea />
			</label>
			<KeywordsSelector
				keywords={keywords}
				reset={!file}
			/>
			<div className='w-[10vw] min-w-[150px] mt-3'>
				<FormButton
					content='Craft art'
					modal
				/>
			</div>
		</form>
	);
};

export default CreateImageForm;
