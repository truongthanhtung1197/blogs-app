import React, { memo } from 'react';

const BlogDetailSkeleton = () => {
    return (
        <div className="container mx-auto border shadow-xl my-10 animate-pulse">
            <div className="w-full aspect-[5/3] bg-slate-200"></div>
            <h3 className="rounded-2xl h-6 my-5 bg-slate-200 mx-10"></h3>
            <p className="h-20 bg-slate-200 rounded-2xl mx-10 mb-10"> </p>
        </div>
    );
};

export default memo(BlogDetailSkeleton);
