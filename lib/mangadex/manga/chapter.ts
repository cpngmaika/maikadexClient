import { mangadexClient } from "@/lib/mangadex/client"

export async function getChapters(mangaID: string) {
    try {
        const response = await mangadexClient.get(
            `/manga/${mangaID}/feed`,
            {
                params: {
                    "includes[]": "scanlation_group",
                },
            }
        );

        return response.data.data.map((chapter: any) => {
            const group = chapter.relationships?.find((rel: any) => rel.type === "scanlation_group");
            return {
                id: chapter.id,
                chapter: Number(chapter.attributes.chapter),
                title: chapter.attributes.title,
                publishAt: new Date(chapter.attributes.publishAt),
                trans_group:
                    group?.attributes?.name ??
                    (group?.id ? "Không rõ" : "Không có nhóm"),
            };
        });
    } catch (error) {
        console.error("Error fetching chapters:", error);
        return [];
    }
}

export async function getChapterById(chapterId: string) {
    try {
        const response = await mangadexClient.get(`/chapter/${chapterId}`, {
            params: {
                "includes[]": ["scanlation_group", "manga"],
            },
        });
        const chapter = response.data.data;
        const group = chapter.relationships?.find((rel: any) => rel.type === "scanlation_group");
        const manga = chapter.relationships?.find((rel: any) => rel.type === "manga");
        
        return {
            id: chapter.id,
            chapter: Number(chapter.attributes.chapter),
            title: chapter.attributes.title,
            mangaId: manga?.id,
            trans_group: group?.attributes?.name ?? (group?.id ? "Không rõ" : "Không có nhóm"),
        };
    } catch (error) {
        console.error("Error fetching chapter info:", error);
        return null;
    }
}