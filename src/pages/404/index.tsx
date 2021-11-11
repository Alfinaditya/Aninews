import { Link } from 'react-router-dom';

const NotFound = () => {
	return (
		<div className='text-main w-full flex items-center justify-center'>
			<div className='w-56'>
				<h1 className='text-9xl font-medium'>404</h1>
				<div className='font-bold block text-center m-4'>
					<p>Something Went Wrong.</p>
					<Link className='cursor-pointer underline' to='/'>
						Back To Homepage
					</Link>
				</div>
			</div>
		</div>
	);
};

export default NotFound;
