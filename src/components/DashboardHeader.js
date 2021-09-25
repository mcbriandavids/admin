import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Row } from "react-grid-system";
import { BiMenuAltRight } from "react-icons/bi";
import { MdCancel } from "react-icons/md";
import "../components/styles/DashboardHeader.css";
import Dropdown from "./Dropdown";

const DashboardHeader = () => {
	const [navbar, setNavbar] = useState(false);
	const [dropdown, setDropdown] = useState(false);
	const closeMobile = () => {
		setNavbar(false);
	};
	const toggleMenu = () => {
		setNavbar(!navbar);
	};
	const toggleDropdown = () => {
		setDropdown(!dropdown);
	};
	return (
		<div className='bg-gray-800 '>
			<div className='lg:max-w-full  lg:flex '>
				<Container className='nav-header flex justify-between '>
					<h4 className=' text-indigo-600  my-auto text-2xl leading-10 font-bold    '>
						<Link to='/'> Blogging</Link>
					</h4>
					<div onClick={toggleMenu} className='mt-2 ml-auto'>
						{navbar ? (
							<MdCancel className='cursor-pointer text-indigo-600 text-4xl m-4 md:hidden animate-spin' />
						) : (
							<BiMenuAltRight className='cursor-pointer text-indigo-600 text-4xl m-4 md:hidden' />
						)}
					</div>
				</Container>
				<ul className={navbar ? "nav-link show-nav" : "nav-link"}>
					<li className=' mr-8 sm:p-4 '>
						<Link
							to='/admin-dashboard'
							className=' p-4 lg:p-2 block my-auto text-center  text-sm text-white hover:text-indigo-600 transition-all duration-1000 capitalize'
							onClick={closeMobile}>
							dashboard
						</Link>
					</li>
					<li className='mr-8 sm:p-4'>
						<Link
							to='/posts'
							className=' p-4 lg:p-2 block my-auto text-center  text-sm text-white hover:text-indigo-600 transition-all duration-1000 capitalize'
							onClick={closeMobile}>
							posts
						</Link>
					</li>
					<li className='mr-8 sm:p-4'>
						<Link
							to='/categories'
							className='p-4 lg:p-2 block my-auto text-center  text-sm text-white hover:text-indigo-600 transition-all duration-1000 capitalize'
							onClick={closeMobile}>
							categories
						</Link>
					</li>
					<li className='mr-8 sm:p-4'>
						<Link
							to='/users'
							className='p-4 lg:p-2 block my-auto text-center  text-sm text-white hover:text-indigo-600 transition-all duration-1000 capitalize'
							onClick={closeMobile}>
							users
						</Link>
					</li>
					<li className='mr-8  sm:p-4'>
						<Row>
							<div className=' ml-44 lg:ml-0 '>
								<Link
									to='#'
									className='p-4 lg:p-2 block lg:block my-auto text-center text-sm text-white hover:text-indigo-600 transition-all duration-1000 capitalize'>
									<i className='fas fa-user mr-2'> </i>welcome Imonisa Brian
								</Link>
							</div>
							<div className=''>
								{" "}
								<span onClick={toggleDropdown}>
									{dropdown ? (
										<i className=' fas fa-chevron-up -ml-3 lg:ml-1 lg:my-1 my-4 text-center  cursor-pointer text-white hover:text-indigo-600 transition-all duration-1000 text-sm mx-auto '></i>
									) : (
										<i className=' fas fa-chevron-down -ml-3 lg:ml-1 lg:my-1 my-4 cursor-pointer  text-white hover:text-indigo-600 transition-all duration-1000 text-sm mx-auto '></i>
									)}
								</span>
							</div>
						</Row>
						{dropdown && <Dropdown />}
					</li>
					<li className='mr-8 sm:p-4'>
						<Link
							to='/'
							className='p-4 lg:p-2 block my-auto text-center  text-sm text-white hover:text-indigo-600 transition-all duration-1000 capitalize'
							onClick={closeMobile}>
							logout
						</Link>
					</li>
				</ul>
			</div>
		</div>
	);
};
export default DashboardHeader;
