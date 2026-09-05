'use client'

import type { Manga } from "@/types/manga"
import Link from "next/link";

interface MangaCardProps {
    manga: Manga;
    coverUrl: string;
}

export default function MangaCard({ manga, coverUrl }: MangaCardProps) {
    return (
        <Link
            href={`/mangaInfo/${manga.id}`}
            className="block overflow-hidden rounded-xl border border-gray-200 bg-white p-3 shadow-sm"
        >
            <img
                src={coverUrl}
                alt={manga.title}
                className="aspect-[2/3] w-full rounded-lg object-cover"
            />

            <div className="pt-3">
                <h2 className="line-clamp-2 text-sm font-semibold text-gray-800">
                    {manga.title}
                </h2>
            </div>
        </Link>
    );
}