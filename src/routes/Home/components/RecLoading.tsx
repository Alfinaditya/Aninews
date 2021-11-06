const RecLoading = () => {
	const elements = [];
	{
		for (let index = 0; index < 10; index++) {
			elements.push(
				<div key={index} className='w-48 mb-10 mx-3 cursor-pointer'>
					{/* image */}
					<div className='w-48 h-48 bg-gray-200 rounded-tr rounded-tl animate-pulse' />

					<div className='pt-5'>
						{/* title */}
						<div className='h-3 rounded-lg bg-gray-200 animate-pulse mb-4' />
						<div className='h-3 w-3/4 rounded-lg bg-gray-200 animate-pulse mb-4' />
						{/* Date */}
						<div className='h-3 w-1/4 rounded-lg bg-gray-200 animate-pulse mb-4' />
					</div>
				</div>
			);
		}
	}
	return (
		<div className='grid justify-center xl:grid-cols-5 lg:grid-cols-4 sm:grid-cols-3 mt-8'>
			{elements}
		</div>
	);
};

export default RecLoading;
