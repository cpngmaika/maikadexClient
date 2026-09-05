import { mangadexClient } from "@/lib/mangadex/client";
import { getChapters } from "./chapter";

export async function getMangaInfo(id: string) {
    const response = await mangadexClient.get(`/manga/${id}`, {
        params: {
            "includes[]": "cover_art",
        }
    });

    const manga = response.data.data;
    const cover = manga.relationships.find((rel: any) => rel.type === "cover_art");
    const tags: string[] = manga.attributes.tags?.map((tag: any) =>
        tag.attributes.name.en ?? Object.values(tag.attributes.name)[0]
    ).filter(Boolean) ?? [];

    return {
        id: manga.id,
        title: manga.attributes.title.en ?? Object.values(manga.attributes.title)[0] ?? "unknown",
        coverFileName: cover ? cover.attributes.fileName : null,
        description: manga.attributes.description.en ?? Object.values(manga.attributes.description)[0] ?? "",
        tags,
    };
}
