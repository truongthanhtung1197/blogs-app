import React, { memo } from 'react';
import SortButton from './SortButton';
import { ORDER } from 'types/blog.type';
import SearchInput from './SearchInput';
import { Link } from 'react-router-dom';
import { ROUTERS } from 'constants/router.constants';
import { Images } from 'styles/image';

interface IHeaderBlogProps {
    onSearch?: (v?: string) => void;
    onSort?: (v: ORDER) => void;
}

const HeaderBlog = ({ onSearch, onSort }: IHeaderBlogProps) => {
    return (
        <div className="fixed z-50 shadow-md h-[90px] bg-slate-100 top-0 right-0 left-0 flex justify-center items-center text-primaryText">
            <SearchInput onSearch={onSearch} />
            <SortButton onSort={onSort} />
            <Link to={ROUTERS.CREATE_BLOG}>
                <div className="h-10 cursor-pointer duration-500 active:bg-opacity-90 hover:bg-azure hover:bg-opacity-30 px-3 w-max flex bg-white justify-center rounded-3xl items-center shadow-lg border">
                    Create blog
                    <img
                        src={Images.createBlog.default}
                        className={`ml-2 w-[22px] duration-500`}
                        alt="arrow"
                    />
                </div>
            </Link>
        </div>
    );
};

export default memo(HeaderBlog);
