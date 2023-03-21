import React, { memo } from 'react';
import { Route, Routes } from 'react-router-dom';
import BlogList from './Blogs/BlogList';

const MainView = () => {
    return (
        <Routes>
            <Route path="/" element={<BlogList />}></Route>
        </Routes>
    );
};

export default memo(MainView);
