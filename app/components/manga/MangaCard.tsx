'use client';

import type { Manga } from "@/types/manga";
import Link from "next/link";
import CoverImage from "./CoverImage";

interface MangaCardProps {
    manga: Manga;
    coverUrl: string;
}

export default function MangaCard({ manga, coverUrl }: MangaCardProps) {
    return (
        <Link
            href={`/mangaInfo/${manga.id}`}
            className="group relative flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white p-2.5 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-gray-200 hover:shadow-xl"
        >
            {/* Khung chứa ảnh bìa với tỉ lệ chuẩn truyện tranh (3:4) và bo góc mượt */}
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl bg-gray-100">
                <div className="h-full w-full transition-transform duration-500 ease-out group-hover:scale-105">
                    <CoverImage
                        src={coverUrl}
                        alt={manga.title}
                        isBlurred={!!manga.isSensitive}
                    />
                </div>

                {/* Gradient tối nhẹ ở đáy ảnh giúp text nổi bật */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 transition-opacity group-hover:opacity-80" />

                {/* Badge cảnh báo nhạy cảm nếu có */}
                {manga.isSensitive && (
                    <span className="absolute top-2 left-2 rounded-md bg-red-500/90 px-2 py-0.5 text-[10px] font-bold tracking-wider text-white backdrop-blur-sm shadow-sm">
                        18+
                    </span>
                )}

                {/* Badge trạng thái hoặc số chapter ở góc dưới ảnh (nếu type Manga có trường này) */}
                {(manga as any).status && (
                    <span className="absolute bottom-2 left-2 rounded-md bg-black/60 px-2 py-0.5 text-[11px] font-medium text-gray-200 backdrop-blur-md">
                        {(manga as any).status}
                    </span>
                )}
            </div>

            {/* Khối thông tin */}
            <div className="flex flex-1 flex-col justify-between pt-3 pb-1 px-1">
                <div>
                    <h2
                        title={manga.title}
                        className="line-clamp-2 text-sm font-bold tracking-tight text-[#2D314E] transition-colors duration-200 group-hover:text-[#18C3C3]"
                    >
                        {manga.title}
                    </h2>
                </div>

                {/* Thông tin phụ: Tác giả / Tag / Thời gian cập nhật */}
                <div className="mt-2 flex items-center justify-between text-xs text-gray-400">
                    <span className="truncate max-w-[120px]">
                        {(manga as any).author || 'Đang cập nhật'}
                    </span>
                    <span className="flex items-center gap-1 text-[11px] font-semibold text-[#18C3C3]">
                        Chi tiết →
                    </span>
                </div>
            </div>
        </Link>
    );
}