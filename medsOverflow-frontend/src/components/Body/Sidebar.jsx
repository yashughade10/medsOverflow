import { Home, MessageCircleMore, Sparkles, Tag, Users } from 'lucide-react'
import React from 'react'
import Content from './Content'
import { Link } from 'react-router-dom'

const Sidebar = () => {
    return (
        <>

            <button data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar" type="button" class="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                <span class="sr-only">Open sidebar</span>
                <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                </svg>
            </button>

            <aside id="default-sidebar" class="fixed top-14 left-0 border-r-2 z-40 w-64 ml-48 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
                <div class="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
                    <ul class="space-y-2 mt-3 font-medium">
                        <Link to="/home">
                            <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-[#eff4f2] dark:hover:bg-gray-700 group">
                                <Home />
                                <span class="ms-3">Home</span>
                            </a>
                        </Link>
                        <li>
                            <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-[#eff4f2] dark:hover:bg-gray-700 group">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-help"><circle cx="12" cy="12" r="10" /><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" /><path d="M12 17h.01" /></svg>
                                <span class="ms-3">Questions</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-[#eff4f2] dark:hover:bg-gray-700 group">
                                <Tag />
                                <span class="ms-3">Tags</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-[#eff4f2] dark:hover:bg-gray-700 group">
                                <MessageCircleMore />
                                <span class="ms-3">Unanswered</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-[#eff4f2] dark:hover:bg-gray-700 group">
                                <Users />
                                <span class="flex-1 ms-3 whitespace-nowrap">Users</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-[#eff4f2] dark:hover:bg-gray-700 group">
                                <Sparkles />
                                <span class="flex-1 ms-3 whitespace-nowrap">Ask AI</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </aside>

            {/* <Content/> */}
        </>
    )
}

export default Sidebar
