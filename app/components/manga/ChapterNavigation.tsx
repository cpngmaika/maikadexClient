import Link from "next/link";
import { NavProps } from "@/types/chapter";

export default function ChapterNavigation({ prevId, nextId, title }: NavProps) {
    return (
        <div className="flex justify-between items-center w-full max-w-3xl my-6 px-4">
            {prevId ? (
                <Link href={`/read?id=${prevId}`} className="px-6 py-2.5 bg-[#18C3C3] hover:bg-[#15A8A8] shadow-md hover:shadow-lg transform hover:-translate-y-0.5 rounded-full text-white transition-all font-bold tracking-wider text-sm uppercase">
                    &larr; Trước
                </Link>
            ) : (
                <div className="px-6 py-2.5 text-gray-400 invisible">&larr; Trước</div>
            )}

            <div className="font-bold text-[#2D314E] text-center flex-1 mx-4 text-base truncate">
                {title}
            </div>

            {nextId ? (
                <Link href={`/read?id=${nextId}`} className="px-6 py-2.5 bg-[#18C3C3] hover:bg-[#15A8A8] shadow-md hover:shadow-lg transform hover:-translate-y-0.5 rounded-full text-white transition-all font-bold tracking-wider text-sm uppercase">
                    Sau &rarr;
                </Link>
            ) : (
                <div className="px-6 py-2.5 text-gray-400 invisible">Sau &rarr;</div>
            )}
        </div>
    );
}
