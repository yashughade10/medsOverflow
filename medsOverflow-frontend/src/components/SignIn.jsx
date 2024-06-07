import { X } from 'lucide-react';
import React, { useState } from 'react';
// import UserService from '../services/UserService';
import { useNavigate } from 'react-router-dom';

const SignIn = ({ openSignupForm }) => {

    const navigate = useNavigate();
    const [isClose, setIsClose] = useState(false);
    const [isSubmit, setIsSubmit] = useState(false);
    const [error, setError] = useState("Login Successful");
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        const { email, password } = formData;

        // UserService.validateUser({ email, password })
        //     .then(res => {
        //         console.log(res.data.message); // Assuming the response contains user data or authentication token
        //         // Navigate to home or perform other actions on successful login
        //     })
        //     .catch(error => {
        //         console.log(error);
        //         // Handle login error
        //         setError("Enter valid email or password");
        //         setIsSubmit(true)
        //     });
        if(email==="" || password===""){
            console.error("All the fields are required");
        }else{
            navigate('/home-page'); // Use navigate function here
        }
    };

    const handleClose = () => {
        // Add logic to close the sign-in form
        setIsClose(!isClose)
    };

    return (
        <>
            {
                !isClose && (
                    <section className=" dark:bg-gray-900 mt-36 relative">
                        <div className=" absolute inset-0 top-48 flex items-center justify-center z-40">
                            <div className="w-full max-w-md bg-white relative rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                                <X className=' absolute right-3 top-3 cursor-pointer hover:border rounded-md border-[#eff4f2]' onClick={handleClose} />
                                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                        Sign in to your account
                                    </h1>
                                    {
                                        isSubmit && <p>{error}</p>
                                    }
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

        </>
    );
}

export default SignIn;
