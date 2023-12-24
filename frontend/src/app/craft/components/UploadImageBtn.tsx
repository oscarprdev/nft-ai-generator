'use client';

import Button from '@/app/components/Button';
import { uploadImageActions } from '../actions/upload-image.actions';

interface UploadImageBtnProps {
	file: string;
}

const UploadImageBtn = ({ file }: UploadImageBtnProps) => {
	const handleFormAction = async () => {
		await uploadImageActions(file);
	};

	return (
		<Button
			secondary
			content='Upload art'
			onClick={handleFormAction}
			type='button'
		/>
	);
};

export default UploadImageBtn;
