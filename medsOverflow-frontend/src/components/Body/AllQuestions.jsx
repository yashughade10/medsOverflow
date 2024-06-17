import React from 'react'
import { Link } from 'react-router-dom'

const AllQuestions = () => {
    return (
        <>
            <div className="flex mt-5 gap-3">
                {/* Left Section: Votes, Views, Answers */}
                <div className="flex flex-col items-center p-4 bg-gray-100 rounded-lg dark:bg-gray-800">
                    <div className="text-center mb-2">
                        <span className="block text-2xl font-bold">123</span>
                        <span className="text-sm">votes</span>
                    </div>
                    <div className="text-center mb-2">
                        <span className="block text-2xl font-bold">456</span>
                        <span className="text-sm">views</span>
                    </div>
                    <div className="text-center">
                        <span className="block text-2xl font-bold">7</span>
                        <span className="text-sm">answers</span>
                    </div>
                </div>

                {/* Right Section: Question, Body, Tags, Username */}
                <Link to="/question">
                    <div className="flex flex-col flex-grow p-4 bg-white rounded-lg shadow dark:bg-gray-700">
                        <div className="mb-2">
                            <h2 className="text-xl font-bold">How to create a flexbox layout in React?</h2>
                        </div>
                        <div className="mb-4">
                            <p className="text-gray-700 dark:text-gray-300">I'm trying to create a layout in React using flexbox. I've tried various methods but can't seem to get it right. Can anyone provide a clear example?</p>
                        </div>
                        <div className="flex flex-wrap gap-2 mb-4">
                            <span className="px-2 py-1 bg-gray-200 text-gray-700 font-medium rounded-lg text-sm dark:bg-gray-600 dark:text-gray-300">React</span>
                            <span className="px-2 py-1 bg-gray-200 text-gray-700 font-medium rounded-lg text-sm dark:bg-gray-600 dark:text-gray-300">Flexbox</span>
                            <span className="px-2 py-1 bg-gray-200 text-gray-700 font-medium rounded-lg text-sm dark:bg-gray-600 dark:text-gray-300">CSS</span>
                            <span className="px-2 py-1 bg-gray-200 text-gray-700 font-medium rounded-lg text-sm dark:bg-gray-600 dark:text-gray-300">Layout</span>
                        </div>
                        <div className="text-right">
                            <span className="text-sm font-medium text-gray-900 dark:text-white">John Doe</span>
                        </div>
                    </div>
                </Link>
            </div>
        </>
    )
}

export default AllQuestions
