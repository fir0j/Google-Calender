import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { DynamicDialog } from './DynamicDialog.component';
import { CrudDialog } from './CrudDialog.component';
import '../css/sass/fullCalendar.scss';

export const EventCalender = React.forwardRef(({ calendarEvents }, calendarComponentRef) => {
	const [ calendarWeekends, setCalendarWeekends ] = useState(true);
	const [ DDStatus, setDDStatus ] = useState(false);
	const [ CDStatus, setCDStatus ] = useState(false);
	const [ selectedDate, setSelectedDate ] = useState(new Date().toISOString().slice(0, 10));
	const [ eventClicked, setEventClicked ] = useState(null);

	const gotoPast = () => {
		let calendar = calendarComponentRef.current.getApi();
		calendar.gotoDate('2000-01-01');
	};

	const toggleWeekends = () => {
		setCalendarWeekends(!calendarWeekends);
	};

	const handleDateClick = (arg) => {
		setDDStatus(true);
		setSelectedDate(arg.dateStr);
	};

	const handleEventClick = ({ event }) => {
		setEventClicked(event);
		setCDStatus(true);
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
					selectable={false}
					editable={true}
					eventLimit={true}
					selectHelper={false}
				/>
			</div>

			<DynamicDialog
				DDStatus={DDStatus}
				setDDStatus={setDDStatus}
				selectedDay={selectedDate}
				ref={calendarComponentRef}
			/>

			<CrudDialog
				CDStatus={CDStatus}
				setCDStatus={setCDStatus}
				selectedDay={selectedDate}
				eventClicked={eventClicked}
				ref={calendarComponentRef}
			/>
		</div>
	);
});
