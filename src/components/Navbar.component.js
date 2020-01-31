import React from 'react';
import Previous from '../assests/previous.svg';
import Next from '../assests/next.svg';

export const Navbar = ({ toggleSidebar, navBarDate }) => {
	return (
		<nav className="flex justify-between text-xs my-2">
			<div className="w-2/12 flex justify-around items-center">
				<button
					className="p-1 inline-block hover:border rounded-full hover:bg-gray-200 focus:outline-none"
					onClick={toggleSidebar}
				>
					<svg className="w-6 h-6 fill-current text-gray-700" focusable="false" viewBox="0 0 24 24">
						<path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
					</svg>
				</button>
				<label className="flex">
					<img
						className="w-8 h-8"
						alt="calender"
						src="https://ssl.gstatic.com/calendar/images/dynamiclogo/2x/cal_28_v1.png"
						srcSet="https://ssl.gstatic.com/calendar/images/dynamiclogo/2x/cal_28_v1.png 1x, https://ssl.gstatic.com/calendar/images/dynamiclogo/2x/cal_28_v1.png 2x "
					/>
				</label>
				<span>Calendar</span>
			</div>

			<div className="flex w-8/12 justify-between">
				<div className="flex items-center">
					<span className="mr-4">
						<button className="inline-block border rounded px-2 py-1 ">Today</button>
					</span>
					<span className="mr-4">
						<img className="w-3 h-3 " src={Previous} alt="" />
					</span>
					<span className="mr-4">
						<img className="w-3 h-3" src={Next} alt="" />
					</span>
					<span className="font-medium text-gray-700 tracking-wider">{navBarDate}</span>
				</div>
				<div className="flex items-center">
					<span className="mr-4">
						<svg
							className="inline-block h-6 pl-4 fill-current text-gray-600"
							focusable="false"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
						>
							<path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
						</svg>
						{/* <img className="w-5 h-5 opacity-50" src={Search} alt="" /> */}
					</span>
					<span className="mr-4">
						<svg className=" w-6 h-6 fill-current text-gray-600" viewBox="0 0 24 24" focusable="false">
							<path d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z" />
						</svg>
					</span>
					<span className="mr-4">
						<svg className="w-6 h-6 fill-current text-gray-600" viewBox="0 0 24 24" focusable="false">
							<path d="M13.85 22.25h-3.7c-.74 0-1.36-.54-1.45-1.27l-.27-1.89c-.27-.14-.53-.29-.79-.46l-1.8.72c-.7.26-1.47-.03-1.81-.65L2.2 15.53c-.35-.66-.2-1.44.36-1.88l1.53-1.19c-.01-.15-.02-.3-.02-.46 0-.15.01-.31.02-.46l-1.52-1.19c-.59-.45-.74-1.26-.37-1.88l1.85-3.19c.34-.62 1.11-.9 1.79-.63l1.81.73c.26-.17.52-.32.78-.46l.27-1.91c.09-.7.71-1.25 1.44-1.25h3.7c.74 0 1.36.54 1.45 1.27l.27 1.89c.27.14.53.29.79.46l1.8-.72c.71-.26 1.48.03 1.82.65l1.84 3.18c.36.66.2 1.44-.36 1.88l-1.52 1.19c.01.15.02.3.02.46s-.01.31-.02.46l1.52 1.19c.56.45.72 1.23.37 1.86l-1.86 3.22c-.34.62-1.11.9-1.8.63l-1.8-.72c-.26.17-.52.32-.78.46l-.27 1.91c-.1.68-.72 1.22-1.46 1.22zm-3.23-2h2.76l.37-2.55.53-.22c.44-.18.88-.44 1.34-.78l.45-.34 2.38.96 1.38-2.4-2.03-1.58.07-.56c.03-.26.06-.51.06-.78s-.03-.53-.06-.78l-.07-.56 2.03-1.58-1.39-2.4-2.39.96-.45-.35c-.42-.32-.87-.58-1.33-.77l-.52-.22-.37-2.55h-2.76l-.37 2.55-.53.21c-.44.19-.88.44-1.34.79l-.45.33-2.38-.95-1.39 2.39 2.03 1.58-.07.56a7 7 0 0 0-.06.79c0 .26.02.53.06.78l.07.56-2.03 1.58 1.38 2.4 2.39-.96.45.35c.43.33.86.58 1.33.77l.53.22.38 2.55z" />
							<circle cx="12" cy="12" r="3.5" />
						</svg>
					</span>
					<span>
						<button className="px-2 py-1 border rounded text-gray-800">Week</button>
					</span>
				</div>
			</div>

			<div className="w-2/12 flex items-center justify-end">
				<a href=" " className="inline-block">
					<svg className="w-6 h-6 fill-current text-gray-600" focusable="false" viewBox="0 0 24 24">
						<path d="M6,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM16,6c0,1.1 0.9,2 2,2s2,-0.9 2,-2 -0.9,-2 -2,-2 -2,0.9 -2,2zM12,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2z" />
					</svg>
				</a>

				<a className="w-6 h-6 mr-5 ml-4 inline-block" href="# ">
					<img
						className="inline-block rounded-full"
						alt="profile icon"
						src="https://res.cloudinary.com/wilfredxd/image/upload/v1471790653/blueperson_i3ahzk.png"
					/>
				</a>
			</div>
		</nav>
	);
};
