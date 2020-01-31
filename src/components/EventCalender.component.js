import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import '../fullCalendar.scss';

export const EventCalender = () => {
	return (
		<div className="w-auto ml-2  text-xs opacity-50">
			<FullCalendar defaultView="dayGridMonth" plugins={[ dayGridPlugin ]} />
		</div>
	);
};
