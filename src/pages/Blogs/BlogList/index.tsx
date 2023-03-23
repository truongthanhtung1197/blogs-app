import { isNilOrEmpty } from 'ramda-adjunct';
import { memo, useEffect, useRef } from 'react';
import { IBlog } from 'types/blog.type';
import BlogItem from './components/BlogItem';
import BlogListSkeleton from './components/BlogListSkeleton';

const BlogList = ({ blogList }: { blogList: IBlog[] }) => {
    const isFirstLoading = useRef(false);
    useEffect(() => {
        if (!isFirstLoading.current) {
            isFirstLoading.current = true;
        }
    }, []);

    if (isNilOrEmpty(blogList) && !isFirstLoading.current) return <BlogListSkeleton />;
    return (
        <div className="container mx-auto p-6 border shadow-xl mt-[130px]">
            {isFirstLoading && !isNilOrEmpty(blogList) ? (
                <div className="flex flex-col gap-6">
                    {blogList?.map((blog: IBlog) => {
                        return <BlogItem key={blog?.id} blog={blog} />;
                    })}
                </div>
            ) : (
                <div className="text-center">No data for search keyword</div>
            )}
        </div>
    );
};

export default memo(BlogList);
