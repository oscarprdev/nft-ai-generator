import XIcon from './icons/XIcon';
import Link from 'next/link';
import LoginModal from './modals/LoginModal/LoginModal';
import RegisterModal from './modals/RegisterModal/RegisterModal';

interface ModalProps {
	modal?: string;
}

interface Modals {
	login: () => React.JSX.Element;
	signup: () => React.JSX.Element;
}

const Modal = ({ modal }: ModalProps) => {
	const modals: Modals = {
		login: LoginModal,
		signup: RegisterModal,
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
						<Link
							href={'?modal=false'}
							scroll={false}>
							<XIcon className='absolute top-2 right-2 w-6' />
						</Link>
						{isOpened && modals[modal as keyof Modals]()}
					</div>
				</div>
			)}
		</>
	);
};
export default Modal;
