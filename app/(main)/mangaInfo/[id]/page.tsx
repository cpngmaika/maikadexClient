import ChapterList from "@/app/components/manga/chapterList";
import { getChapters } from "@/lib/mangadex/manga/chapter";
import { getMangaInfo } from "@/lib/mangadex/manga/info";
import Link from "next/link";

export default async function MangaInfoPage({
    params,
    searchParams,
}: {
    params: Promise<{ id: string }>;
    searchParams: Promise<{ lang?: string }>;
}) {
    const { id } = await params;
    const { lang } = await searchParams || {};
    const currentLang = lang || 'vi';

    if (!id) {
        return <div className="p-8 text-center font-bold text-[#54587A]">Không tìm thấy manga</div>;
    }

    const [chapters, manga] = await Promise.all([
        getChapters(id, currentLang),
        getMangaInfo(id)
    ]);

    return (
        <div className="max-w-7xl mx-auto p-4 md:p-8 bg-white">
            <div className="flex flex-col md:flex-row gap-8 lg:gap-12">

                {/* 1. Cột trái: Chỉ chứa Ảnh bìa */}
                <div className="w-full md:w-[280px] lg:w-[320px] shrink-0">
                    {manga.coverFileName ? (
                        <div className="p-2 border-2 border-dashed border-gray-200 rounded-xl sticky top-28">
                            <img
                                src={`https://uploads.mangadex.org/covers/${manga.id}/${manga.coverFileName}.512.jpg`}
                                alt={manga.title}
                                className="w-full rounded-lg shadow-md object-cover aspect-[2/3]"
                            />
                        </div>
                    ) : (
                        <div className="w-full aspect-[2/3] bg-gray-100 rounded-lg border-2 border-dashed border-gray-200 flex items-center justify-center text-gray-400 font-bold">
                            No Cover
                        </div>
                    )}
                </div>

                {/* 2. Cột phải: Chi tiết Manga & Danh sách chương */}
                <div className="flex-1 flex flex-col gap-6">

                    {/* Phần Thông tin (Info) */}
                    <div className="flex flex-col gap-4">
                        <h1 className="text-3xl md:text-4xl font-extrabold text-[#2D314E] tracking-tight">
                            {manga.title}
                        </h1>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2">
                            {manga.tags?.map((tag: string) => (
                                <span
                                    key={tag}
                                    className="bg-[#54587A] text-white text-xs font-bold px-3 py-1.5 rounded-sm uppercase tracking-wider"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>

                        {/* Tóm tắt */}
                        {manga.description && (
                            <div className="mt-2 bg-gray-50/50 p-4 rounded-lg border border-gray-100">
                                <h3 className="font-extrabold text-[#54587A] uppercase tracking-widest mb-3 flex items-center gap-2">
                                    <span className="text-[#18C3C3] text-lg">✦</span> Tóm tắt
                                </h3>
                                <p className="text-sm text-[#4A4E69] leading-relaxed whitespace-pre-wrap">
                                    {manga.description}
                                </p>
                            </div>
                        )}
                    </div>

                    {/* Đường phân cách */}
                    <div className="border-t-2 border-dotted border-gray-200 my-2"></div>

                    {/* Phần Danh sách chương */}
                    <div className="flex flex-col gap-4">
                        {/* Thanh Header chọn ngôn ngữ */}
                        <div className="bg-[#54587A] rounded-md p-1.5 relative shadow-md">
                            <div className="absolute inset-1.5 border-[1.5px] border-dashed border-white/20 pointer-events-none rounded-sm"></div>

                            <div className="relative z-10 flex flex-col sm:flex-row justify-between items-center px-4 py-2 gap-4">
                                <h2 className="text-white font-extrabold text-lg uppercase tracking-widest drop-shadow-sm">
                                    Danh sách chương
                                </h2>

                                <div className="flex items-center gap-2 text-sm font-bold">
                                    <Link
                                        href={`?lang=vi`}
                                        className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full transition-all ${currentLang === 'vi'
                                                ? 'bg-[#18C3C3] text-white shadow-sm'
                                                : 'text-white/70 hover:text-white'
                                            }`}
                                    >
                                        {currentLang === 'vi' && <span>✦</span>}
                                        Tiếng Việt
                                    </Link>

                                    <span className="h-4 w-[1px] bg-white/30 mx-1"></span>

                                    <Link
                                        href={`?lang=en`}
                                        className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full transition-all ${currentLang === 'en'
                                                ? 'bg-[#18C3C3] text-white shadow-sm'
                                                : 'text-white/70 hover:text-white'
                                            }`}
                                    >
                                        {currentLang === 'en' && <span>✦</span>}
                                        Tiếng Anh
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Nội dung danh sách */}
                        <div className="bg-white border-b-[8px] border-dotted border-gray-200 pb-4">
                            <ChapterList chapters={chapters} />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}