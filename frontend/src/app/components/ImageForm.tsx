'use server';

import { generateImage } from '../actions/generate-image';
import ImageInput from './ImageInput';

const ImageForm = async () => {
	return (
		<form action={generateImage}>
			<ImageInput />
		</form>
	);
};

export default ImageForm;
