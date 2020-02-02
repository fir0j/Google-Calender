import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import '../fullCalendar.scss';
import { CustomInputDialog } from './CustomInputDialog.component';

export const EventCalender = ({ calendarEvents, setCalendarEvents }) => {
	const [ calendarWeekends, setCalendarWeekends ] = useState(true);
	const [ dialogStatus, setDialogStatus ] = useState(false);
	const [ getarg, setArg ] = useState({ start: null, allDay: null });
	const calendarComponentRef = React.createRef();

	const toggleWeekends = () => {
		setCalendarWeekends(!calendarWeekends);
	};

	const gotoPast = () => {
		let calendarApi = calendarComponentRef.current.getApi();
		calendarApi.gotoDate('2000-01-01');
		// calendarApi.next();
	};

	// why is it not working ?
	// const handleDateClick = (arg) => (eventTitle, setEventTitle, e) => {
	// 	alert(dialogStatus);
	// 	setDialogStatus(true);
	// 	setCalendarEvents([
	// 		...calendarEvents,
	// 		{
	// 			title: eventTitle,
	// 			start: arg.date,
	// 			allDay: arg.allDay
	// 		}
	// 	]);
	// 	e.preventDefault();
	// 	setEventTitle(null);
	// };

	const addEvent = (eventTitle, setEventTitle, e) => {
		e.preventDefault();
		setCalendarEvents([
			...calendarEvents,
			{
				title: eventTitle,
				start: getarg.start,
				allDay: getarg.allDay
			}
		]);
		console.log(eventTitle);
		console.log(getarg);
		setEventTitle(null);
		setDialogStatus(false);
	};

	const handleDateClick = (arg) => {
		setDialogStatus(true);
		setArg({ start: arg.dateStr, allDay: arg.allDay });
	};

	const handleEventClick = ({ event, view }) => {
		console.log(event);
		let title = prompt('Want to update ' + event.title + '?');
		let filteredEvents = calendarEvents.filter((item) => item.title !== event.title);
		if (title) {
			setCalendarEvents([
				...filteredEvents,
				{
					title: title,
					start: event.start,
					allDay: event.allDay
				}
			]);
		}
	};

	return (
		<div className="w-auto ml-2  text-xs customCalender">
			<div className="demo-app-top hidden">
				<button className="border-2" onClick={toggleWeekends}>
					toggle weekends
				</button>&nbsp;
				<button className="border-2" onClick={gotoPast}>
					go to a date in the past
				</button>&nbsp; (also, click a date/time to add an event)
			</div>
			<div className="demo-app-calendar">
				<FullCalendar
					defaultView="dayGridMonth"
					header={{
						left: 'today,prev,next',
						center: 'title',
						right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeeK'
					}}
					plugins={[ dayGridPlugin, timeGridPlugin, interactionPlugin ]}
					ref={calendarComponentRef}
					weekends={calendarWeekends}
					events={calendarEvents}
					dateClick={handleDateClick}
					eventClick={handleEventClick}
					selectable={true}
					editable={true}
					eventLimit={true}
					selectHelper={true}
				/>
			</div>
			<CustomInputDialog handleSave={addEvent} dialogStatus={dialogStatus} setDialogStatus={setDialogStatus} />
		</div>
	);
};
