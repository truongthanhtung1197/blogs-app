import { debounce } from 'lodash';
import React, { memo, useCallback } from 'react';
import { Images } from 'styles/image';

interface ISearchInputProps {
    onSearch?: (v?: string) => void;
}

const SearchInput = ({ onSearch }: ISearchInputProps) => {
    const onchange = useCallback(
        debounce((e: any) => {
            onSearch?.(e?.target?.value);
        }, 400),
        []
    );
    return (
        <div className="w-[50%] h-10 rounded-3xl px-4 shadow-lg border bg-white flex">
            <img src={Images.searchIcon.default} alt="search icon" className="w-[15px]" />
            <input
                onChange={onchange}
                className="outline-none w-full h-full px-4"
                placeholder="Search"
            />
        </div>
    );
};

export default memo(SearchInput);
