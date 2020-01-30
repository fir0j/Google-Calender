import React, { useState } from 'react';
import { Navbar } from './components/Navbar.component';
import { LeftBar } from './components/LeftBar.component';
import { EventCalender } from './components/EventCalender.component';
import { RightBar } from './components/RightBar.component';

function App() {
	const [ showSidebar, setShowSidebar ] = useState(true);

	const toggleSidebar = () => {
		setShowSidebar(!showSidebar);
	};

	return (
		<main>
			<Navbar toggleSidebar={toggleSidebar} />
			<hr />
			{showSidebar === true ? (
				<div className="flex w-full">
					<div className="w-56 flex-none">
						<LeftBar />
					</div>
					<div className="w-full">
						<EventCalender />
					</div>
					<div className="w-16 h-screen90 flex-none text-center text-xs">
						<RightBar />
					</div>
				</div>
			) : (
				<div className="flex w-full">
					<div className="w-full">
						<EventCalender />
					</div>
					<div className="w-16 h-screen90 flex-none  text-center text-xs">
						<RightBar />
					</div>
				</div>
			)}
		</main>
	);
}

export default App;
