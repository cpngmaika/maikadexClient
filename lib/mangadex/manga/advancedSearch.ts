import { mangadexClient } from "@/lib/mangadex/client";
import { AdvancedSearchParams } from "@/types/manga";

export async function advancedSearch(params: AdvancedSearchParams) {
    const {
        title,
        includedTagIDs = [],
        excludedTagIDs = [],
        contentRating = ['safe', 'suggestive', 'erotica'],
        publicationDemographic,
        status,
        year,
        limit = 20,
        offset = 0
    } = params;

    const response = await mangadexClient.get(`/manga`, {
        params: {
            title: title || undefined,
            includedTags: includedTagIDs.length > 0 ? includedTagIDs : undefined,
            excludedTags: excludedTagIDs.length > 0 ? excludedTagIDs : undefined,
            contentRating: contentRating,
            publicationDemographic: publicationDemographic,
            status: status,
            year: year,
            limit,
            offset,
            'includes[]': ['cover_art', 'author']
        }
    });

    return response.data;
}
