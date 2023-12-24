'use client';

import { uploadImageAction } from '@/app/craft/actions/upload-image.action';
import Button from '../../Button';
import { useState } from 'react';

interface CraftModalActionProps {
	file: string;
	title: string;
	prompt: string;
	keywords: string;
}

const CraftModalAction = ({ file, title, prompt, keywords }: CraftModalActionProps) => {
	const [pending, setPending] = useState(false);

	const handleUploadButton = async () => {
		setPending(true);
		await uploadImageAction({ file, title, prompt, keywords });
		setPending(false);
	};

	return (
		<Button
			secondary
			content='Upload art'
			type='button'
			onClick={handleUploadButton}
			pending={pending}
			disabled={pending}
		/>
	);
};

export default CraftModalAction;
