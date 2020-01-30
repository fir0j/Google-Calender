import React from 'react';
import Keep from '../assests/keep.png';
import Add from '../assests/add.png';
import Task from '../assests/task.png';

export const RightBar = () => {
	return (
		<div className="flex h-full flex-col items-center justify-between">
			<div className=" h-1/3 flex flex-col justify-around">
				<span className="">
					<img className="w-5 h-5" src={Keep} alt="" />
				</span>

				<span className="">
					<img className="w-5 h-5" src={Task} alt="" />
				</span>

				<span>
					<hr />
				</span>

				<span className="">
					<img className="w-5 h-5" src={Add} alt="" />
				</span>
			</div>

			<div className="">
				<svg
					className="w-5 h-5"
					version="1.1"
					id="Layer_1"
					x="0px"
					y="0px"
					width="20px"
					height="20px"
					viewBox="0 0 24 24"
					enable-background="new 0 0 24 24"
					fill="#5F6368"
				>
					<path d="M8.59,16.59L13.17,12L8.59,7.41L10,6l6,6l-6,6L8.59,16.59z" />
					<path fill="none" d="M0,0h24v24H0V0z" />
				</svg>
			</div>
		</div>
	);
};
