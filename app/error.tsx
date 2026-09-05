'use client'; // Error components must be Client Components

import { useEffect } from 'react';
import Link from 'next/link';

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error('System error:', error);
    }, [error]);

    return (
        <div className="flex min-h-[70vh] flex-col items-center justify-center p-6 text-center">
            {/* Error Icon */}
            <div className="mb-8 flex h-28 w-28 items-center justify-center rounded-full bg-red-50 text-red-500 shadow-sm ring-1 ring-red-100">
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-14 w-14" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                >
                    <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" 
                    />
                </svg>
            </div>

            {/* Content */}
            <h2 className="text-3xl font-bold text-[#2D314E] md:text-4xl">
                Đã xảy ra lỗi hệ thống (500)
            </h2>
            <p className="mx-auto mt-4 mb-10 max-w-md text-gray-500">
                Xin lỗi, đã có sự cố ngoài ý muốn xảy ra trong quá trình xử lý yêu cầu của bạn.
            </p>

            {/* Actions */}
            <div className="flex flex-col gap-4 sm:flex-row">
                <button
                    onClick={() => reset()}
                    className="rounded-full bg-[#18C3C3] px-8 py-3.5 text-sm font-bold uppercase tracking-widest text-white shadow-md transition-all hover:-translate-y-0.5 hover:bg-[#15A8A8] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#18C3C3] focus:ring-opacity-50"
                >
                    Thử lại
                </button>
                <Link
                    href="/"
                    className="rounded-full border border-gray-200 bg-white px-8 py-3.5 text-sm font-bold uppercase tracking-widest text-[#2D314E] shadow-sm transition-all hover:-translate-y-0.5 hover:bg-gray-50 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-gray-200"
                >
                    Về trang chủ
                </Link>
            </div>
        </div>
    );
}
