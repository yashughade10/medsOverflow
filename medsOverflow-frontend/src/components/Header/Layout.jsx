import React, { useState, useContext, useEffect } from 'react';
import { ClipboardPen, Cross, Search, X } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { userContext } from '../../context/Context';
import Sidebar from '../Body/Sidebar';
import Content from '../Body/Content';

const Layout = () => {
    const [isSignUp, setIsSignUp] = useState(false);
    const [isLogin, setIsLogin] = useState(false)
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const { isLoginTrue, setIsLoginTrue } = useContext(userContext)

    const navigate = useNavigate();

    useEffect(() => {
        // Retrieve login state from localStorage
        const loggedIn = localStorage.getItem('isLoginTrue');
        if (loggedIn) {
            setIsLoginTrue(true);
        }
    }, [setIsLoginTrue]);

    // Function to open signin form
    const openSigninForm = () => {
        setIsLogin(!isLogin);
        setIsSignUp(false)
    }

    // Function to toggle to signup form
    const openSignupForm = () => {
        setIsSignUp(!isSignUp);
        setIsLogin(false)
    }

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const { email, password } = formData;

        if (email === "" || password === "") {
            alert("All the fields are required");
        } else {
            setIsLoginTrue(true)
            localStorage.setItem('isLoginTrue', true); // Save login state to localStorage
            localStorage.setItem('email', email);
            navigate('/home'); // Use navigate function here
        }
        console.log(isLoginTrue);
    };

    const handleLogout = () => {
        setIsLoginTrue(false);
        localStorage.removeItem('isLoginTrue'); // Clear login state from localStorage
        localStorage.removeItem('email');
        navigate('/'); // Redirect to home or login page
    };

    // Add logic to close the sign-in/sign-up form
    const handleClose = () => {
        setIsSignUp(false)
        setIsLogin(false)
    };

    // toggle the dropdown menu
    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    return (
        <>
            <nav className="fixed top-0 z-50 w-full bg-[#f9fbfc] border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                <div className="px-3 py-3 lg:px-5 lg:pl-3">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center justify-start rtl:justify-end">
                            <button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                                <span className="sr-only">Open sidebar</span>
                                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                                </svg>
                            </button>
                            <a href="https://flowbite.com" className="flex ms-2 md:me-24">
                                <Cross className="h-8 me-3" />
                                <span className="self-center text-xl sm:text-2xl whitespace-nowrap dark:text-white logo">meds<strong>overflow</strong></span>
                            </a>
                        </div>
                        <div className="flex items-center ms-3">
                            <Search className="relative left-8 top-2.5 transform -translate-y-1/2 h-5 w-5 text-[#719a88]" />
                            <input
                                type="text"
                                placeholder="Search..."
                                className="px-3 py-1.5 pl-10 bg-[#eff4f2] text-[#719a88] border-gray-300 rounded-lg dark:border-gray-600 dark:text-white dark:placeholder-gray-400 placeholder:text-[#719a88] mr-5 focus:border-[#719a88] focus:ring-[#719a88]"
                            />
                            <Link to="/add-question">
                            <button
                                type="button"
                                className="px-4 py-2 text-[#031a0c] bg-[#18e66e] font-medium rounded-lg text-sm dark:hover:bg-[#eff4f2] dark:focus:ring-primary-800 mr-5 hover:bg-[#5dd690]"
                            >
                                Ask a question
                            </button>
                            </Link>
                            {isLoginTrue ? (
                                <div className="flex items-center ms-3">
                                    <div>
                                        <button
                                            type="button"
                                            className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                                            aria-expanded={dropdownOpen}
                                            onClick={toggleDropdown}
                                        >
                                            <span className="sr-only">Open user menu</span>
                                            <img className="w-9 h-9 rounded-full" src="#" alt="user photo" />
                                        </button>
                                    </div>
                                    {dropdownOpen && (
                                        <div className="z-50 absolute top-10 right-5 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600" id="dropdown-user">
                                            <div className="px-4 py-3">
                                                <p className="text-sm text-gray-900 dark:text-white">Neil Sims</p>
                                                <p className="text-sm font-medium text-gray-900 truncate dark:text-gray-300">neil.sims@flowbite.com</p>
                                            </div>
                                            <ul className="py-1">
                                                <li>
                                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white">Profile</a>
                                                </li>
                                                <li>
                                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                                                </li>
                                                <li>
                                                    <button
                                                        onClick={handleLogout}
                                                        className="block w-full px-4 py-2 text-sm text-gray-700 text-left hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                                                    >
                                                        Sign out
                                                    </button>
                                                </li>
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <button
                                    type="button"
                                    onClick={openSigninForm}
                                    className="flex items-center px-4 py-2 text-[#031a0c] bg-[#18e66e] font-medium rounded-lg text-sm dark:hover:bg-[#eff4f2] dark:focus:ring-primary-800 mr-10 hover:bg-[#5dd690]"
                                >
                                    <ClipboardPen size={18} className=' mr-2' />
                                    Login
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </nav>


            {/* Login pop-up */}
            {
                isLogin && (
                    <section className=" dark:bg-gray-900 relative">
                        <div className=" fixed inset-0 flex items-center justify-center z-40">
                            <div className="w-full max-w-md bg-white relative rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                                <X className=' absolute right-3 top-3 cursor-pointer hover:border rounded-md border-[#eff4f2]' onClick={handleClose} />
                                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                        Sign in to your account
                                    </h1>
                                    <form className="space-y-4 md:space-y-6" action="#" onSubmit={handleSubmit}>
                                        <div>
                                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                            <input
                                                type="email"
                                                name="email"
                                                id="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                className="bg-[#eff4f2] border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-[#719a88] focus:border-[#719a88] block w-full p-2.5" placeholder="name@company.com"
                                                required=""
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                            <input
                                                type="password"
                                                name="password"
                                                id="password"
                                                value={formData.password}
                                                onChange={handleChange}
                                                autoComplete="current-password"
                                                placeholder="••••••••"
                                                className="bg-[#eff4f2] border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-[#719a88] focus:border-[#719a88] block w-full p-2.5 " required=""
                                            />
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500 text-blue-600">Forgot password?</a>
                                        </div>
                                        <button type="submit" className="w-full text-white bg-[#18e66e] hover:bg-[#5dd690] focus:ring-0 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>

                                        <p className="text-sm font-light text-gray-500 dark:text-gray-400 mt-4">
                                            Don’t have an account yet? <a href="#" onClick={openSignupForm} className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</a>
                                        </p>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </section>
                )
            }


            {/* Register pop-up */}
            {
                isSignUp && (
                    <section className=" dark:bg-gray-900 relative">
                        <div className="fixed inset-0 flex items-center justify-center z-40">
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

export default Layout;
