'use server';

import { getKeywordsAction } from '@/app/actions/get-keywords.action';
import KeywordsSelector from './KeywordsSelector';
import PromptTextarea from './PromptTextarea';
import FormButton from '@/app/components/form/FormButton';
import FormInput from '@/app/components/form/FormInput';
import ImageGenerated from './ImageGenerated';
import { cookies } from 'next/headers';
import ClearFormButton from './ClearFormButton';
import UploadImageBtn from './UploadImageBtn';
import { dispatchFormAction } from '../actions/dispatch-form.action';

const CreateImageForm = async () => {
	const keywords = await getKeywordsAction();
	const file = cookies().get('file')?.value;

	return (
		<form
			action={dispatchFormAction}
			className='lg:w-[600px] sm:w-[90vw] px-10 max-w-[var(--max-width-app)] flex flex-col items-center gap-4'>
			<ImageGenerated file={file} />
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
			{!file ? (
				<div className='w-[10vw] min-w-[150px] mt-3'>
					<FormButton content='Craft art' />
				</div>
			) : (
				<div className='w-[50%] min-w-[150px] mt-3 flex gap-2'>
					<ClearFormButton />
					<UploadImageBtn />
				</div>
			)}
		</form>
	);
};

export default CreateImageForm;
