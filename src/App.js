import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar.component';
import { LeftBar } from './components/LeftBar.component';
import { EventCalender } from './components/EventCalender.component';
import { RightBar } from './components/RightBar.component';

function App() {
	const [ showSidebar, setShowSidebar ] = useState(true);
	const [ selectedDay, setSelectedDay ] = useState(new Date());
	const [ navBarDate, setNavBarDate ] = useState();
	const [ calendarEvents, setCalendarEvents ] = useState([ { title: 'custom event', start: '2020-02-02' } ]);

	useEffect(
		() => {
			handleDayClick(new Date());
		},
		// eslint-disable-next-line
		[ selectedDay ]
	);

	const handleDayClick = (date) => {
		setSelectedDay(selectedDay);
		setNavBarDate(date.toLocaleDateString('default', { month: 'long' }) + ' ' + date.getFullYear());
	};

	const toggleSidebar = () => {
		setShowSidebar(!showSidebar);
	};

	return (
		<main>
			<Navbar toggleSidebar={toggleSidebar} navBarDate={navBarDate} />
			<hr />
			{showSidebar === true ? (
				<div className="flex w-full">
					<div className="w-56 hidden landscape:flex sm:flex-none ">
						<LeftBar
							setNavBarDate={setNavBarDate}
							selectedDay={selectedDay}
							handleDayClick={handleDayClick}
							calendarEvents={calendarEvents}
							setCalendarEvents={setCalendarEvents}
						/>
					</div>
					<div className="w-auto m-1 h-screen90 overflow-auto pr-1">
						<EventCalender calendarEvents={calendarEvents} setCalendarEvents={setCalendarEvents} />
					</div>
					<div className="landscape:w-16 max-w-md hidden landscape:flex h-screen90 flex-none text-center ">
						<RightBar />
					</div>
				</div>
			) : (
				<div className="flex w-full">
					<div className="w-full">
						<EventCalender />
					</div>
					<div className="landscape:w-16 max-w-md hidden landscape:flex h-screen90 flex-none  text-center text-xs">
						<RightBar />
					</div>
				</div>
			)}
		</main>
	);
}

export default App;
