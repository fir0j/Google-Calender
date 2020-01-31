import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import '../fullCalendar.scss';

export const EventCalender = () => {
	const [ calendarWeekends, setCalendarWeekends ] = useState(true);
	const [ calendarEvents, setCalendarEvents ] = useState([ { title: 'Event Now', start: new Date() } ]);
	const calendarComponentRef = React.createRef();

	const toggleWeekends = () => {
		setCalendarWeekends(!calendarWeekends);
	};

	const gotoPast = () => {
		let calendarApi = calendarComponentRef.current.getApi();
		calendarApi.gotoDate('2000-01-01');
	};

	const handleDateClick = (arg) => {
		setCalendarEvents([
			...calendarEvents,
			{
				title: 'you rocked it firoj',
				start: arg.date,
				allDay: arg.allDay
			}
		]);
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
						left: 'prev,next today',
						center: 'title',
						right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
					}}
					plugins={[ dayGridPlugin, timeGridPlugin, interactionPlugin ]}
					ref={calendarComponentRef}
					weekends={calendarWeekends}
					events={calendarEvents}
					dateClick={handleDateClick}
				/>
			</div>
		</div>
	);
};
