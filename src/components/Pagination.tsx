import React from 'react';
import ReactPaginate from 'react-paginate';

interface Props {
	data: any;
	page: number;
	setPage: React.Dispatch<React.SetStateAction<number>>;
}

const Pagination: React.FC<Props> = ({ data, page, setPage }) => {
	// const changePage = ({ selected }) => {
	// 	setPage(selected);
	// };
	return (
		<div className='mb-8'>
			{/* {data && (
				<ReactPaginate
					// pageCount={listAnime.length > 0 ? page + 2 : page}
					containerClassName={'flex justify-center flex-wrap items-center'}
					pageClassName={'px-0.5 mb-7'}
					initialPage={page}
					activeLinkClassName={'text-white bg-main'}
					pageLinkClassName={'py-2 px-5 bg-gray-200 outline-none'}
					previousLinkClassName={'font-medium pr-3 outline-none'}
					nextLinkClassName={'font-medium pl-3 outline-none'}
					disabledClassName={'text-gray-400'}
					onPageChange={changePage}
				/>
			)} */}
		</div>
	);
};

export default Pagination;