import React from 'react';
import NotificationToast from './components/NotificationToast';
import ImageGenerated from './components/ImageGenerated';
import ImageForm from './components/ImageForm';

interface GenerateImageViewProps {
	file: string;
	success: string;
	error: string;
}

const GenerateImageView = ({ file, success, error }: GenerateImageViewProps) => {
	return (
		<div>
			<NotificationToast
				success={success}
				error={error}
			/>
			{file && <ImageGenerated file={file} />}
			<ImageForm />
		</div>
	);
};

export default GenerateImageView;
