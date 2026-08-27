import ChapterNavigation from "./ChapterNavigation";
import { NavProps } from "@/types/chapter";

interface ReaderProps {
    images?: string[] | null;
    navigation?: NavProps;
}

export default function ReadChapter({ images = [], navigation }: ReaderProps) {
    if (!images || images.length === 0) {
        return (
            <div className="p-4 text-center text-gray-500">
                Chương này hiện chưa có ảnh hoặc không thể tải ảnh.
            </div>
        );
    }

    return (
        <div className="flex flex-col items-center">
            {navigation && <ChapterNavigation {...navigation} />}

            {images.map((image, index) => (
                <img
                    key={image}
                    src={image}
                    alt={`Page ${index + 1}`}
                    className="max-w-full"
                />
            ))}

            {navigation && <ChapterNavigation {...navigation} />}
        </div>
    );
}