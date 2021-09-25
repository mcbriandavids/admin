import { Container } from "react-grid-system";
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<div className='bg-gray-800 py-2'>
			<Container>
				<h4 className='text-center text-indigo-600 p-4  text-2xl leading-10 font-bold  lg:text-left   '>
					<Link to='/'> Blogging</Link>
				</h4>
			</Container>
		</div>
	);
};

export default Header;
