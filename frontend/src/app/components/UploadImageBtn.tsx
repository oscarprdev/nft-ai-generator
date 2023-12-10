'use client';

import { uploadImage } from '../actions/upload-image';

interface UploadImageBtnProps {
	file: string;
}

const UploadImageBtn = ({ file }: UploadImageBtnProps) => {
	const handleFormAction = async () => {
		await uploadImage(file);
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
