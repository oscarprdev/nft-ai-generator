import ButtonLink from '../../ButtonLink';
import RegisterForm from './RegisterForm';

const RegisterModal = () => {
	return (
		<div className='flex flex-col items-center gap-5 '>
			<p className='text-xl'>Sign up</p>
			<RegisterForm />
			<div className='flex items-center w-[80%] gap-5'>
				<span className='w-full h-[0.1rem] bg-zinc-200' />
				or
				<span className='w-full h-[0.1rem] bg-zinc-200' />
			</div>
			<div className='flex flex-col items-center gap-2'>
				<p>Already signed up?</p>
				<ButtonLink
					primary
					href='?modal=login'
					content='Login now'
				/>
			</div>
		</div>
	);
};

export default RegisterModal;
