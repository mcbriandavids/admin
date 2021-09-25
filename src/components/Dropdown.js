import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react/cjs/react.development";

const dropdownItems = [
	{
		name: "profile",
		url: "/profile",
		icon: <i className='fas fa-user'></i>,
	},
	{
		name: "settings",
		url: "/settings",
		icon: <i className='fas fa-cog'></i>,
	},
];

const Dropdown = () => {
	const [click, setClick] = useState(false);

	return (
		<>
			{dropdownItems.map((dropdown, index) => (
				<ul key={index}>
					<li className={click ? "" : ""}>
						<Link
							to={dropdown.url}
							onClick={() => setClick(false)}
							className='p-2 block  text-center  text-sm text-indigo-600 hover:text-white transition-all duration-1000 capitalize'>
							{dropdown.icon} {dropdown.name}
						</Link>
					</li>
				</ul>
			))}
		</>
	);
};

export default Dropdown;
