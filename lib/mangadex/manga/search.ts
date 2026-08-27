import { mangadexClient } from "@/lib/mangadex/client";

// search for manga and cover
export async function searchManga(title: string) {
    try {
        const response = await mangadexClient.get(`/manga`, {
            params: {
                title,
                "includes[]": "cover_art",
                limit: 20
            }
        });

        return response.data.data.map((manga: any) => {
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
            };
        });
    } catch (error) {
        console.error("Search manga error:", error);
        return [];
    }
}

// console.log(await searchManga("frieren"));