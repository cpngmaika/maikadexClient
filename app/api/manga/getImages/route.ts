import { NextResponse } from "next/server";
import { getChapterImages } from "@/lib/mangadex/manga/images";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const chapterId = searchParams.get("chapterId") || searchParams.get("id");

    if (!chapterId) {
        return NextResponse.json(
            { error: "Chapter ID is required" },
            { status: 400 }
        );
    }

    try {
        const images = await getChapterImages(chapterId);

        if (!images || images.length === 0) {
            return NextResponse.json(
                { error: "Không tìm thấy ảnh cho chương này", images: [] },
                { status: 404 }
            );
        }

        return NextResponse.json(images);
    } catch (error) {
        return NextResponse.json(
            { error: "Failed to get chapter images" },
            { status: 500 }
        );
    }
}
