import React from 'react';
import { Navbar } from './components/Navbar.component';

const Sidebar = () => {
	return (
		<div className="w-full border">
			<div>
				<button>Create</button>
			</div>
			<div>Calender</div>
			<div>
				<input className="w-full border" type="text" />
			</div>
			<div>
				<p>My Calenders</p>
			</div>
			<div>
				<p>Other Calenders</p>
			</div>
			<footer>
				<p>
					<span>Terms-</span>Privacy
				</p>
			</footer>
		</div>
	);
};

const EventCalender = () => {
	return (
		<div className="w-full flex justify-center border">
			<p>I am Event Calender</p>
		</div>
	);
};

function App() {
	return (
		<main>
			<Navbar />
			<hr />
			<div className="flex w-full">
				<div className="w-2/12">
					<Sidebar />
				</div>
				<div className="w-10/12">
					<EventCalender />
				</div>
			</div>
		</main>
	);
}

export default App;
