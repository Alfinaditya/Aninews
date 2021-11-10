import React, { useState } from 'react';
import ListBoxStatus from '../../../components/ListBoxStatus';
import { statuses } from '../utils';
interface Props {
	selectedStatusValue: string;
	setSelectedStatusValue: React.Dispatch<React.SetStateAction<string>>;
	selectedStatusText: string;
	setSelectedStatusText: React.Dispatch<React.SetStateAction<string>>;
}
const Header: React.FC<Props> = ({
	selectedStatusValue,
	setSelectedStatusValue,
	selectedStatusText,
	setSelectedStatusText,
}) => {
	const [open, setOpen] = useState(false);
	return (
		<div className='flex sm:justify-between justify-center flex-wrap lg:mx-6 sm:mx-6'>
			{selectedStatusValue === 'airing' ? (
				<p className='font-bold text-xl sm:block hidden'>
					New <span className='text-main'>Releases</span>
				</p>
			) : (
				<p className='font-bold text-xl sm:block hidden'>
					Top <span className='text-main'>{selectedStatusText}</span>
				</p>
			)}

			<ListBoxStatus
				setSelectedStatusValue={setSelectedStatusValue}
				setSelectedStatusText={setSelectedStatusText}
				selectedStatusText={selectedStatusText}
				statuses={statuses}
				open={open}
				setOpen={setOpen}
			/>
		</div>
	);
};

export default Header;
