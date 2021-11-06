const Loading = () => {
	return (
		<div className='absolute top-2/4 left-1/2 transform translate-x-2/4 translate-y-2/4'>
			<svg
				className='animate-bounce h-10 w-10 rounded-full bg-main'
				viewBox='0 0 24 24'
			></svg>
		</div>
	);
};

export default Loading;
