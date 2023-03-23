import React, { memo } from 'react';
import { classNames } from 'utils/Common.util';

interface IErrorMessageProps {
    errorName?: string;
}

const ErrorMessage = ({ errorName }: IErrorMessageProps) => {
    return (
        <div
            className={classNames(
                'text-[#B94A48] text-xs font-medium mt-1 duration-1000 transition-all z-0',
                errorName ? 'translate-y-0 ' : 'translate-y-[-10px] '
            )}>
            {errorName}
        </div>
    );
};

export default memo(ErrorMessage);
