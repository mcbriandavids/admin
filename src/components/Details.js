import { Container } from "react-grid-system";
import React from "react";
import { Link } from "react-router-dom";

const Details = () => {
	return (
		<div className=' bg-gray-100 min-h-screen capitalize  '>
			<div className='bg-indigo-600 py-5'>
				<Container>
					<div className='ml-44 lg:ml-2'>
						<h1 className='text-white lg:text-4xl mr-2 text-2xl lg:text-left  space-x-10 font-semibold '>
							post one
						</h1>
					</div>
				</Container>
			</div>
			<Container>
				<div className='grid grid-cols-1 max-w-8xl gap-4 Link-8 md:grid-cols-3 mt-8 '>
					<div className='bg-green-500 h-14 w-96 mx-auto md:w-80 rounded-md py-4 mt-4 hover:bg-green-700 transition-all duration-1000 '>
						<p className='text-white capitalize text-center text-lg  '>
							<Link to='/admin-dashboard'>
								<i className='fas fa-arrow-left  '> </i>back to dashboard
							</Link>
						</p>
					</div>
					<div className='bg-indigo-600 h-14 w-96 mx-auto md:w-80 rounded-md py-4 mt-4 hover:bg-blue-700 transition-all duration-1000 '>
						<p className='text-white  capitalize text-center text-lg '>
							<Link to='#'>
								<i className='fas fa-save'></i> save changes
							</Link>
						</p>
					</div>
					<div className='bg-yellow-400  h-14 w-96 mx-auto md:w-80 rounded-md py-4 mt-4 hover:bg-yellow-700 transition-all duration-1000 '>
						<p className='text-white capitalize  text-center text-lg '>
							<Link to='#'>
								<i className='fas fa-trash'> </i>delete post
							</Link>
						</p>
					</div>
					<div className='bg-gray-100 w-full mt-8'>
						<h1 className='text-2xl font-Poppins font-medium mx-4 '>
							Edit Posts
						</h1>
					</div>
				</div>
				<div className='relative p-2 flex-auto'>
					<form className='my-4 text-blueGray-500 text-lg leading-relaxed '>
						<div className='mb-5 relative mt-3'>
							<input
								type='text'
								value='Post One'
								className='peer pt-8 border border-gray-200 focus:outline-none rounded-md focus:border-gray-500 focus:shadow-sm w-full p-3 h-16 placeholder-transparent'
								autoComplete='off'
								placeholder='name@example.com'
							/>
							<label
								htmlFor='Title'
								className='peer-placeholder-shown:opacity-100   opacity-75 peer-focus:opacity-75 peer-placeholder-shown:scale-100 scale-75 peer-focus:scale-75 peer-placeholder-shown:translate-y-0 -translate-y-3 peer-focus:-translate-y-3 peer-placeholder-shown:translate-x-0 translate-x-1 peer-focus:translate-x-1 absolute top-0 left-0 px-3 py-5 h-full pointer-events-none transform origin-left transition-all duration-100 ease-in-out'>
								Post Title
							</label>
						</div>
						<label className='block '>
							<span className='text-gray-700'>Category</span>
							<select className='border-2 rounded-md w-full p-2 mt-1 outline-none'>
								<option>Docker</option>
								<option>Web Development</option>
								<option>Frontend Developers</option>
								<option>Backend Developers</option>
								<option>Full Stack Developers</option>
								<option>Javascript Developers</option>
								<option>React Developers</option>
							</select>
						</label>
						<div className='mt-4'>
							{" "}
							<label className='Body p-2 '>
								<span className='text-gray-700'>Body</span>
								<textarea
									rows='3'
																	readOnly
									placeholder='Enter some long form content.'
									className='border-2 rounded-md w-full p-2 mt-1 outline-none'>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
									voluptas deserunt mollitia beatae! Magni ducimus iste
									doloribus tempore accusamus, natus unde praesentium, obcaecati
									fugit autem, tempora neque! Quam ipsam eius libero, eveniet
									mollitia aperiam architecto corrupti odio ipsa ad blanditiis
									nulla eligendi minima dolore dolores repellendus maxime eum
									consectetur doloremque!
								</textarea>
							</label>
						</div>
					</form>
				</div>
			</Container>
		</div>
	);
};

export default Details;
