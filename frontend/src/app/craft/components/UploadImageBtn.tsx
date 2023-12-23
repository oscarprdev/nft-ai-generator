'use client';

import { uploadImageActions } from '../actions/upload-image.actions';

interface UploadImageBtnProps {
	file: string;
}

const UploadImageBtn = ({ file }: UploadImageBtnProps) => {
	const handleFormAction = async () => {
		await uploadImageActions(file);
	};

	return (
		<button
			onClick={handleFormAction}
			className='py-2 px-8 rounded-full bg-zinc-100 text-zinc-600'>
			Upload
		</button>
	);
};

export default UploadImageBtn;
