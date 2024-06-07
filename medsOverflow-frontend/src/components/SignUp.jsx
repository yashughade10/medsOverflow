import { HandCoins, X } from 'lucide-react';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
// import UserService from '../services/UserService';

const SignUp = ({ openSigninForm }) => {

    const [isClose, setIsClose] = useState(false);

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: ""
    })

    // Handle the submit form
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Signing up with:', formData);

        // Calling the Post API
        // UserService.saveUsers(formData)
        // .then(res => {
        //     console.log(res);
        // })
        // .catch(error => {
        //     console.log(error);
        // })
        navigate('/home-page')

    };

    // Handle the input changes
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    // Handle form close button
    const handleClose = () => {
        setIsClose(!isClose);
    };





    return (
        <>
            {
                !isClose && (
                    <section className=" dark:bg-gray-900 mt-36 relative">
                        <div className="absolute top-64 inset-0 flex items-center justify-center z-40">
                            <div className="w-full bg-white relative rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700 overflow-y-auto my-9">
                                <X className=' absolute right-3 top-3 cursor-pointer hover:border rounded-md border-[#eff4f2]' onClick={handleClose} />
                                <div className="p-6 space-y-4 md:space-y-6 sm:p-8 h-full">
                                    <h1 className="text-xl font-bold leading-tight tracking-tight -mt-4 text-gray-900 md:text-2xl dark:text-white">
                                        Create an account
                                    </h1>
                                    <form className="space-y-4 md:space-y-4" onSubmit={handleSubmit}>
                                        {/* Input field for name */}
                                        <div>
                                            <div>
                                                <label htmlFor="fullName" className="block text-sm font-medium text-gray-900 dark:text-white">Your Name</label>
                                                <input
                                                    className="bg-[#eff4f2] border border-gray-300 focus:ring-[#719a88] focus:border-[#719a88] text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 "
                                                    type="text"
                                                    name="fullName"
                                                    id="fullName"
                                                    value={formData.fullName}
                                                    onChange={handleChange}
                                                    placeholder="Enter Your Name"
                                                    required
                                                />
                                            </div>
                                        </div>

                                        {/* Input fields for email, password, confirm password */}
                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                            <input
                                                className="bg-[#eff4f2] border border-gray-300 focus:ring-[#719a88] focus:border-[#719a88] text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                                                type="email"
                                                name="email"
                                                id="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                placeholder="name@company.com"
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="password" className="block text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                            <input
                                                className="bg-[#eff4f2] border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-[#719a88] focus:border-[#719a88] block w-full p-2.5"
                                                type="password"
                                                name="password"
                                                id="password"
                                                value={formData.password}
                                                onChange={handleChange}
                                                placeholder="••••••••"
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
                                            <input
                                                className="bg-[#eff4f2] border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-[#719a88] focus:border-[#719a88] block w-full p-2.5"
                                                type="password"
                                                name="confirmPassword"
                                                id="confirmPassword"
                                                value={formData.confirmPassword}
                                                onChange={handleChange}
                                                placeholder="••••••••"
                                                required
                                            />
                                        </div>

                                        {/* Bank account checkbox */}
                                        <div className="flex items-start">
                                            <div className="flex items-center h-5">
                                                <input
                                                    id="terms"
                                                    aria-describedby="terms"
                                                    type="checkbox"
                                                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-white"
                                                />
                                            </div>
                                            <div className="ml-3 text-sm">
                                                <label htmlFor="terms" className="font-bold text-gray-500 dark:text-gray-300">Agree terms and conditions</label>
                                            </div>
                                        </div>


                                        {/* Submit Button */}
                                        <button type="submit" className="w-full text-white bg-[#18e66e] hover:bg-[#5dd690] focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                                            Create an account
                                        </button>

                                        {/* Navigate to login page */}
                                        <p className="text-sm font-light text-gray-500 dark:text-gray-400 mt-4">
                                            Already have an account? <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500" onClick={openSigninForm}>Login here</a>
                                        </p>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </section>
                )
            }

        </>
    );
}

export default SignUp;
