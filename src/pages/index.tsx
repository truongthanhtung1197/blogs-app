import { ROUTERS } from 'constants/router.constants';
import React, { memo } from 'react';
import { Route, Routes } from 'react-router-dom';
import Blog from './Blogs';
import BlogDetail from './Blogs/BlogDetail';
import CreateOrEditBlog from './Blogs/CreateOrEditBlog';

const MainView = () => {
    return (
        <Routes>
            <Route path="/" element={<Blog />}></Route>
            <Route path={ROUTERS.DETAIL_BLOG} element={<BlogDetail />}></Route>
            <Route path={ROUTERS.CREATE_BLOG} element={<CreateOrEditBlog />}></Route>
            <Route path={ROUTERS.EDIT_BLOG} element={<CreateOrEditBlog />}></Route>
        </Routes>
    );
};

export default memo(MainView);
