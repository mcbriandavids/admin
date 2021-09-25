import React from "react";
import { Container, Row } from "react-grid-system";
import { Link } from "react-router-dom";
const Settings = () => {
	return (
		<div className=' bg-gray-100 min-h-screen capitalize '>
			<div className='bg-indigo-600 py-5'>
				<Container>
					<Row>
						<div className='ml-44 lg:ml-3'>
							<h1 className='text-white lg:text-4xl mr-2 text-2xl lg:text-left text-center space-x-10 font-semibold '>
								settings
							</h1>
						</div>
						<div>
							<i className='fas fa-cog text-white lg:text-5xl ml-2  text-2xl lg:text-left text-center space-x-10  animate-spin'></i>
						</div>
					</Row>
				</Container>
			</div>
			<Container>
				<div className='grid grid-cols-1 max-w-8xl gap-4 Link-8 md:grid-cols-3 my-8 '>
					<div className='bg-green-500 h-14 w-96 mx-auto md:w-80 rounded-md py-4 mt-4 hover:bg-green-700 transition-all duration-1000 '>
						<p className='text-white capitalize text-center text-lg  '>
							<Link to='/admin-dashboard'>
								<i className='fas fa-arrow-left  '> </i>back to dashboard
							</Link>
						</p>
					</div>
					<div className='mb-8'>
						{" "}
						<div className='bg-indigo-600 h-14 w-96 mx-auto md:w-80 rounded-md py-4 mt-4 hover:bg-blue-700 transition-all duration-1000 '>
							<p className='text-white  capitalize text-center text-lg '>
								<Link to='#'>
									<i className='fas fa-edit'> </i> save changes
								</Link>
							</p>
						</div>
					</div>
				</div>
				<div className='bg-gray-200 capitalize w-full '>
					<h1 className='text-2xl font-Poppins font-medium p-4  '>
						edit settings
					</h1>
				</div>
				<form className='w-full mb-24'>
					<div className='bg-gray-100 capitalize '>
						<h1 className='text-sm font-Poppins font-medium p-4  '>
							allow registration
						</h1>
					</div>
					<label className='text-gray-700'>
						<input type='checkbox' value='' />
						<span className='ml-4'>yes</span>
					</label>
					<br />
					<label className='text-gray-700'>
						<input type='checkbox' value='' />
						<span className='ml-4'>no</span>
					</label>
					<div className='bg-gray-100 capitalize '>
						<h1 className='text-sm font-Poppins font-medium p-4  '>
							home page format
						</h1>
					</div>
					<label className='text-gray-700'>
						<input type='checkbox' value='' />
						<span className='ml-4'>yes</span>
					</label>
					<br />
					<label className='text-gray-700'>
						<input type='checkbox' value='' />
						<span className='ml-4'>no</span>
					</label>

		
				</form>
			</Container>
		</div>
	);
};

export default Settings;
