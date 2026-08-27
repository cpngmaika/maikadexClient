import { mangadexClient } from "@/lib/mangadex/client";

export async function getChapterImages(chapterId: string) {
    try {
        const response = await mangadexClient.get(
            `/at-home/server/${chapterId}`
        );


        const baseUrl = response.data?.baseUrl || "https://uploads.mangadex.org";
        const hash = response.data?.chapter?.hash;
        const data = response.data?.chapter?.data;

        if (!hash || !Array.isArray(data) || data.length === 0) {
            return [];
        }

        const images = data.map((image: string) => `${baseUrl}/data/${hash}/${image}`);

        return images;
    } catch (error) {
        console.error("Error fetching images:", error);
        return [];
    }
}

// console.log(await getChapterImages('a54c491c-8e4c-4e97-8873-5b79e59da210'))