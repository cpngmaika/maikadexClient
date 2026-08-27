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
        <div className="flex justify-center items-center space-x-2 py-8">
            <Link 
                href={createPageUrl(Math.max(1, currentPage - 1))}
                className={`px-4 py-2 rounded-lg border ${currentPage === 1 ? 'pointer-events-none opacity-50 bg-gray-100 text-gray-400' : 'bg-white hover:bg-gray-50 text-gray-700'}`}
                aria-disabled={currentPage === 1}
            >
                Trước
            </Link>
            
            {startPage > 1 && (
                <>
                    <Link href={createPageUrl(1)} className="px-4 py-2 rounded-lg border bg-white hover:bg-gray-50 text-gray-700">1</Link>
                    {startPage > 2 && <span className="px-2 text-gray-500">...</span>}
                </>
            )}

            {pages.map(page => (
                <Link
                    key={page}
                    href={createPageUrl(page)}
                    className={`px-4 py-2 rounded-lg border ${currentPage === page ? 'bg-blue-600 text-white border-blue-600' : 'bg-white hover:bg-gray-50 text-gray-700'}`}
                >
                    {page}
                </Link>
            ))}

            {endPage < totalPages && (
                <>
                    {endPage < totalPages - 1 && <span className="px-2 text-gray-500">...</span>}
                    <Link href={createPageUrl(totalPages)} className="px-4 py-2 rounded-lg border bg-white hover:bg-gray-50 text-gray-700">{totalPages}</Link>
                </>
            )}

            <Link 
                href={createPageUrl(Math.min(totalPages, currentPage + 1))}
                className={`px-4 py-2 rounded-lg border ${currentPage === totalPages ? 'pointer-events-none opacity-50 bg-gray-100 text-gray-400' : 'bg-white hover:bg-gray-50 text-gray-700'}`}
                aria-disabled={currentPage === totalPages}
            >
                Sau
            </Link>
        </div>
    );
}
