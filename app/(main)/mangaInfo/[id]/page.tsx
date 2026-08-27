import ChapterList from "@/app/components/manga/chapterList";
import { getChapters } from "@/lib/mangadex/manga/chapter";
import { getMangaInfo } from "@/lib/mangadex/manga/info";

export default async function MangaInfoPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;

    if (!id) {
        return <div>Không tìm thấy manga</div>;
    }

    const [chapters, manga] = await Promise.all([
        getChapters(id),
        getMangaInfo(id)
    ]);

    return (
        <div className="flex flex-col gap-6 md:flex-row p-4">
            <div className="w-full md:w-1/4">
                {manga.coverFileName && (
                    <img
                        src={`https://uploads.mangadex.org/covers/${manga.id}/${manga.coverFileName}.512.jpg`}
                        alt={manga.title}
                        className="w-full rounded-lg shadow-md object-cover aspect-[2/3]"
                    />
                )}
                <h1 className="text-xl font-bold mt-4">{manga.title}</h1>
            </div>

            <div className="w-full md:w-3/4">
                <h2 className="text-lg font-semibold mb-4">Danh sách chương</h2>
                <ChapterList chapters={chapters} />
            </div>
        </div>
    );
}