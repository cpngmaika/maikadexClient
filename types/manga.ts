export interface Manga {
    id: string;
    title: string;
    coverFileName: string | null;
}

export type MangaWithCover = Manga & { coverUrl: string };

export interface AdvancedSearchParams {
    title?: string;
    includedTagIDs?: string[];
    excludedTagIDs?: string[];
    contentRating?: string[]; // vd: ['safe', 'suggestive']
    publicationDemographic?: string[]; // vd: ['shounen', 'seinen']
    status?: string[]; // vd: ['ongoing', 'completed']
    year?: number;
    limit?: number;
    offset?: number;
}