import { SlidersHorizontal } from 'lucide-react'
import React from 'react'
import AllQuestions from './AllQuestions'

const Content = () => {
    return (
        <>
            <div className=' m-10 ml-48 mr-48'>
                <div class="p-4">
                    <div class="p-4 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
                        <div className="flex justify-between items-center mb-4">
                            <h1 className=" text-3xl font-bold">Ask questions and share your knowledge</h1>
                            <button className="px-4 py-2 bg-[#18e66e] text-[#031a0c] font-medium rounded-lg text-sm hover:bg-[#5dd690] dark:hover:bg-[#eff4f2]">
                                Ask Question
                            </button>
                        </div>
                        <div className="flex justify-between items-center mb-4">
                            <div className="flex flex-wrap gap-4">
                                <button className="px-4 py-2 bg-[#eff4f2] text-black font-medium rounded-lg text-sm hover:bg-[#b6d7ca]">
                                    Newest
                                </button>
                                <button className="px-4 py-2 bg-[#eff4f2] text-black font-medium rounded-lg text-sm hover:bg-[#b6d7ca]">
                                    Unanswered
                                </button>
                                <button className="px-4 py-2 bg-[#eff4f2] text-black font-medium rounded-lg text-sm hover:bg-[#b6d7ca]">
                                    Most Answered
                                </button>
                                <button className="px-4 py-2 bg-[#eff4f2] text-black font-medium rounded-lg text-sm hover:bg-[#b6d7ca]">
                                    Featured
                                </button>
                            </div>
                            <button className="px-4 py-2 bg-white border-2 border-[#b6d7ca] text-[#b6d7ca] font-medium rounded-lg text-sm hover:bg-[#e6ebe9] hover:text-black hover:border-black flex items-center">
                                <SlidersHorizontal size={20} className="mr-2" />
                                Filter
                            </button>
                        </div>
                        <hr className="border-t border-gray-300" />

                        <AllQuestions />
                        <AllQuestions />
                        <AllQuestions />
                        <AllQuestions />
                        <AllQuestions />
                        <AllQuestions />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Content
