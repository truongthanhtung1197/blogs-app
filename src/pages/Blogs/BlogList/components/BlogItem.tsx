import { ROUTERS } from 'constants/router.constants';
import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { IBlog } from 'types/blog.type';

interface IBlogItemProps {
    blog: IBlog;
}

const BlogItem = ({ blog }: IBlogItemProps) => {
    const { image, title, id, content } = blog || {};
    return (
        <div className="flex items-start gap-4 text-primaryText">
            <div className="w-16 aspect-square bg-slate-200">
                <img src={image} alt={title} className="object-cover object-center w-full h-full" />
            </div>
            <div className="flex-1 relative -mt-1">
                <h3 className="mb-1 text-xl font-medium line-clamp-3">
                    <Link to={ROUTERS.DETAIL_BLOG.replace(':id', String(id))}>{title}</Link>
                </h3>

                <p className="text-base font-normal line-clamp-6">{content}</p>
            </div>
        </div>
    );
};

export default memo(BlogItem);
