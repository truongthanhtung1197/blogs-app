import Paginate from 'components/Paginate/index.tsx';
import React, { memo, useCallback, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store';
import { BlogActions } from 'store/Blog';
import { IFilterGetBlogList, ORDER } from 'types/blog.type';
import BlogList from './BlogList';
import HeaderBlog from './BlogList/components/HeaderBlog';

const defaultFilter = {
    limit: 10,
    page: 1,
    sortBy: 'createdAt',
    order: ORDER.desc,
    search: ''
};

const BlogScreen = () => {
    const filterRef: any = useRef(defaultFilter);
    const dispatch = useDispatch();
    const blogList = useSelector((state: RootState) => state.blog.blogList);
    const getBlogList = useCallback((filter?: IFilterGetBlogList) => {
        dispatch(BlogActions.getBlogsRequest(filter ?? filterRef.current));
    }, []);

    useEffect(() => {
        getBlogList();
    }, []);

    const onchangePage = useCallback((page: number) => {
        const newFilter = {
            ...filterRef.current,
            page
        };
        getBlogList(newFilter);
        filterRef.current = newFilter;
    }, []);

    const handleSearch = useCallback((v?: string) => {
        const newFilter = {
            ...filterRef.current,
            search: v || '',
            page: 1
        };
        getBlogList(newFilter);
        filterRef.current = newFilter;
    }, []);

    const handleSort = useCallback((v?: ORDER) => {
        const newFilter = {
            ...filterRef.current,
            order: v
        };
        getBlogList(newFilter);
        filterRef.current = newFilter;
    }, []);

    return (
        <>
            <HeaderBlog onSearch={handleSearch} onSort={handleSort} />
            <BlogList blogList={blogList} />
            <Paginate
                className="flex justify-center mt-8 mb-20"
                itemsPerPage={10}
                // todo: add total when api support 'total'
                total={blogList?.length < 10 ? blogList?.length : 100}
                onchangePage={onchangePage}
            />
        </>
    );
};

export default memo(BlogScreen);
