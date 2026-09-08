'use client'

import { useState } from "react";

interface CoverImageProps {
    src: string;
    alt: string;
    isBlurred: boolean;
}

export default function CoverImage({ src, alt, isBlurred }: CoverImageProps) {
    const [isRevealed, setIsRevealed] = useState(false);

    const shouldBlur = isBlurred && !isRevealed;

    return (
        <div className="relative aspect-[2/3] w-full overflow-hidden rounded-lg bg-gray-200">
            <img
                src={src}
                alt={alt}
                className={`h-full w-full object-cover transition-all duration-300 ${shouldBlur ? 'blur-xl scale-110' : ''}`}
                referrerPolicy="no-referrer"
            />
            {shouldBlur && (
                <div 
                    className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 text-center cursor-pointer p-2 z-10"
                    onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setIsRevealed(true);
                    }}
                >
                    <svg className="w-8 h-8 text-white/80 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                    </svg>
                    <span className="text-white font-bold text-sm bg-black/60 px-3 py-1 rounded-full border border-white/20">
                        Nhạy cảm (18+)
                    </span>
                    <span className="text-white/80 text-xs mt-1">Chạm để xem</span>
                </div>
            )}
        </div>
    );
}
