import CreateImageForm from './components/CreateImageForm';
import NotificationToast from './components/NotificationToast';

interface CraftProps {
	searchParams: {
		success: string;
		error: string;
	};
}

export default async function Craft({ searchParams: { success, error } }: CraftProps) {
	return (
		<main className='flex flex-col items-center w-full h-screen'>
			<NotificationToast
				success={success}
				error={error}
			/>
			<CreateImageForm />
		</main>
	);
}
