import { ROUTERS } from 'constants/router.constants';
import { isNilOrEmpty } from 'ramda-adjunct';
import { memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { RootState } from 'store';
import { BlogActions } from 'store/Blog';
import { Images } from 'styles/image';
import BlogDetailSkeleton from './BlogDetailSkeleton';

const BlogDetail = () => {
    const dispatch = useDispatch();
    const params = useParams();
    const blog = useSelector((state: RootState) => state.blog.blog);

    useEffect(() => {
        dispatch(BlogActions.getBlogsDetailRequest(Number(params?.id)));
    }, []);

    if (isNilOrEmpty(blog)) {
        return <BlogDetailSkeleton />;
    }

    return (
        <div className="container mx-auto">
            <div className="flex justify-end">
                <Link to={ROUTERS.EDIT_BLOG.replace(':id', String(blog?.id))}>
                    <div className="h-10 cursor-pointer duration-500 active:bg-opacity-90 mt-10 hover:bg-azure hover:bg-opacity-30 px-3 w-max inline-flex bg-white justify-center rounded-3xl items-center shadow-lg border">
                        Edit blog
                        <img
                            src={Images.pen.default}
                            className={`ml-2 w-[22px] duration-500`}
                            alt="arrow"
                        />
                    </div>
                </Link>
            </div>
            <div className="border shadow-xl my-10 md:p-5 text-primaryText">
                <div className="w-full aspect-[5/3] bg-slate-50">
                    <img
                        src={blog?.image}
                        alt={blog?.title}
                        className="w-full h-full object-cover object-center"
                    />
                </div>
                <div className="p-4 md:p-0">
                    <h3 className="text-2xl font-bold my-5">{blog?.title}</h3>
                    <p className="mb-10">{blog?.content}</p>
                </div>
            </div>
        </div>
    );
};

export default memo(BlogDetail);
