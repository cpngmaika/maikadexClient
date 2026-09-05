import Link from "next/link";
import React from "react";

interface AuthCardProps {
    title: string;
    description?: string;
    children: React.ReactNode;
    footerText?: string;
    footerLink?: string;
    footerLinkText?: string;
}

export default function AuthCard({
    title,
    description,
    children,
    footerText,
    footerLink,
    footerLinkText,
}: AuthCardProps) {
    return (
        <div className="flex min-h-[calc(100vh-160px)] items-center justify-center p-4">
            <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl border border-gray-100">
                <div className="mb-8 text-center">
                    <h1 className="text-3xl font-bold tracking-tight text-[#2D314E]">{title}</h1>
                    {description && (
                        <p className="mt-2 text-sm text-gray-500">{description}</p>
                    )}
                </div>

                {children}

                {(footerText || footerLink) && (
                    <div className="mt-8 text-center text-sm text-gray-600">
                        {footerText}{" "}
                        {footerLink && footerLinkText && (
                            <Link
                                href={footerLink}
                                className="font-semibold text-[#18C3C3] hover:text-[#15A8A8] transition-colors"
                            >
                                {footerLinkText}
                            </Link>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}
