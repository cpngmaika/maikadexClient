import MangaList from "@/app/components/manga/MangaList";
import { searchManga } from "@/lib/mangadex/manga/search";
import type { MangaWithCover } from "@/types/manga";

export default async function SearchListPage({
    searchParams,
}: {
    searchParams: Promise<{ title?: string }>;
}) {
    const { title } = await searchParams;

    if (!title) {
        return <div className="p-6">Không tìm thấy manga</div>;
    }

    const rawMangas = await searchManga(title);
    const mangas: MangaWithCover[] = rawMangas.map((m: any) => ({
        ...m,
        coverUrl: `https://uploads.mangadex.org/covers/${m.id}/${m.coverFileName}.256.jpg`
    }));

    return <MangaList mangas={mangas} />;
}