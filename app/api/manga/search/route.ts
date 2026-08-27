import { NextResponse } from "next/server";
import { searchManga } from "@/lib/mangadex/manga/search";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const title = searchParams.get("title");

    if (!title) {
        return NextResponse.json(
            { error: "Title is required" },
            { status: 400 }
        );
    }

    try {
        const manga = await searchManga(title);
        return NextResponse.json(manga);
    } catch (error) {
        return NextResponse.json(
            { error: "Failed to search manga" },
            { status: 500 }
        );
    }
}