export interface Chapter {
    id: string,
    chapter: number,
    title: string | null,
    publishAt: Date,
    image?: string[],
    trans_group?: string,
}

export interface NavProps {
    prevId: string | null;
    nextId: string | null;
    title: string;
}