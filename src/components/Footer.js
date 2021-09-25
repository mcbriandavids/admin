import React from "react";

export const Footer = () => {
	const date = new Date().getFullYear();
	return (
		<div className='bg-gray-800 text-center py-6'>
			<p className='text-white text-sm'> CopyRight &copy; {date} </p>
		</div>
	);
};
export default Footer;
