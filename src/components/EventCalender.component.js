import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import '../fullCalendar.scss';
// import { CustomInputDialog } from './CustomInputDialog.component';

export const EventCalender = ({ calendarEvents, setCalendarEvents }) => {
	const [ calendarWeekends, setCalendarWeekends ] = useState(true);
	const calendarComponentRef = React.createRef();

	const toggleWeekends = () => {
		setCalendarWeekends(!calendarWeekends);
	};

	const gotoPast = () => {
		let calendarApi = calendarComponentRef.current.getApi();
		calendarApi.gotoDate('2000-01-01');
		// calendarApi.next();
	};

	const handleDateClick = (arg) => {
		// return (
		// 	<div>
		// 		<CustomInputDialog />
		// 	</div>
		// );
		// alert(arg.dateStr);
		if (window.confirm('want to add an event on ' + arg.dateStr + '?')) {
			console.log(arg);
			setCalendarEvents([
				...calendarEvents,
				{
					title: 'you rocked it firoj',
					start: arg.date,
					allDay: arg.allDay
				}
			]);
		}
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
		<div className="w-auto ml-2  text-xs opacity-50">
			<div className="demo-app-top">
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
		</div>
	);
};
