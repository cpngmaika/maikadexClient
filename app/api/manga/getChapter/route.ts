import { NextResponse } from "next/server";
import { getChapters } from "@/lib/mangadex/manga/chapter";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const mangaID = searchParams.get("mangaID");

    if (!mangaID) {
        return NextResponse.json(
            { error: "Manga ID is required" },
            { status: 400 }
        );
    }

    try {
        const chapters = await getChapters(mangaID);

        return NextResponse.json(chapters);
    } catch (error) {
        return NextResponse.json(
            { error: "Failed to get chapters" },
            { status: 500 }
        );
    }
}