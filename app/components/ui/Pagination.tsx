'use client';

import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';

interface PaginationProps {
    currentPage: number;
    totalPages: number;
}

export default function Pagination({ currentPage, totalPages }: PaginationProps) {
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const createPageUrl = (pageNumber: number) => {
        const params = new URLSearchParams(searchParams.toString());
        params.set('page', pageNumber.toString());
        return `${pathname}?${params.toString()}`;
    };

    if (totalPages <= 1) return null;

    const maxPagesToShow = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
    let endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);

    if (endPage - startPage + 1 < maxPagesToShow) {
        startPage = Math.max(1, endPage - maxPagesToShow + 1);
    }

    const pages = Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);

    return (
        <div className="flex justify-center items-center gap-2 py-8 select-none">
            {/* Nút Trước */}
            <Link
                href={createPageUrl(Math.max(1, currentPage - 1))}
                className={`flex items-center gap-1 px-4 py-2 text-sm font-bold tracking-wide rounded transition-colors ${currentPage === 1
                        ? 'pointer-events-none opacity-40 bg-gray-100 text-gray-400'
                        : 'bg-white border border-gray-200 text-[#2D314E] hover:bg-[#00b4c5] hover:text-white hover:border-[#00b4c5]'
                    }`}
                aria-disabled={currentPage === 1}
            >
                <span>&lt;</span> Trước
            </Link>

            {/* Trang đầu & dấu ... */}
            {startPage > 1 && (
                <>
                    <Link
                        href={createPageUrl(1)}
                        className="flex h-9 min-w-9 items-center justify-center rounded px-3 text-sm font-bold text-[#2D314E] border border-gray-200 bg-white hover:bg-[#00b4c5] hover:text-white hover:border-[#00b4c5] transition-colors"
                    >
                        1
                    </Link>
                    {startPage > 2 && <span className="px-1 text-gray-400 font-bold">...</span>}
                </>
            )}

            {/* Các trang số */}
            {pages.map(page => (
                <Link
                    key={page}
                    href={createPageUrl(page)}
                    className={`flex h-9 min-w-9 items-center justify-center rounded px-3 text-sm font-bold transition-colors ${currentPage === page
                            ? 'bg-[#00b4c5] text-white shadow-sm border border-[#00b4c5]'
                            : 'bg-white border border-gray-200 text-[#2D314E] hover:bg-[#00b4c5] hover:text-white hover:border-[#00b4c5]'
                        }`}
                >
                    {page}
                </Link>
            ))}

            {/* Dấu ... & trang cuối */}
            {endPage < totalPages && (
                <>
                    {endPage < totalPages - 1 && <span className="px-1 text-gray-400 font-bold">...</span>}
                    <Link
                        href={createPageUrl(totalPages)}
                        className="flex h-9 min-w-9 items-center justify-center rounded px-3 text-sm font-bold text-[#2D314E] border border-gray-200 bg-white hover:bg-[#00b4c5] hover:text-white hover:border-[#00b4c5] transition-colors"
                    >
                        {totalPages}
                    </Link>
                </>
            )}

            {/* Nút Sau */}
            <Link
                href={createPageUrl(Math.min(totalPages, currentPage + 1))}
                className={`flex items-center gap-1 px-4 py-2 text-sm font-bold tracking-wide rounded transition-colors ${currentPage === totalPages
                        ? 'pointer-events-none opacity-40 bg-gray-100 text-gray-400'
                        : 'bg-white border border-gray-200 text-[#2D314E] hover:bg-[#00b4c5] hover:text-white hover:border-[#00b4c5]'
                    }`}
                aria-disabled={currentPage === totalPages}
            >
                Sau <span>&gt;</span>
            </Link>
        </div>
    );
}