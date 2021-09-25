import React, { useState } from "react";
import { useHistory } from "react-router";

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [alert, setAlert] = useState("");
	const history = useHistory();

	const submitHandler = (e) => {
		e.preventDefault();
		if (email === "" || password === "") {
			setAlert("Please Enter Your Email & Password");
		} else {
			history.push("/admin-dashboard");
		}
	};
	return (
		<div className='min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12'>
			<div className='relative py-3 w-11/12 max-w-xl sm:mx-auto'>
				<div className='relative p-8 bg-white shadow-sm sm:rounded-xl'>
					<div className='bg-gray-100 rounded-md'>
						<h5 className='text-lg p-4  mb-3 text-black font-semibold '>
							Account Login
						</h5>
					</div>
					<p className=' py-2 text-red-500 text-center mb-4 '>{alert}</p>
					<form className='w-full'>
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
								Email address
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
						<button
							onClick={submitHandler}
							className='w-full bg-indigo-600 text-white p-3 rounded-md'>
							Submit
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Login;
