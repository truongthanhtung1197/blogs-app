import { range } from 'ramda';
import { memo } from 'react';

const BlogListSkeleton = () => {
    return (
        <div className="flex flex-col gap-6 container mx-auto animate-pulse p-6 border shadow-xl mt-[130px]">
            {range(1, 11).map((i) => {
                return (
                    <div key={i} className="flex items-start gap-4">
                        <div className="w-16 aspect-square bg-slate-200"></div>
                        <div className="flex-1">
                            <h3 className="mb-2 text-xl font-medium cursor-pointer bg-slate-200 h-6 rounded-3xl w-[70%]"></h3>
                            <p className="h-20 bg-slate-200 rounded-2xl"> </p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default memo(BlogListSkeleton);
