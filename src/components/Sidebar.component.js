import React from 'react';
export const Sidebar = () => {
	return (
		<div className="w-full h-screen90 border text-center">
			<div className="py-2 ml-2 mt-3 mb-3 flex justify-center rounded-full text-xs items-center cursor-pointer shadow-full">
				<div>
					<svg className="w-6 h-6" viewBox="0 0 36 36">
						<path fill="#34A853" d="M16 16v14h4V20z" />
						<path fill="#4285F4" d="M30 16H20l-4 4h14z" />
						<path fill="#FBBC05" d="M6 16v4h10l4-4z" />
						<path fill="#EA4335" d="M20 16V6h-4v14z" />
						<path fill="none" d="M0 0h36v36H0z" />
					</svg>
				</div>
				<div className="ml-1 pr-2">Create</div>
			</div>

			<div>Calender</div>
			<div>
				<input className="w-full border text-xs" type="text" placeholder="Search for people" />
			</div>
			<div>
				<label>My Calenders</label>
				<form action="/action_page.php">
					<input type="checkbox" name="vehicle1" value="Bike" checked /> Firoj Siddiki<br />
					<input type="checkbox" name="vehicle2" value="Car" /> Contacts<br />
					<input type="checkbox" name="vehicle3" value="Boat" /> Remainder<br />
					<input type="checkbox" name="vehicle3" value="Boat" /> Tasks<br />
					<br />
				</form>
			</div>
			<div>
				<label>Other Calenders</label>
				<form>
					<input type="checkbox" name="vehicle3" value="Boat" checked /> I have a boat<br />
				</form>
			</div>
			<footer>
				<p>
					<span>Terms-</span>Privacy
				</p>
			</footer>
		</div>
	);
};
