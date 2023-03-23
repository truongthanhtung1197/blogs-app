import { debounce } from 'lodash';
import React, { memo, useCallback, useState } from 'react';
import { Images } from 'styles/image';
import { ORDER } from 'types/blog.type';

interface ISortButtonProps {
    onSort?: (v: ORDER) => void;
}

const SortButton = ({ onSort }: ISortButtonProps) => {
    const [sortValue, setSortValue] = useState(ORDER.desc);

    const onSortClick = useCallback(
        debounce(() => {
            const newValue = sortValue === ORDER.desc ? ORDER.asc : ORDER.desc;
            setSortValue(newValue);
            onSort?.(newValue);
        }, 300),
        [sortValue]
    );
    return (
        <div
            onClick={onSortClick}
            className="h-10 cursor-pointer duration-500 active:bg-opacity-90 hover:bg-azure hover:bg-opacity-30 w-[100px] flex bg-white justify-center rounded-3xl items-center shadow-lg border">
            Sort
            <img
                src={Images.arrowUp.default}
                className={`ml-2 w-[12px] duration-500 ${sortValue === ORDER.desc && 'rotate-180'}`}
                alt="arrow"
            />
        </div>
    );
};

export default memo(SortButton);
