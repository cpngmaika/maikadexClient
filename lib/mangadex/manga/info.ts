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

    return {
        id: manga.id,
        title: manga.attributes.title.en ?? Object.values(manga.attributes.title)[0] ?? "unknown",
        coverFileName: cover ? cover.attributes.fileName : null,
        description: manga.attributes.description.en ?? Object.values(manga.attributes.description)[0] ?? "",
    };
}
