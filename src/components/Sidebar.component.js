import React from 'react';
export const Sidebar = () => {
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
