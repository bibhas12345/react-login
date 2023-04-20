import React from 'react'
import { useState } from "react";
import Signin from './Signin';
import { DiApple} from 'react-icons/di';


export default function Main(props) {





    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSignIn = (e) => {
        e.preventDefault();
        console.log(`Sign in with email: ${email} and password: ${password}`);
    };

    const handleForgotPassword = () => {
        console.log(`Forgot password for email: ${email}`);
    };
    return (
        <div className='w-full h-full flex'>
            <div className='w-2/5 h-[714px] text-white flex justify-center items-center bg-black'>
                <p className='text-5xl font-bold ml-12 px-6'>Board.</p>
            </div>
            <div className='w-[900px] flex justify-center  items-center bg-gray-200'>
                <div>
                    <p className='text-3xl font-bold'>Sign in</p>
                    <p className='font-semibold'>Sign in to your account</p>
                    <div className='flex mt-5 mb-6'>
                    <Signin setValue={(value)=>props.setValue(value)} />
                        {/* <button className='bg-white px-5 p-1 text-gray-400 flex rounded-lg' onClick={handleClick}><FcGoogle className='mt-1'/>sign in with Google</button> */}
                        <p className='bg-white flex text-gray-400 p-1 rounded-lg ml-4 px-5'><DiApple className='mt-1 text-gray-500'/>Sign up with apple</p>
                    </div>
                    <form onSubmit={handleSignIn} className="bg-white p-8 rounded-lg w-[400px] shadow-md">

                        <div className="mb-4">
                            <label htmlFor="email" className="block font-medium mb-2">
                                Email address
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full px-3 py-2 border rounded-lg bg-gray-200"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password" className="block font-medium mb-2 ">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full px-3 py-2 border rounded-lg bg-gray-200"
                                required
                            />
                        </div>
                        <div className="flex flex-col justify-start items-start mb-4">
                            <button type="button" onClick={handleForgotPassword} className="text-blue-500 font-semibold ">
                                Forgot Password?
                            </button>
                            <button type="submit" className="bg-black  text-white py-2 px-4 rounded-lg mt-3 w-full font-semibold">
                                Sign In
                            </button>
                        </div>
                    </form>
                    <p className='mt-3 ml-14 text-gray-500'>Don't have an account?<span className='text-blue-700 ml-2 cursor-pointer font-semibold'>Register here</span></p>
                </div>

            </div>
        </div>
    )
}
