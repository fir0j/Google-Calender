import React from 'react';
export const LeftBar = () => {
	return (
		<div className="w-full h-screen90 text-center">
			<div className="h-full flex flex-col justify-between">
				<div className="h-full flex flex-col justify-between">
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

					<div className="h-full flex flex-col justify-start ml-6">
						<div className="mb-3 border w-full h-1/3 flex items-center justify-center text-xs ">
							Calender
						</div>

						<div>
							<input
								className="pl-2 h-8 w-full border-b-2 border-transparent rounded rounded-b-none focus:border-blue-600 outline-none text-xs bg-gray-100"
								type="text"
								placeholder="Search for people"
							/>
						</div>

						<div>
							<div>
								<div>
									<label className="my-3 flex text-sm font-medium">My Calenders</label>
									<form className="text-xs">
										<div className="mb-1 flex items-center">
											<input type="checkbox" name="vehicle1" value="user" checked />
											<label>Firoj Siddiki </label>
										</div>

										<div className="mb-1 flex items-center">
											<input type="checkbox" name="vehicle2" value="contacts" />
											<label> Contacts</label>
										</div>

										<div className="mb-1 flex items-center">
											<input type="checkbox" name="vehicle3" value="remainder" />
											<label>Remainder</label>
										</div>
										<div className="flex items-center">
											<input type="checkbox" name="vehicle3" value="tasks" />
											<label>Tasks</label>
										</div>
										<br />
									</form>
								</div>
							</div>
							<div>
								<label className="mb-3 flex text-sm font-medium">Other Calenders</label>
								<form>
									<div className="flex items-center text-xs">
										<input type="checkbox" name="vehicle3" value="Boat" checked /> Holidays in India<br />
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>

			<footer className="ml-6 flex text-xs">
				<p>
					<span>Terms-</span>Privacy
				</p>
			</footer>
		</div>
	);
};
