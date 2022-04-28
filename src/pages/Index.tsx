import { FaGithub, FaGoogle } from 'react-icons/fa';

export const IndexPage = () => {
	return (
		<div className='h-screen w-screen flex'>
			<div className='h-full w-1/2'>
				<img src="/img/index-banner.png" alt="birds flying" className='object-cover h-full' />
			</div>
			<div className='h-full w-1/2 flex items-center justify-center'>
				<div className='h-3/4 w-5/6 flex flex-col items-center justify-between'>
					<h1 className='text-5xl'>welcome to chirper</h1>
					<div className='flex flex-col items-center justify-evenly h-3/5 w-1/2'>
						<h1 className='text-4xl'>join the roost</h1>
						<div className='w-full flex flex-col items-center'>
							<button className='btn gap-2 mb-2 w-full'><FaGoogle /> Sign Up with Google</button>
							<button className='btn gap-2 w-full'><FaGithub />Sign Up with GitHub</button>
						</div>
						<div className='flex justify-evenly items-center w-full text-center'>
							<div className='h-[1px] w-1/2 bg-base-content' />
							<p className='w-1/4'>or</p>
							<div className='h-[1px] w-1/2 bg-base-content' />
						</div>
						<button className='btn btn-primary w-full'>sign up with phone or email</button>
					</div>
					<div className='w-1/2 text-center'>
						<h2 className='text-lg mb-2'>have an account?</h2>
						<button className='btn btn-primary w-full'>sign in</button>
					</div>
				</div>
			</div>
		</div>
	);
};
