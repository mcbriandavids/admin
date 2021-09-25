import React from "react";
import { Container, Row, Col } from "react-grid-system";
import { Link } from "react-router-dom";
import avatar from "../avatar/avatar.png";

const Profile = () => {
	const [changePassword, setChangePassword] = React.useState(false);

	return (
		<Container>
			<div className='grid grid-cols-1 max-w-8xl gap-4 Link-8 md:grid-cols-3 my-8 '>
				<div className='bg-green-500 h-14 w-96 mx-auto md:w-80 rounded-md py-4 mt-4 hover:bg-green-700 transition-all duration-1000 '>
					<p className='text-white capitalize text-center text-lg  '>
						<Link to='/admin-dashboard'>
							<i className='fas fa-arrow-left  '> </i>back to dashboard
						</Link>
					</p>
				</div>
				<div className='bg-indigo-600 h-14 w-96 mx-auto md:w-80 rounded-md py-4 mt-4 hover:bg-blue-700 transition-all duration-1000 '>
					<p className='text-white  capitalize text-center text-lg '>
						<Link to='#' onClick={() => setChangePassword(!changePassword)}>
							<i className='fas fa-lock'> </i> change password
						</Link>
					</p>
				</div>
				<div className='bg-yellow-400  h-14 w-96 mx-auto md:w-80 rounded-md py-4 mt-4 hover:bg-yellow-700 transition-all duration-1000 '>
					<p className='text-white capitalize  text-center text-lg '>
						<Link to='#'>
							<i className='fas fa-trash'> </i> delete account
						</Link>
					</p>
				</div>
			</div>

			<div className='bg-gray-100 my-20 '>
				<Row>
					<Col md={8}>
						<div className='bg-gray-100 capitalize'>
							<h1 className='text-2xl font-Poppins font-medium p-4  '>
								edit profile
							</h1>
						</div>
						<div className='bg-white'>
							<form className='w-full'>
								<div className='mb-5 relative'>
									<input
										type='text'
										value='Brian Ruiz'
										className='peer pt-8 border border-gray-200 focus:outline-none rounded-md focus:border-gray-500 focus:shadow-sm w-full p-3 h-16 placeholder-transparent'
										placeholder='Enter Full Name'
										autoComplete='off'
									/>
									<label
										htmlFor='email'
										className='peer-placeholder-shown:opacity-100   opacity-75 peer-focus:opacity-75 peer-placeholder-shown:scale-100 scale-75 peer-focus:scale-75 peer-placeholder-shown:translate-y-0 -translate-y-3 peer-focus:-translate-y-3 peer-placeholder-shown:translate-x-0 translate-x-1 peer-focus:translate-x-1 absolute top-0 left-0 px-3 py-5 h-full pointer-events-none transform origin-left transition-all duration-100 ease-in-out'>
										Name
									</label>
								</div>
								<div className='mb-5 relative'>
									<input
										type='text'
										value='brianruiz@gmail.com'
										className='peer pt-8 border border-gray-200 focus:outline-none rounded-md focus:border-gray-500 focus:shadow-sm w-full p-3 h-16 placeholder-transparent'
										placeholder='password'
										autoComplete='off'
									/>
									<label
										htmlFor='email'
										className='peer-placeholder-shown:opacity-100   opacity-75 peer-focus:opacity-75 peer-placeholder-shown:scale-100 scale-75 peer-focus:scale-75 peer-placeholder-shown:translate-y-0 -translate-y-3 peer-focus:-translate-y-3 peer-placeholder-shown:translate-x-0 translate-x-1 peer-focus:translate-x-1 absolute top-0 left-0 px-3 py-5 h-full pointer-events-none transform origin-left transition-all duration-100 ease-in-out'>
										email
									</label>
								</div>
								<div className='mb-5 relative'>
									<span>Bio</span>
									<textarea
										rows='3'
										placeholder='Enter user bio'
										className='border-2 rounded-md w-full p-2 mt-1 outline-none'>
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
										Temporibus labore dolorem fugiat voluptatem cum voluptate
										facilis quae corporis excepturi qui!
									</textarea>
									<label
										htmlFor='bio'
										className='peer-placeholder-shown:opacity-100   opacity-75 peer-focus:opacity-75 peer-placeholder-shown:scale-100 scale-75 peer-focus:scale-75 peer-placeholder-shown:translate-y-0 -translate-y-3 peer-focus:-translate-y-3 peer-placeholder-shown:translate-x-0 translate-x-1 peer-focus:translate-x-1 absolute top-0 left-0 px-3 py-5 h-full pointer-events-none transform origin-left transition-all duration-100 ease-in-out'></label>
								</div>
								<button className='w-1/6 bg-indigo-600  text-white p-3 rounded-md mb-4'>
									save
								</button>
							</form>
						</div>
					</Col>
					<Col md={4}>
						<div className='bg-gray-100 capitalize '>
							<h1 className='text-2xl font-Poppins font-medium p-4 text-center  '>
								your avatar
							</h1>
						</div>
						<div className='relative inline-block'>
							<img
								src={avatar}
								alt='Profile_Image'
								className='inline-block object-cover w-full h-full rounded-md'
							/>
							<span className=' absolute align-bottom bottom-0 right-0 inline-block w-6 h-6 bg-indigo-600 border-2 border-white rounded-full'></span>
						</div>
						<div className='mb-8'>
							{" "}
							<div className='bg-indigo-600 h-14 w-96 mx-auto md:w-80 rounded-md py-4 mt-4 hover:bg-blue-700 transition-all duration-1000 '>
								<p className='text-white  capitalize text-center text-lg '>
									<Link to='#'>
										<i className='fas fa-edit'> </i> Edit Image
									</Link>
								</p>
							</div>
							<div className='bg-yellow-400  h-14 w-96 mx-auto md:w-80 rounded-md py-4 mt-4 hover:bg-yellow-700 transition-all duration-1000 '>
								<p className='text-white capitalize  text-center text-lg '>
									<Link to='#'>
										<i className='fas fa-trash'> </i> delete image
									</Link>
								</p>
							</div>
						</div>
					</Col>
				</Row>
			</div>
			{changePassword ? (
				<>
					<div className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none w-full'>
						<div className='relative w-auto my-6  mx-auto max-w-3xl'>
							{/*content*/}
							<div className='border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none'>
								{/*header*/}
								<div className='flex items-start justify-between bg-indigo-600 text-white p-5 border-b border-solid border-blueGray-200 rounded-t'>
									<h3 className='text-3xl font-semibold'>Change Password</h3>
								</div>
								{/*body*/}
								<div className='relative p-2 flex-auto'>
									<form className='my-4 text-blueGray-500 text-lg leading-relaxed '>
										Lorem, ipsum dolor sit amet consectetur adipisicing elit.
										Esse temporibus doloribus eum iste inventore
										<div className='mb-5 relative mt-3'>
											<input
												type='text'
												className='peer pt-8 border border-gray-200 focus:outline-none rounded-md focus:border-gray-500 focus:shadow-sm w-full p-3 h-16 placeholder-transparent'
												autoComplete='off'
												placeholder='Ogheneyoma Kendra'
											/>
											<label
												htmlFor='old password'
												className='peer-placeholder-shown:opacity-100   opacity-75 peer-focus:opacity-75 peer-placeholder-shown:scale-100 scale-75 peer-focus:scale-75 peer-placeholder-shown:translate-y-0 -translate-y-3 peer-focus:-translate-y-3 peer-placeholder-shown:translate-x-0 translate-x-1 peer-focus:translate-x-1 absolute top-0 left-0 px-3 py-5 h-full pointer-events-none transform origin-left transition-all duration-100 ease-in-out'>
												Old Password
											</label>
										</div>
										<div className='mb-5 relative mt-3'>
											<input
												type='text'
												className='peer pt-8 border border-gray-200 focus:outline-none rounded-md focus:border-gray-500 focus:shadow-sm w-full p-3 h-16 placeholder-transparent'
												autoComplete='off'
												placeholder='Ogheneyoma Kendra'
											/>
											<label
												htmlFor='old password'
												className='peer-placeholder-shown:opacity-100   opacity-75 peer-focus:opacity-75 peer-placeholder-shown:scale-100 scale-75 peer-focus:scale-75 peer-placeholder-shown:translate-y-0 -translate-y-3 peer-focus:-translate-y-3 peer-placeholder-shown:translate-x-0 translate-x-1 peer-focus:translate-x-1 absolute top-0 left-0 px-3 py-5 h-full pointer-events-none transform origin-left transition-all duration-100 ease-in-out'>
												New Password
											</label>
										</div>
									</form>
								</div>
								{/*footer*/}
								<div className='flex items-center justify-between p-6 border-t border-solid border-blueGray-200 rounded-b'>
									<button
										className='text-indigo-600 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
										type='button'
										onClick={() => setChangePassword(false)}>
										<i className='fas fa-time'></i>close
									</button>
									<button
										className='bg-emerald-500 text-white bg-indigo-600 active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
										type='button'
										onClick={() => setChangePassword(false)}>
										Save
									</button>
								</div>
							</div>
						</div>
					</div>
				</>
			) : null}
		</Container>
	);
};

export default Profile;
