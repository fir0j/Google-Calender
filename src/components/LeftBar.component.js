import React, { useState } from 'react';
import DayPicker from 'react-day-picker';
import Modal from 'react-modal';

export const LeftBar = ({ handleDayClick, selectedDay, calendarEvents, setCalendarEvents }) => {
	const [ modalIsOpen, setIsOpen ] = useState(false);
	const [ eventTitle, setEventTitle ] = useState(null);

	var subtitle;
	const WEEKDAYS_SHORT = [ 'S', 'M', 'T', 'W', 'T', 'F', 'S' ];
	const customStyles = {
		content: {
			top: '50%',
			left: '50%',
			right: 'auto',
			bottom: 'auto',
			marginRight: '-50%',
			transform: 'translate(-50%, -50%)',
			boxShadow: '0px 0px 20px -5px rgba(128, 128, 128, 0.7)'
		},
		overlay: {
			backgroundColor: 'transparent'
		}
	};

	const closeModal = () => {
		setIsOpen(false);
	};

	const afterOpenModal = () => {
		subtitle.style.color = 'white';
	};

	const createEvent = (e) => {
		e.preventDefault();
		setEventTitle(eventTitle);
		setCalendarEvents([
			...calendarEvents,
			{
				title: eventTitle,
				start: new Date(),
				allDay: true
			}
		]);
		setEventTitle(null);
	};

	const AddEventDialog = () => {
		return (
			<div className="ml-4 text-xs text-gray-800">
				<div className="flex justify-end mr-2 mb-2 text-gray-700">
					<button className="p-2 font-bold" onClick={closeModal}>
						X
					</button>
				</div>
				<div className="mb-2">
					<form onSubmit={createEvent}>
						<input
							className="w-full border-gray-500 border-b focus:border-transparent focus:border-blue-700 focus:outline-none text-sm text-gray-600"
							onChange={(event) => setEventTitle(event.target.value)}
							value={eventTitle}
							type="text"
							placeholder="Add title"
							autoFocus
						/>
					</form>
				</div>
				<div className="mb-2">
					<button className="border p-1 mr-2">Event</button>
					<button className="border p-1 mr-2">Remainder</button>
					<button className="border p-1 mr-2">Task</button>
				</div>
				<p className="mb-2">
					<span className="inline-block border w-32 p-1 mr-2">DatePicker1</span>
					<span className="inline-block border w-32 p-1 mr-2">TimePicker</span>
					<span className="inline-block border w-32 p-1 mr-2">DatePicker2</span>
				</p>
				<button className="border block mb-2 p-1">Add guests</button>
				<button className="border mb-2 p-1">Add location or conferencing</button>
				<button className="block border mb-2 p-1">Add description</button>

				<div className="flex justify-end text-gray-100">
					<button className="pr-2 font-semibold text-gray-600">More options</button>
					<button
						className="p-1 w-20 border rounded font-semibold bg-blue-600 hover:bg-blue-700"
						onClick={createEvent}
						ref={(_subtitle) => (subtitle = _subtitle)}
					>
						Save
					</button>
				</div>
			</div>
		);
	};

	return (
		<div className="w-full h-screen90 text-center leftbar">
			<div className="h-full flex flex-col justify-between">
				<div className="h-full flex flex-col justify-between DPcalender">
					<div className="py-2 ml-2 mt-3 mb-3 flex justify-center rounded-full text-xs items-center cursor-pointer shadow-full">
						<div>
							<svg className="w-6 h-6" viewBox="0 0 36 36">
								<path fill="#34A853" d="M16 16v14h4V20z" />
								<path fill="#4285F4" d="M30 16H20l-4 4h14z" />
								<path fill="#FBBC05" d="M6 16v4h10l4-4z" />
								<path fill="#EA4335" d="M20 16V6h-4v14z" />
								<path fill="none" d="M0 0h36v36H0z" />
							</svg>
						</div>
						<div onClick={() => setIsOpen(true)} className="ml-1 pr-2">
							Create
						</div>
					</div>

					<Modal
						isOpen={modalIsOpen}
						onAfterOpen={afterOpenModal}
						onRequestClose={closeModal}
						style={customStyles}
						contentLabel="Example Modal"
					>
						<div>
							<AddEventDialog />
						</div>
					</Modal>

					<div className="h-full flex flex-col justify-start ml-6">
						<div className="mb-3 text-xs -ml-8">
							<div className="flex flex-col w-full h-full">
								<DayPicker
									weekdaysShort={WEEKDAYS_SHORT}
									onDayClick={handleDayClick}
									selectedDays={selectedDay}
								/>
							</div>
						</div>

						<div className="searchPeople">
							<input
								className="pl-2 h-8 w-full border-b-2 border-transparent rounded rounded-b-none focus:border-blue-600 outline-none text-xs bg-gray-100"
								type="text"
								placeholder="Search for people"
							/>
						</div>

						<div>
							<div>
								<div>
									<label className="my-3 flex text-sm font-medium">My Calenders</label>
									<form className="text-xs">
										<div className="mb-1 flex items-center">
											<input type="checkbox" name="vehicle1" value="user" checked readOnly />
											<label>Firoj Siddiki </label>
										</div>

										<div className="mb-1 flex items-center">
											<input type="checkbox" name="vehicle2" value="contacts" />
											<label> Contacts</label>
										</div>

										<div className="mb-1 flex items-center">
											<input type="checkbox" name="vehicle3" value="remainder" />
											<label>Remainder</label>
										</div>
										<div className="flex items-center">
											<input type="checkbox" name="vehicle3" value="tasks" />
											<label>Tasks</label>
										</div>
										<br />
									</form>
								</div>
							</div>
							<div>
								<label className="mb-3 flex text-sm font-medium">Other Calenders</label>
								<form>
									<div className="flex items-center text-xs">
										<input type="checkbox" name="vehicle3" value="Boat" checked readOnly /> Holidays
										in India<br />
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>

			<footer className="ml-6 flex text-xs">
				<p>
					<span>Terms-</span>Privacy
				</p>
			</footer>
		</div>
	);
};
