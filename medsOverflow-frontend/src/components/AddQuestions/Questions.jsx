import React, { useState } from 'react';
import Layout from '../Header/Layout';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import the snow theme CSS
import TagsInput from 'react-tagsinput';
import 'react-tagsinput/react-tagsinput.css'; // Import the CSS for react-tagsinput

const Questions = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [tags, setTags] = useState([]);

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleBodyChange = (value) => {
        setBody(value);
    };

    const handleTagsChange = (newTags) => {
        setTags(newTags);
    };

    return (
        <div className="flex">
            <Layout />
            <div className="flex-1 ml-64 mr-64 border-2 rounded shadow-lg mt-20 mb-20 p-4">
                <div className="p-4">
                    <h1 className="text-2xl font-bold mb-4">Ask a Question</h1>
                    <form className="space-y-4">
                        <div>
                            <label className="block text-lg font-medium text-gray-700">
                                Title
                            </label>
                            <p className="text-sm text-gray-500 mb-2">
                                Be specific and imagine you’re asking a question to another person
                            </p>
                            <input
                                type="text"
                                value={title}
                                onChange={handleTitleChange}
                                className="w-full p-2 border border-gray-300 rounded-lg"
                                placeholder="e.g. How do I center a div?"
                            />
                        </div>
                        <div>
                            <label className="block text-lg font-medium text-gray-700">
                                Body
                            </label>
                            <p className="text-sm text-gray-500 mb-2">
                                Include all the information someone would need to answer your question
                            </p>
                            <ReactQuill
                                theme="snow"
                                value={body}
                                onChange={handleBodyChange}
                                className="h-64"
                            />
                        </div>
                        <div>
                            <label className="block text-lg mt-14 font-medium text-gray-700">
                                Tags
                            </label>
                            <p className="text-sm text-gray-500 mb-2">
                                Add tags to describe what your question is about
                            </p>
                            <TagsInput
                                value={tags}
                                onChange={handleTagsChange}
                                inputProps={{
                                    placeholder: 'Press enter to add a tag',
                                    className: 'react-tagsinput-input'
                                }}
                            />
                        </div>
                        <button type="submit" className="px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700">
                            Add Question
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Questions;
