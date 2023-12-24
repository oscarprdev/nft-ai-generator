interface NotificationToastProps {
	success?: string;
	error?: string;
}

const NotificationToast = ({ success, error }: NotificationToastProps) => {
	return (
		<div className={`absolute top-[-5rem] p-5 rounded-md toast-animation ${success && 'bg-blue-400'} ${error && 'bg-red-500'}`}>
			<p className='text-white'>{success || error}</p>
		</div>
	);
};

export default NotificationToast;
