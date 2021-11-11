const UpcomingLoading = () => {
	const elements = [];
	{
		for (let index = 0; index < 15; index++) {
			elements.push(
				<div key={index} className='lg:w-48 sm:w-48 md:w-56 w-36 mb-10'>
					{/* image */}
					<div className='lg:w-48 lg:h-48 md:w-56 sm:w-48 sm:h-52 w-36 h-40 bg-gray-200 rounded-tr rounded-tl animate-pulse' />

					<div className='pt-5'>
						{/* title */}
						<div className='h-3 rounded-lg bg-gray-200 animate-pulse mb-4' />
						<div className='h-3 w-3/4 rounded-lg bg-gray-200 animate-pulse mb-4' />
						{/* Date */}
					</div>
				</div>
			);
		}
	}
	return (
		<div className='mt-8 2xl:grid-cols-6 grid xl:grid-cols-5 lg:grid-cols-4 sm:grid-cols-3 grid-cols-2 lg:place-items-start place-items-center'>
			{elements}
		</div>
	);
};

export default UpcomingLoading;
