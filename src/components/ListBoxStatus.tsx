type status = {
	id: number;
	text: string;
};
interface Props {
	setSelectedStatusValue: React.Dispatch<React.SetStateAction<string>>;
	selectedStatusText: string;
	setSelectedStatusText: React.Dispatch<React.SetStateAction<string>>;
	open: boolean;
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
	statuses: status[];
}
const ListBoxStatus: React.FC<Props> = ({
	setSelectedStatusValue,
	setSelectedStatusText,
	selectedStatusText,
	statuses,
	setOpen,
	open,
}) => {
	return (
		<div>
			<div className='relative'>
				<div
					className='cursor-pointer w-64 h-10 border-1 rounded-md border-main flex items-center justify-between pr-3 pl-3'
					onClick={() => {
						setOpen(!open);
					}}
				>
					<div>{selectedStatusText}</div>
					<div className='w-7 overflow-hidden inline-block'>
						<div className=' h-4 w-4 bg-main -rotate-45 transform origin-top-left' />
					</div>
				</div>
				{open && (
					// OPtions
					<div className='rounded-md border-1 border-main bg-white shadow-md mt-2 absolute w-full'>
						{/* Option */}
						{statuses.map(
							status =>
								selectedStatusText !== status.text && (
									<div
										key={status.id}
										className='cursor-pointer flex items-center hover:text-white hover:bg-main hover:font-bold pl-6 h-9'
										id={status.text.toLowerCase().replace(' ', '')}
										onClick={e => {
											setSelectedStatusValue(e.currentTarget.id);
											setSelectedStatusText(e.currentTarget.innerText);
											setOpen(false);
										}}
									>
										{status.text}
									</div>
								)
						)}
					</div>
				)}
			</div>
		</div>
	);
};

export default ListBoxStatus;
