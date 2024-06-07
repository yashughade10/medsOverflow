import React from 'react';
import Layout from './Header/Layout';
import Sidebar from './Body/Sidebar'; // Make sure to import Sidebar correctly
import Content from './Body/Content';

const Home = () => {
    return (
        <div className="flex">
            <Layout />
            <div className="flex-1 ml-64">
                <Sidebar />
                <div className="p-4">
                    <Content />
                </div>
            </div>
        </div>
    );
};

export default Home;
