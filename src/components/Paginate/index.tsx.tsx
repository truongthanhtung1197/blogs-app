import { memo } from 'react';
import ReactPaginate from 'react-paginate';
import { range } from 'ramda';

function PaginatedItems({
    itemsPerPage,
    total,
    onchangePage,
    className
}: {
    itemsPerPage: number;
    total: number;
    onchangePage: (v: number) => void;
    className?: string;
}) {
    const items = range(1, total + 1);
    const pageCount = Math.ceil(items.length / itemsPerPage);
    const handlePageClick = (event: any) => {
        onchangePage(event.selected + 1);
    };

    return (
        <div className={className}>
            <ReactPaginate
                breakLabel="..."
                nextLabel="Next"
                onPageChange={handlePageClick}
                pageRangeDisplayed={2}
                pageCount={pageCount}
                previousLabel="Previous"
                renderOnZeroPageCount={undefined}
                className="text-azure inline-flex border rounded-md"
                pageClassName="w-[30px] md:w-[40px] center text-center border-r hover:shadow-xl hover:bg-text-azure hover:bg-azure hover:bg-opacity-40"
                previousClassName="text-center md:py-2 px-3 border-r"
                nextClassName="text-center md:py-2 px-3 border-l"
                activeClassName="text-white bg-azure hover:!bg-opacity-100"
                pageLinkClassName="w-full h-full flex justify-center items-center"
                breakClassName="w-[30px] md:w-[40px] center text-center border-r hover:shadow-xl hover:bg-text-azure hover:bg-azure hover:bg-opacity-40"
                breakLinkClassName="w-full h-full flex justify-center items-center"
            />
        </div>
    );
}

export default memo(PaginatedItems);
