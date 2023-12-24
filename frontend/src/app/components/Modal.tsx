import LoginModal from './modals/LoginModal/LoginModal';
import RegisterModal from './modals/RegisterModal/RegisterModal';
import CloseModalButton from './modals/CloseModalButton';
import CraftModal from './modals/CraftModal/CraftModal';
import LoadingModal from './modals/LoadingModal/LoadingModal';

interface ModalProps {
	modal?: string;
	onClose?(): void;
}

interface Modals {
	login: () => React.JSX.Element;
	signup: () => React.JSX.Element;
	craft: () => React.JSX.Element;
	loading: () => React.JSX.Element;
}

const Modal = ({ modal, onClose }: ModalProps) => {
	const modals: Modals = {
		login: LoginModal,
		signup: RegisterModal,
		craft: CraftModal,
		loading: LoadingModal,
	};

	const isOpened = modal && modals.hasOwnProperty(modal) && modal !== 'false';

	return (
		<>
			{isOpened && (
				<div className='fixed inset-0 z-50 w-screen h-screen top-0 left-0 grid place-items-center'>
					<div
						id='backdrop'
						className='fixed inset-0 w-screen h-screen filter bg-zinc-800 opacity-70'></div>
					<div className='relative z-10 bg-white p-8 rounded-lg shadow-md w-[70vw] max-w-[400px]'>
						<CloseModalButton onClose={onClose} />
						{isOpened && modals[modal as keyof Modals]()}
					</div>
				</div>
			)}
		</>
	);
};
export default Modal;
