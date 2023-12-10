import ImageForm from './components/ImageForm';
import ImageGenerated from './components/ImageGenerated';
import NotificationToast from './components/NotificationToast';

interface HomeProps {
	searchParams: {
		file: string;
		success: string;
		error: string;
	};
}

export default function Home({ searchParams: { file, success, error } }: HomeProps) {
	return (
		<main className='h-screen grid place-items-center'>
			<NotificationToast
				success={success}
				error={error}
			/>
			{file && <ImageGenerated file={file} />}
			<ImageForm />
		</main>
	);
}
