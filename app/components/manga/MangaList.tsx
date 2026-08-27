'use client'

import type { Manga, MangaWithCover } from "@/types/manga";
import MangaCard from "./MangaCard";

interface MangaListProps {
    mangas: MangaWithCover[];
}

export default function MangaList({ mangas }: MangaListProps) {
    return (
        <div className="mx-auto max-w-6xl p-6">
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4">
                {mangas.map((manga) => (
                    <MangaCard
                        key={manga.id}
                        manga={manga}
                        coverUrl={manga.coverUrl}
                    />
                ))}
            </div>
        </div>
    );
}