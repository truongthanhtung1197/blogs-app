import React, { memo } from 'react';
import { classNames } from 'utils/Common.util';

import ErrorMessage from '../ErrorMessage';

interface IFormInputProps {
    className?: string;
    placeholder?: string;
    type?: 'text' | 'number' | 'email' | 'textarea';
    register: any;
    errorName?: string;
    title?: string;
}

const FormInput = ({
    className,
    placeholder = 'Name',
    type = 'text',
    register,
    errorName,
    title
}: IFormInputProps) => {
    return (
        <div>
            {title && <div className="font-semibold text-base text-primaryText">{title}</div>}
            {type === 'textarea' ? (
                <textarea
                    {...register}
                    rows={6}
                    className={classNames(
                        'outline-none w-full focus:border-b-4 border-black duration-300 resize-none text-black bg-[#f2f2f2] h-auto py-4 px-8 text-base font-normal',
                        className
                    )}
                    placeholder={placeholder}></textarea>
            ) : (
                <input
                    {...register}
                    type={type}
                    placeholder={placeholder}
                    className={classNames(
                        'outline-none w-full border-black bg-[#f2f2f2] h-[57px] py-4 px-8 text-base text-black font-normal focus:border-b-4 duration-300',
                        className
                    )}
                />
            )}
            <ErrorMessage errorName={errorName} />
        </div>
    );
};

export default memo(FormInput);
