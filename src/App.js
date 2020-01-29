import React, { useState } from 'react';
import { Navbar } from './components/Navbar.component';
import { Sidebar } from './components/Sidebar.component';
import { EventCalender } from './components/EventCalender.component';

function App() {
	const [ showSidebar, setShowSidebar ] = useState(false);

	const toggleSidebar = () => {
		setShowSidebar(!showSidebar);
	};

	return (
		<main>
			<Navbar toggleSidebar={toggleSidebar} />
			<hr />
			{showSidebar === true ? (
				<div className="flex w-full">
					<div className="w-2/12">
						<Sidebar />
					</div>
					<div className="w-10/12">
						<EventCalender />
					</div>
				</div>
			) : (
				<div className="flex w-full">
					<EventCalender />
				</div>
			)}
		</main>
	);
}

export default App;
