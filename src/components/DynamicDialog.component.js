import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
const uuidv1 = require('uuid/v1');

export const DynamicDialog = React.forwardRef(({ DDStatus, setDDStatus, selectedDay }, calendarComponentRef) => {
	const [ modalIsOpen, setIsOpen ] = useState(DDStatus);
	const [ eventTitle, setEventTitle ] = useState(null);
	const [ eventDate, setEventDate ] = useState(selectedDay);
	let eventInputRef = React.createRef();

	// in order to update or render the child component when it's prop in the parent compoenent changes.
	useEffect(
		() => {
			setIsOpen(DDStatus);
			setEventTitle(null);
		},
		[ DDStatus ]
	);

	useEffect(
		() => {
			setEventDate(selectedDay);
		},
		[ selectedDay ]
	);

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
		setDDStatus(false);
	};

	const addEvent = (eventTitle, eventDate = selectedDay, e) => {
		e.preventDefault();
		let calendar = calendarComponentRef.current.getApi();
		var date = new Date(eventDate + 'T00:00:00'); // string date will be in local time

		if (!isNaN(date.valueOf())) {
			// valid?
			calendar.addEvent({
				id: uuidv1(),
				title: eventTitle,
				start: date,
				allDay: true
			});
		} else {
			alert('Invalid date.');
		}
		setEventTitle(null);
		setEventDate();
		setDDStatus(false);
	};

	const CreateEventDialog = () => {
		return (
			<div className="ml-4 text-xs text-gray-800">
				<div className="flex justify-end mr-2 mb-2 text-gray-700">
					<button className="p-2 font-bold" onClick={closeModal}>
						X
					</button>
				</div>
				<div className="mb-2">
					<form onSubmit={(e) => addEvent(eventTitle, eventDate, e)}>
						<input
							className="w-full border-gray-500 border-b-2 focus:border-transparent focus:border-blue-600 focus:outline-none text-sm text-gray-600"
							onChange={(event) => setEventTitle(event.target.value)}
							value={eventTitle}
							type="text"
							placeholder="Event Name"
							ref={eventInputRef}
							autoFocus
						/>
					</form>
				</div>
				<div className="mb-2">
					<button className="border p-1 mr-2 bg-blue-500 text-gray-100 rounded">Event</button>
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
						onClick={(e) => addEvent(eventTitle, eventDate, e)}
					>
						Save
					</button>
				</div>
			</div>
		);
	};

	return (
		<Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles} contentLabel="Example Modal">
			<div>
				<CreateEventDialog />
			</div>
		</Modal>
	);
});
