export interface Manga {
    id: string;
    title: string;
    coverFileName: string | null;
}

export type MangaWithCover = Manga & { coverUrl: string };