import Link from "next/link";
import { NavProps } from "@/types/chapter";

export default function ChapterNavigation({ prevId, nextId, title }: NavProps) {
    return (
        <div className="flex justify-between items-center w-full max-w-3xl my-6 px-4">
            {prevId ? (
                <Link href={`/read?id=${prevId}`} className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-md text-gray-800 transition-colors font-medium text-sm">
                    &larr; Trước
                </Link>
            ) : (
                <div className="px-4 py-2 text-gray-400 invisible">&larr; Trước</div>
            )}

            <div className="font-semibold text-gray-700 text-center flex-1 mx-4 text-sm truncate">
                {title}
            </div>

            {nextId ? (
                <Link href={`/read?id=${nextId}`} className="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-md text-white transition-colors font-medium text-sm">
                    Sau &rarr;
                </Link>
            ) : (
                <div className="px-4 py-2 text-gray-400 invisible">Sau &rarr;</div>
            )}
        </div>
    );
}
