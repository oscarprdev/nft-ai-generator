'use client';

import Button from '@/app/components/Button';
import { useFormStatus } from 'react-dom';

const UploadImageBtn = () => {
	const { pending } = useFormStatus();

	return (
		<Button
			secondary
			content='Upload art'
			type='submit'
			disabled={pending}
			pending={pending}
		/>
	);
};

export default UploadImageBtn;
