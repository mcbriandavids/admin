import React from "react";
import { Container, Row, Col } from "react-grid-system";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
	const [showModal, setShowModal] = React.useState(false);
	const [showModal2, setShowModal2] = React.useState(false);
	const [showModal3, setShowModal3] = React.useState(false);
	const [name, setName] = React.useState("");
	const [email, setEmail] = React.useState("");
	const [password, setPassword] = React.useState("");
	const [confirm, setConfirm] = React.useState("");
	const toggleModal = () => {
		setShowModal(!showModal);
	};
	const toggleModal2 = () => {
		setShowModal2(!showModal2);
	};
	const toggleModal3 = () => {
		setShowModal3(!showModal3);
	};
	return (
		<div className=' bg-gray-100 min-h-screen '>
			<div className='bg-indigo-600 py-5'>
				<Container>
					<Row>
						<div className='ml-44 lg:ml-4'>
							<h1 className='text-white lg:text-4xl mr-2 text-2xl lg:text-left text-center space-x-10 font-semibold shadow-md '>
								Dashboard
							</h1>
						</div>
						<div>
							<i className='fas fa-cog text-white lg:text-5xl ml-2  text-2xl lg:text-left text-center space-x-10  animate-spin'></i>
						</div>
					</Row>
				</Container>
			</div>
			<div className=' grid  place-content-center min-h-screen   '>
				<div className='grid grid-cols-1 max-w-8xl gap-4 Link-8 md:grid-cols-3 '>
					<div className='bg-green-500 h-14 w-96 mx-auto md:w-80 rounded-md py-4 mt-4 hover:bg-green-700 transition-all duration-1000 '>
						<p className='text-white capitalize text-center text-lg  '>
							<Link to='#' onClick={toggleModal}>
								<i className='fas fa-plus  '> </i>Add Post
							</Link>
						</p>
					</div>
					<div className='bg-indigo-600 h-14 w-96 mx-auto md:w-80 rounded-md py-4 mt-4 hover:bg-blue-700 transition-all duration-1000 '>
						<p className='text-white  capitalize text-center text-lg '>
							<Link to='#' onClick={toggleModal2}>
								<i className='fas fa-plus'> </i>Add Category
							</Link>
						</p>
					</div>
					<div className='bg-yellow-400  h-14 w-96 mx-auto md:w-80 rounded-md py-4 mt-4 hover:bg-yellow-700 transition-all duration-1000 '>
						<p className='text-white capitalize  text-center text-lg '>
							<Link to='#' onClick={toggleModal3}>
								<i className='fas fa-plus'> </i>Add user
							</Link>
						</p>
					</div>
				</div>
				<section className='mt-8'>
					<Row>
						<Col md={9}>
							{" "}
							
							<h1 className='text-2xl font-Poppins font-medium ml-4'>
								Latest Posts
							</h1>
							<table className='shadow-lg bg-white '>
								<thead>
									<tr>
										<th className='bg-indigo-600 text-white font-Poppins font-medium border text-center   '>
											#
										</th>
										<th className='bg-indigo-600 text-white font-Poppins font-medium border text-center px-2 py-4 md:w-40  '>
											Title
										</th>
										<th className='bg-indigo-600 text-white font-Poppins font-medium border text-center px-4 py-4 md:w-40  '>
											Category
										</th>
										<th className='bg-indigo-600 text-white font-Poppins font-medium border text-center px-4 py-4 md:w-40  '>
											Date
										</th>
										<th className='bg-indigo-600 text-white font-Poppins font-medium border text-center px-4 py-2 md:w-40  '>
											View
										</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td className='border px-4 py-4'>1 </td>
										<td className='border px-4 py-4'>Post One </td>
										<td className='border px-4 py-4'>Web Development </td>
										<td className='border px-2 '> 20/09/2021 </td>
										<td className=' border text-center '>
											<Link
												to='/details'
												className='bg-indigo-600 text-white text-sm p-1 border-2 rounded-md shadow-md hover:opacity-40 transition-all duration-1000 '>
												<i className='fas fa-angle-double-right '></i> Details
											</Link>
										</td>
									</tr>
									<tr>
										<td className='border px-4 py-4'>2 </td>
										<td className='border px-4 py-4'>Post Two </td>
										<td className='border px-4 py-4'>Docker </td>
										<td className='border px-2 '> 19/09/2021 </td>
										<td className=' border text-center '>
											<Link
												to='/details'
												className='bg-indigo-600 text-white text-sm p-1 border-2 rounded-md shadow-md hover:opacity-40 transition-all duration-1000'>
												<i className='fas fa-angle-double-right '></i> Details
											</Link>
										</td>
									</tr>
									<tr>
										<td className='border px-4 py-4'>3 </td>
										<td className='border px-4 py-4'>Post Three </td>
										<td className='border px-4 py-4'>Javascript </td>
										<td className='border px-2 '> 18/09/2021 </td>
										<td className=' border text-center '>
											<Link
												to='/details'
												className='bg-indigo-600 text-white text-sm p-1 border-2 rounded-md shadow-md hover:opacity-40 transition-all duration-1000'>
												<i className='fas fa-angle-double-right '></i>Details
											</Link>
										</td>
									</tr>
									<tr>
										<td className='border px-4 py-4'>4 </td>
										<td className='border px-4 py-4'>Post Four </td>
										<td className='border px-4 py-4'>Typescript </td>
										<td className='border px-2 '> 17/09/2021 </td>
										<td className=' border text-center '>
											<Link
												to='/details'
												className='bg-indigo-600 text-white text-sm p-1 border-2 rounded-md shadow-md hover:opacity-40 transition-all duration-1000 '>
												<i className='fas fa-angle-double-right '></i> Details
											</Link>
										</td>
									</tr>
									<tr>
										<td className='border px-4 py-4'>5 </td>
										<td className='border px-4 py-4'>Post Five </td>
										<td className='border px-4 py-4'>Frontend Developer </td>
										<td className='border px-2 '> 16/09/2021 </td>
										<td className=' border text-center '>
											<Link
												to='/details'
												className='bg-indigo-600 text-white text-sm p-1 border-2 rounded-md shadow-md hover:opacity-40 transition-all duration-1000 '>
												<i className='fas fa-angle-double-right '></i> Details
											</Link>
										</td>
									</tr>
								</tbody>
							</table>
						</Col>
						<Col md={3}>
							<div className='  flex-col justify-center content-center mt-8 bg-indigo-600 rounded-sm h-48 w-full ml-1   py-3  '>
								{" "}
								<p className='  text-white text-center py-8 text-4xl'>
									<span>6</span> Posts
								</p>
								<p className='text-center '>
									<i className='fas fa-pencil-alt text-white text-3xl '></i>{" "}
									<Link
										to='/posts'
										className='  text-sm border p-1 text-white rounded-md hover:opacity-40 transition-all duration-1000 '>
										view
									</Link>
								</p>
							</div>
							<div className='  flex-col justify-center content-center mt-8 bg-green-600  rounded-sm h-48 w-full ml-1   py-3  '>
								{" "}
								<p className='  text-white text-center py-8 text-4xl'>
									<span>4</span> Categories
								</p>
								<p className='text-center '>
									<i className='fas fa-folder text-white text-3xl '></i>{" "}
									<Link
										to='/categories'
										className='  text-sm border p-1 text-white rounded-md hover:opacity-40 transition-all duration-1000 '>
										view
									</Link>
								</p>
							</div>
							<div className='  flex-col justify-center content-center mt-8 mb-8 bg-yellow-400  rounded-sm h-48 w-full ml-1   py-3  '>
								{" "}
								<p className='  text-white text-center py-8 text-4xl'>
									<span>4</span> User
								</p>
								<p className='text-center '>
									<i className='fas fa-user text-white text-3xl '></i>{" "}
									<Link
										to='/users'
										className='  text-sm border p-1 text-white rounded-md hover:opacity-40 transition-all duration-1000 '>
										view
									</Link>
								</p>
							</div>
						</Col>
					</Row>
				</section>
			</div>

			<>
				{showModal ? (
					<>
						<div className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none w-full'>
							<div className='relative w-auto my-6  mx-auto max-w-3xl'>
								{/*content*/}
								<div className='border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none'>
									{/*header*/}
									<div className='flex items-start justify-between bg-indigo-600 text-white p-5 border-b border-solid border-blueGray-200 rounded-t'>
										<h3 className='text-3xl font-semibold'>Add Post</h3>
									</div>
									{/*body*/}
									<div className='relative p-2 flex-auto'>
										<form className='my-4 text-blueGray-500 text-lg leading-relaxed '>
											I always felt like I could do anything. That’s the main
											thing people are controlled by!
											<div className='mb-5 relative mt-3'>
												<input
													type='text'
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
														placeholder='Enter some long form content.'
														className='border-2 rounded-md w-full p-2 mt-1 outline-none'></textarea>
												</label>
											</div>
										</form>
									</div>
									{/*footer*/}
									<div className='flex items-center justify-between p-6 border-t border-solid border-blueGray-200 rounded-b'>
										<button
											className='text-indigo-600 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
											type='button'
											onClick={() => setShowModal(false)}>
											Close
										</button>
										<button
											className='bg-emerald-500 text-white bg-indigo-600 active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
											type='button'
											onClick={() => setShowModal(false)}>
											Save
										</button>
									</div>
								</div>
							</div>
						</div>
						<div className='opacity-25 fixed inset-0 z-40 bg-black'></div>
					</>
				) : null}
			</>
			<>
				{showModal2 ? (
					<>
						<div className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none'>
							<div className='relative w-auto my-6  mx-auto max-w-3xl'>
								{/*content*/}
								<div className='border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none'>
									{/*header*/}
									<div className='flex items-start justify-between bg-indigo-600 text-white p-5 border-b border-solid border-blueGray-200 rounded-t'>
										<h3 className='text-3xl font-semibold'>Add Category</h3>
									</div>
									{/*body*/}
									<div className='relative p-2 flex-auto'>
										<form className='my-4 text-blueGray-500 text-lg leading-relaxed '>
											I always felt like I could do anything. That’s the main
											thing people are controlled by!{" "}
											<div className='mb-5 relative mt-3'>
												<input
													type='text'
													className='peer pt-8 border border-gray-200 focus:outline-none rounded-md focus:border-gray-500 focus:shadow-sm w-full p-3 h-16 placeholder-transparent'
													placeholder='name@example.com'
													autoComplete='off'
												/>
												<label
													htmlFor='Title'
													className='peer-placeholder-shown:opacity-100   opacity-75 peer-focus:opacity-75 peer-placeholder-shown:scale-100 scale-75 peer-focus:scale-75 peer-placeholder-shown:translate-y-0 -translate-y-3 peer-focus:-translate-y-3 peer-placeholder-shown:translate-x-0 translate-x-1 peer-focus:translate-x-1 absolute top-0 left-0 px-3 py-5 h-full pointer-events-none transform origin-left transition-all duration-100 ease-in-out'>
													Title
												</label>
											</div>
										</form>
									</div>
									{/*footer*/}
									<div className='flex items-center justify-between p-6 border-t border-solid border-blueGray-200 rounded-b'>
										<button
											className='text-indigo-600 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
											type='button'
											onClick={() => setShowModal2(false)}>
											Close
										</button>
										<button
											className='bg-emerald-500 text-white bg-indigo-600 active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
											type='button'
											onClick={() => setShowModal2(false)}>
											Save
										</button>
									</div>
								</div>
							</div>
						</div>
						<div className='opacity-25 fixed inset-0 z-40 bg-black'></div>
					</>
				) : null}
			</>
			<>
				{showModal3 ? (
					<>
						<div className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none'>
							<div className='relative w-auto my-6  mx-auto max-w-3xl'>
								{/*content*/}
								<div className='border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none'>
									{/*header*/}
									<div className='flex items-start justify-between bg-indigo-600 text-white p-5 border-b border-solid border-blueGray-200 rounded-t'>
										<h3 className='text-3xl font-semibold'>Add User</h3>
									</div>
									{/*body*/}
									<div className='relative p-2 flex-auto'>
										<form className='my-4 text-blueGray-500 text-lg leading-relaxed '>
											I always felt like I could do anything. That’s the main
											thing people are controlled by!{" "}
											<div className='mb-5 relative mt-2'>
												<input
													type='name'
													value={name}
													onChange={(e) => setName(e.target.value)}
													className='peer pt-8 border border-gray-200 focus:outline-none rounded-md focus:border-gray-500 focus:shadow-sm w-full p-3 h-16 placeholder-transparent'
													placeholder='name@example.com'
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
													type='email'
													value={email}
													onChange={(e) => setEmail(e.target.value)}
													className='peer pt-8 border border-gray-200 focus:outline-none rounded-md focus:border-gray-500 focus:shadow-sm w-full p-3 h-16 placeholder-transparent'
													placeholder='name@example.com'
													autoComplete='off'
												/>
												<label
													htmlFor='email'
													className='peer-placeholder-shown:opacity-100   opacity-75 peer-focus:opacity-75 peer-placeholder-shown:scale-100 scale-75 peer-focus:scale-75 peer-placeholder-shown:translate-y-0 -translate-y-3 peer-focus:-translate-y-3 peer-placeholder-shown:translate-x-0 translate-x-1 peer-focus:translate-x-1 absolute top-0 left-0 px-3 py-5 h-full pointer-events-none transform origin-left transition-all duration-100 ease-in-out'>
													Email
												</label>
											</div>
											<div className='mb-5 relative'>
												<input
													type='password'
													value={password}
													onChange={(e) => setPassword(e.target.value)}
													className='peer pt-8 border border-gray-200 focus:outline-none rounded-md focus:border-gray-500 focus:shadow-sm w-full p-3 h-16 placeholder-transparent'
													placeholder='password'
													autoComplete='off'
												/>
												<label
													htmlFor='password'
													className='peer-placeholder-shown:opacity-100   opacity-75 peer-focus:opacity-75 peer-placeholder-shown:scale-100 scale-75 peer-focus:scale-75 peer-placeholder-shown:translate-y-0 -translate-y-3 peer-focus:-translate-y-3 peer-placeholder-shown:translate-x-0 translate-x-1 peer-focus:translate-x-1 absolute top-0 left-0 px-3 py-5 h-full pointer-events-none transform origin-left transition-all duration-100 ease-in-out'>
													Password
												</label>
											</div>
											<div className='mb-5 relative'>
												<input
													type='confirm'
													value={confirm}
													onChange={(e) => setConfirm(e.target.value)}
													className='peer pt-8 border border-gray-200 focus:outline-none rounded-md focus:border-gray-500 focus:shadow-sm w-full p-3 h-16 placeholder-transparent'
													placeholder='password'
													autoComplete='off'
												/>
												<label
													htmlFor='confirm'
													className='peer-placeholder-shown:opacity-100   opacity-75 peer-focus:opacity-75 peer-placeholder-shown:scale-100 scale-75 peer-focus:scale-75 peer-placeholder-shown:translate-y-0 -translate-y-3 peer-focus:-translate-y-3 peer-placeholder-shown:translate-x-0 translate-x-1 peer-focus:translate-x-1 absolute top-0 left-0 px-3 py-5 h-full pointer-events-none transform origin-left transition-all duration-100 ease-in-out'>
													Confirm Password
												</label>
											</div>
										</form>
									</div>
									{/*footer*/}
									<div className='flex items-center justify-between p-6 border-t border-solid border-blueGray-200 rounded-b'>
										<button
											className='text-indigo-600 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
											type='button'
											onClick={() => setShowModal3(false)}>
											Close
										</button>
										<button
											className='bg-emerald-500 text-white bg-indigo-600 active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
											type='button'
											onClick={() => setShowModal3(false)}>
											Save
										</button>
									</div>
								</div>
							</div>
						</div>
						<div className='opacity-25 fixed inset-0 z-40 bg-black'></div>
					</>
				) : null}
			</>
		</div>
	);
};

export default AdminDashboard;
