import { AArrowUp, Compass, Cross, FilePen, HelpCircle, HomeIcon, LogIn, MessageCircleMore, Plus, Search, Tag, UserRound, UsersRound, X } from 'lucide-react';
<aside id="logo-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-[#f9fbfc] border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700" aria-label="Sidebar">
    <div className="h-full px-3 pb-4 overflow-y-auto bg-[#f9fbfc] dark:bg-gray-800">
        <ul className="space-y-2 font-medium">
            <li>
                <Link to="/" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-[#eff4f2] dark:hover:bg-gray-700 group">
                    <HomeIcon />
                    <span className="ms-3">Home</span>
                </Link>
            </li>
            <li>
                <Link to="/questions" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-[#eff4f2] dark:hover:bg-gray-700 group">
                    <HelpCircle />
                    <span className="flex-1 ms-3 whitespace-nowrap">Questions</span>
                </Link>
            </li>
            <li>
                <Link to="/tags" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-[#eff4f2] dark:hover:bg-gray-700 group">
                    <Tag />
                    <span className="flex-1 ms-3 whitespace-nowrap">Tags</span>
                </Link>
            </li>
            <li>
                <Link to="/users" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-[#eff4f2] dark:hover:bg-gray-700 group">
                    <UserRound />
                    <span className="flex-1 ms-3 whitespace-nowrap">Users</span>
                </Link>
            </li>
            <li>
                <Link to="/ask-ai" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-[#eff4f2] dark:hover:bg-gray-700 group">
                    <AArrowUp />
                    <span className="flex-1 ms-3 whitespace-nowrap">Ask AI</span>
                </Link>
            </li>
        </ul>
    </div>
</aside>