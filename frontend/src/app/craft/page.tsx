import Modal from '../components/Modal';
import { clearFormAction } from './actions/clear-form.action';
import CraftTitle from './components/CraftTitle';
import CreateImageForm from './components/CreateImageForm';
import NotificationToast from './components/NotificationToast';

interface CraftProps {
	searchParams: {
		success: string;
		error: string;
		modal: string;
	};
}

export default async function Craft({ searchParams: { success, error, modal } }: CraftProps) {
	return (
		<main className='flex flex-col items-center w-full h-screen gap-8'>
			{(success || error) && (
				<NotificationToast
					success={success}
					error={error}
				/>
			)}
			<CraftTitle />
			<CreateImageForm />
			<Modal
				modal={modal}
				onClose={clearFormAction}
			/>
		</main>
	);
}
