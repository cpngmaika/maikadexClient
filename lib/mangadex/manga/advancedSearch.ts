import { mangadexClient } from "@/lib/mangadex/client";
import { AdvancedSearchParams } from "@/types/manga";

export async function advancedSearch(params: AdvancedSearchParams) {
    const {
        title,
        includedTagIDs = [],
        excludedTagIDs = [],
        contentRating = ["safe", "suggestive", "erotica"],
        publicationDemographic,
        status,
        year,
        offset = 0,
        limit = 20,
    } = params;

    const response = await mangadexClient.get("/manga", {
        params: {
            title: title || undefined,

            includedTags:
                includedTagIDs.length > 0
                    ? includedTagIDs
                    : undefined,

            excludedTags:
                excludedTagIDs.length > 0
                    ? excludedTagIDs
                    : undefined,

            contentRating,
            publicationDemographic,
            status,
            year,

            offset,
            limit,

            "includes[]": ["cover_art", "author"],
        },
    });

    return response.data;
}