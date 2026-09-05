import React from "react";

interface AuthButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    isLoading?: boolean;
    children: React.ReactNode;
}

export default function AuthButton({ isLoading, children, className = "", ...props }: AuthButtonProps) {
    return (
        <button
            {...props}
            disabled={isLoading || props.disabled}
            className={`mt-4 w-full rounded-lg bg-[#18C3C3] px-4 py-3 text-sm font-bold uppercase tracking-widest text-white shadow-md transition-all hover:bg-[#15A8A8] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#18C3C3] focus:ring-opacity-50 disabled:cursor-not-allowed disabled:opacity-70 ${className}`}
        >
            {isLoading ? (
                <span className="flex items-center justify-center gap-2">
                    <svg className="h-4 w-4 animate-spin text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Đang xử lý...
                </span>
            ) : (
                children
            )}
        </button>
    );
}
