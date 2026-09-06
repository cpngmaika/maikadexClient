import { mangadexClient } from "@/lib/mangadex/client";
import type { Manga } from "@/types/manga";
import { checkIsAdultContent } from "./isSensitiveContent";

export async function getChapters(mangaId: string) {
    try {
        const response = await mangadexClient.get(
            `/chapter?manga=${mangaId}&limit=20&order[publishAt]=desc`
        );

        return response.data.data.map((chapter: any) => ({
            id: chapter.id,
            chapter: chapter.attributes.chapter,
            title: chapter.attributes.title,
            publishAt: new Date(chapter.attributes.publishAt),
        }));

    } catch (error) {
        console.error("Something went wrong:", error);
        return [];
    }
}

export async function getAtHomeMangas(page: number = 1, limit: number = 20): Promise<{ data: Manga[], total: number }> {
    try {
        const MAX_PAGINATED_ITEMS = 10000;
        const offset = Math.min((page - 1) * limit, MAX_PAGINATED_ITEMS - limit);

        const response = await mangadexClient.get(`/manga`, {
            params: {
                "includes[]": "cover_art",
                limit,
                offset: Math.max(0, offset),
            }
        });

        const mangas = response.data.data.map((manga: any) => {
            const cover = manga.relationships.find(
                (rel: any) => rel.type === "cover_art"
            );

            return {
                id: manga.id,
                title:
                    `${manga.attributes.title.vi ?? ""}${manga.attributes.title.vi && manga.attributes.title.en ? " - " : ""
                    }${manga.attributes.title.en ?? ""}` ||
                    Object.values(manga.attributes.title)[0] ||
                    "unknown",
                coverFileName: cover
                    ? cover.attributes.fileName
                    : null,
                isSensitive: checkIsAdultContent(manga),
            };
        });
        
        // MangaDex chỉ cho phép phân trang tối đa 10,000 kết quả
        const total = Math.min(response.data.total || 0, MAX_PAGINATED_ITEMS);
        return { data: mangas, total };
    } catch (error) {
        console.error("Something went wrong:", error);
        return { data: [], total: 0 };
    }
}