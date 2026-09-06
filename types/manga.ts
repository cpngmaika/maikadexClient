export interface Manga {
    id: string;
    title: string;
    coverFileName: string | null;
    isSensitive: boolean;
}

export type MangaWithCover = Manga & { coverUrl: string };

export interface AdvancedSearchParams {
    title?: string;

    includedTagIDs?: string[];
    excludedTagIDs?: string[];

    contentRating?: string[];
    publicationDemographic?: string[];
    status?: string[];

    year?: number;

    limit?: number;
    offset?: number;
}