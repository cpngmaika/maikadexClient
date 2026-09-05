import { getChapterImages } from "@/lib/mangadex/manga/images"
import ReadChapter from "@/app/components/manga/Reader"
import { getChapterById, getChapters } from "@/lib/mangadex/manga/chapter"
import { Chapter } from "@/types/chapter"

export default async function readPage({
    searchParams
}: {
    searchParams: Promise<{ id?: string }>
}) {
    const { id } = await searchParams

    if (!id) {
        return <div>Không tìm thấy chapter</div>
    }

    const [readChaper, chapterInfo] = await Promise.all([
        getChapterImages(id),
        getChapterById(id)
    ])

    let prevId = null;
    let nextId = null;
    let chapterTitle = chapterInfo ? `Chapter ${chapterInfo.chapter}${chapterInfo.title ? ` - ${chapterInfo.title}` : ""}` : "Đang đọc";

    if (chapterInfo && chapterInfo.mangaId) {
        const allChapters = await getChapters(chapterInfo.mangaId, chapterInfo.language);
        
        const groupChapters = allChapters.filter(
            (c: Chapter) => c.trans_group === chapterInfo.trans_group
        ).sort((a: Chapter, b: Chapter) => a.chapter - b.chapter);

        const currentIndex = groupChapters.findIndex((c: Chapter) => c.id === id);

        if (currentIndex > 0) {
            prevId = groupChapters[currentIndex - 1].id;
        }
        if (currentIndex !== -1 && currentIndex < groupChapters.length - 1) {
            nextId = groupChapters[currentIndex + 1].id;
        }
    }

    return (
        <div>
            <ReadChapter 
                images={readChaper} 
                navigation={{ prevId, nextId, title: chapterTitle }} 
            />
        </div>
    )
}