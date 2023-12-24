'use client';

import Link from 'next/link';
import XIcon from '../icons/XIcon';

interface CloseModalButtonProps {
	onClose?(): void;
}

const CloseModalButton = ({ onClose }: CloseModalButtonProps) => {
	return (
		<button onClick={() => onClose && onClose()}>
			<XIcon className='absolute top-2 right-2 w-6' />
		</button>
	);
};

export default CloseModalButton;
