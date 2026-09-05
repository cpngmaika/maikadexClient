import React from "react";

interface AuthInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
    error?: string;
}

export default function AuthInput({ label, error, ...props }: AuthInputProps) {
    return (
        <div className="mb-4">
            <label className="mb-1 block text-sm font-medium text-gray-700">
                {label}
            </label>
            <input
                className={`w-full rounded-lg border px-4 py-2.5 text-sm outline-none transition-all focus:ring-2 focus:ring-opacity-50 ${
                    error
                        ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                        : "border-gray-300 focus:border-[#18C3C3] focus:ring-[#18C3C3]"
                }`}
                {...props}
            />
            {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
        </div>
    );
}
