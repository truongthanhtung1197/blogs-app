import React, { memo, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getApiBlogList } from 'services';
import { RootState } from 'store';
import { BlogActions } from 'store/Blog';

const BlogList = () => {
    const aa = useSelector((state: RootState) => {
        console.log('state: --------->>>', state);
    });

    useEffect(() => {
        const getBlogs = async () => {
            const res = await getApiBlogList();
        };
        getBlogs();
    }, []);

    return <div>BlogList</div>;
};

export default memo(BlogList);
