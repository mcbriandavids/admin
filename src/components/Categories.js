import React from "react";
import { Container } from "react-grid-system";
import { Link } from "react-router-dom";

const Categories = () => {
	return (
		<div className=' bg-gray-100 min-h-screen '>
			<div className='bg-indigo-600 py-5'>
				<Container>
					<div className='ml-44 lg:-ml-1'>
						<h1 className='text-white lg:text-4xl mr-2 text-2xl lg:text-left mx-auto space-x-10 font-semibold   '>
							Categories{" "}
							<i className='fas fa-folder text-white text-3xl animate-bounce '></i>
						</h1>
					</div>
				</Container>
			</div>
			<Container>
				<div className='flex py-8  border-gray-50 '>
					<input
						className='w-full lg:w-1/3 rounded-sm ml-auto outline-none border border-indigo-600'
						type='text'
						placeholder='Search...'
					/>
					<button className='bg-indigo-600 text-white border-indigo-600 rounded-sm'>
						{" "}
						<span className='w-auto flex justify-end items-center text-grey p-2 lg:p-4 hover:text-grey-darkest mr-2 hover:opacity-40 transition-all duration-1000 font-medium font-Poppins'>
							<i className='fas fa-search text-xs '> Search</i>
						</span>
					</button>
				</div>
				<h1 className='text-2xl font-Poppins font-medium '>Latest Categories</h1>
				<table className='shadow-lg bg-white w-full capitalize '>
					<thead>
						<tr>
							<th className='bg-indigo-600 text-white font-Poppins font-medium border text-center  py-4 md:w-10  '>
								details
							</th>
							<th className='bg-indigo-600 text-white font-Poppins font-medium border text-center px-2 py-4 md:w-40  '>
								Title
							</th>
							<th className='bg-indigo-600 text-white font-Poppins font-medium border text-center px-4 py-4 md:w-40  '>
								Date
							</th>
							<th className='bg-indigo-600 text-white font-Poppins font-medium border text-center px-4 py-2 w-full md:w-40  '>
								View
							</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td className='border px-4 py-4'>1 </td>
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
							<td className='border px-4 py-4'>Docker</td>
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
							<td className='border px-4 py-4'>Backend Developer </td>
							<td className='border px-2 '> 17/09/2021 </td>
							<td className=' border text-center '>
																<Link
									to='/details'
									className='bg-indigo-600 text-white text-sm p-1 border-2 rounded-md shadow-md hover:opacity-40 transition-all duration-1000'>
									<i className='fas fa-angle-double-right '></i>Details
								</Link>
							</td>
						</tr>
					</tbody>
				</table>
				<div className='flex items-center space-x-1 capitalize py-4'>
					<Link
						to='/details'
						className='flex items-center px-4 py-2 border   text-black rounded-sm hover:bg-indigo-100 transition-all duration-1000'>
						previous
					</Link>
					<Link
						to='/details'
						className='flex items-center px-4 py-2 border   text-black rounded-sm hover:bg-indigo-100 transition-all duration-1000'>
						1
					</Link>
					<Link
						to='/details'
						className='flex items-center px-4 py-2 border   text-black rounded-sm hover:bg-indigo-100 transition-all duration-1000'>
						2
					</Link>
					<Link
						to='/details'
						className='flex items-center px-4 py-2 border   text-black rounded-sm hover:bg-indigo-100 transition-all duration-1000'>
						3
					</Link>
					<Link
						to='/details'
						className='flex items-center px-4 py-2 border   text-black rounded-sm hover:bg-indigo-100 transition-all duration-1000'>
						4
					</Link>
					<Link
						to='/details'
						className='flex items-center px-4 py-2 border   text-black rounded-sm hover:bg-indigo-100 transition-all duration-1000'>
						next
					</Link>
				</div>
			</Container>
		</div>
	);
};

export default Categories;
