import ButtonLink from '../../ButtonLink';
import LoginForm from './LoginForm';

const LoginModal = () => {
	return (
		<div className='flex flex-col items-center gap-5 '>
			<p className='text-xl'>Login</p>
			<LoginForm />
			<div className='flex items-center w-[80%] gap-5'>
				<span className='w-full h-[0.1rem] bg-zinc-200' />
				or
				<span className='w-full h-[0.1rem] bg-zinc-200' />
			</div>

			<div className='flex flex-col items-center gap-2'>
				<p>Don&apos;t have an account?</p>
				<ButtonLink
					primary
					href='?modal=signup'
					content='Register now'
				/>
			</div>
		</div>
	);
};

export default LoginModal;
