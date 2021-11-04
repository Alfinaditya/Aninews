import React, { useState } from 'react';
import ListBoxStatus from '../../../components/ListBoxStatus';
import { statuses } from '../utils';

interface Props {
	setSelectedStatusValue: React.Dispatch<React.SetStateAction<string>>;
	selectedStatusText: string;
	setSelectedStatusText: React.Dispatch<React.SetStateAction<string>>;
}
const Header: React.FC<Props> = ({
	setSelectedStatusValue,
	selectedStatusText,
	setSelectedStatusText,
}) => {
	const [open, setOpen] = useState(false);
	return (
		<div className='flex sm:justify-between justify-center flex-wrap lg:mx-6 md:mx-6'>
			<p className='font-bold text-xl'>
				Top <span className='text-main capitalize'>{selectedStatusText}</span>
			</p>

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
