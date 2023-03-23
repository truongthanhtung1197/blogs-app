import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { RootState } from 'store';
import { BlogActions } from 'store/Blog';
import CreateOrEditBlogForm from './CreateOrEditBlog.form';

interface IProps {
    className?: string;
}

const CreateOrEditBlog = (props: IProps) => {
    const params = useParams();
    const dispatch = useDispatch();
    const blog = useSelector((state: RootState) => state.blog.blog);
    useEffect(() => {
        params?.id && dispatch(BlogActions.getBlogsDetailRequest(Number(params?.id)));
    }, [params?.id]);

    return <CreateOrEditBlogForm blog={params?.id ? blog : {}} />;
};

export default memo(CreateOrEditBlog);
