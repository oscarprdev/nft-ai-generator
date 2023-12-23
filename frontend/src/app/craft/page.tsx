import ImageForm from './components/ImageForm';
import ImageGenerated from './components/ImageGenerated';
import NotificationToast from './components/NotificationToast';
import { cookies } from 'next/headers';

interface CraftProps {
	searchParams: {
		success: string;
		error: string;
	};
}

export default async function Craft({ searchParams: { success, error } }: CraftProps) {
	const file = cookies().get('file')?.value;

	return (
		<main className='flex flex-col items-center w-full'>
			{file && <ImageGenerated file={file} />}
			<NotificationToast
				success={success}
				error={error}
			/>
			<ImageForm />
		</main>
	);
}
