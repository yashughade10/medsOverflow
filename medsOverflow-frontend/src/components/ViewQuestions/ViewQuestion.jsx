import React, { useState } from 'react'
import Layout from '../Header/Layout'
import Sidebar from '../Body/Sidebar'
import { ArrowUp, ArrowDown, Bookmark, User } from 'lucide-react'
import ReactQuill from 'react-quill'

const ViewQuestion = () => {
    const [showCommentBox, setShowCommentBox] = useState(false)
    const [comments, setComments] = useState([
        { id: 1, text: 'This is a sample comment.' }
    ])
    const [newComment, setNewComment] = useState('')
    const [newAnswer, setNewAnswer] = useState('')
    const [answers, setAnswers] = useState([])
    const [error, setError] = useState('')

    const handleAddCommentClick = () => {
        setShowCommentBox(true)
    }

    const handleCommentChange = (e) => {
        setNewComment(e.target.value)
    }

    const handleAddComment = () => {
        if (newComment.trim()) {
            setComments([...comments, { id: comments.length + 1, text: newComment }])
            setNewComment('')
            setShowCommentBox(false)
        }
    }

    const handleAnswerChange = (value) => {
        setNewAnswer(value)
        if (value.trim()) {
            setError('')
        }
    }

    const handleAddAnswer = (e) => {
        e.preventDefault()
        if (newAnswer.trim()) {
            setAnswers([...answers, { id: answers.length + 1, text: newAnswer }])
            setNewAnswer('')
        } else {
            setError('Answer cannot be empty.')
        }
    }

    return (
        <div className="flex">
            <Layout />
            <div className="flex-1 ml-64">
                <Sidebar />
                <div className="p-4">
                    <div className='m-10 ml-48 mr-48'>
                        <div className="p-4">
                            <div className="p-4 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
                                <div className="flex justify-between items-center mb-4">
                                    <h1 className="text-3xl font-bold">Ask questions and share your knowledge</h1>
                                    <button className="px-4 py-2 bg-[#18e66e] text-[#031a0c] font-medium rounded-lg text-sm hover:bg-[#5dd690] dark:hover:bg-[#eff4f2]">
                                        Ask Question
                                    </button>
                                </div>
                                <div className="flex justify-between items-center mb-4">
                                    <div className="flex gap-8">
                                        <div className="flex items-center">
                                            <span className="font-medium mr-2">Asked:</span>
                                            <span>June 12, 2024, 10:00 AM</span>
                                        </div>
                                        <div className="flex items-center">
                                            <span className="font-medium mr-2">Active Status:</span>
                                            <span>Active</span>
                                        </div>
                                        <div className="flex items-center">
                                            <span className="font-medium mr-2">Viewed:</span>
                                            <span>123 times</span>
                                        </div>
                                    </div>
                                </div>
                                <hr className="border-t border-gray-300" />
                                <div className="flex mt-4">
                                    <div className="flex flex-col items-center mr-8">
                                        <ArrowUp size={24} className="cursor-pointer" />
                                        <span className="my-2">123</span>
                                        <ArrowDown size={24} className="cursor-pointer" />
                                        <Bookmark size={24} className="mt-4 cursor-pointer" />
                                    </div>
                                    <div className="flex-1 mb-4">
                                        <p className="text-lg mb-4">
                                            This is the body of the question. Here, the user can describe their problem in detail, providing any relevant information and context to help others understand and answer their question. The more detailed and clear the question, the better the chances of receiving a helpful answer.
                                        </p>
                                        <div className="flex justify-end items-center">
                                            <div className="text-right">
                                                <div className="text-sm text-gray-500">Asked: June 12, 2024, 10:00 AM</div>
                                                <div className="flex items-center justify-end mt-2 cursor-pointer">
                                                    <div className='border-2 rounded-full border-gray-200 mr-2 bg-gray-200'>
                                                        <User size={24} color='gray' className="" />
                                                    </div>
                                                    <span>John Doe</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <hr />
                                <div className="mt-4 mb-4">
                                    <h2 className="text-xl font-bold mb-2">Comments</h2>
                                    {comments.map(comment => (
                                        <div key={comment.id} className="border-b border-gray-300 py-2">
                                            {comment.text}
                                        </div>
                                    ))}
                                    <button
                                        className="mt-4 px-4 py-2 text-[#031a0c] font-medium rounded-lg text-lg focus:border-[#719a88] focus:ring-[#719a88] hover:text-[#719a88]"
                                        onClick={handleAddCommentClick}
                                    >
                                        Add a comment
                                    </button>
                                    {showCommentBox && (
                                        <div className="mt-4">
                                            <textarea
                                                className="w-full p-2 border border-gray-300 rounded-lg"
                                                rows="4"
                                                value={newComment}
                                                onChange={handleCommentChange}
                                                placeholder="Add your comment here..."
                                            ></textarea>
                                            <button
                                                className="mt-2 px-4 py-2 bg-[#18e66e] text-[#031a0c] font-medium rounded-lg text-sm hover:bg-[#5dd690] dark:hover:bg-[#eff4f2]"
                                                onClick={handleAddComment}
                                            >
                                                Add Comment
                                            </button>
                                        </div>
                                    )}
                                </div>
                                <hr />
                                <h2 className="text-xl font-bold mt-4">Answers</h2>
                                {answers.map(answer => (
                                    <div key={answer.id} className="flex mt-4">
                                        <div className="flex flex-col items-center mr-8">
                                            <ArrowUp size={24} className="cursor-pointer" />
                                            <span className="my-2">0</span>
                                            <ArrowDown size={24} className="cursor-pointer" />
                                            <Bookmark size={24} className="mt-4 cursor-pointer" />
                                        </div>
                                        <div className="flex-1 mb-4">
                                            <div dangerouslySetInnerHTML={{ __html: answer.text }} className="text-lg mb-4"></div>
                                        </div>
                                    </div>
                                ))}
                                <hr />
                            </div>
                        </div>

                        <div>
                            <h3 className="text-2xl font-bold mt-4">Your Answer</h3>
                            <form onSubmit={handleAddAnswer}>
                                <ReactQuill
                                    theme="snow"
                                    value={newAnswer}
                                    onChange={handleAnswerChange}
                                    className="h-48"
                                />
                                <button type="submit" className="px-4 py-2 mt-14 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700">
                                    Post your answer
                                </button>
                                {error && <div className="text-red-500 mt-2">{error}</div>}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewQuestion
