"use client";

import { useState } from "react";
import { contentRatings } from "@/types/tag/ContentRating";
import { contentWarnings } from "@/types/tag/ContentWarnings";
import { demographics } from "@/types/tag/Demographic";
import { formats } from "@/types/tag/Format";
import { statuses } from "@/types/tag/PublicationStatus";
import { genres } from "@/types/tag/Genre";
import { themes } from "@/types/tag/Theme";
import { advancedSearch } from "@/lib/mangadex/manga/advancedSearch";
import MangaList from "../../components/manga/MangaList";
import type { MangaWithCover } from "@/types/manga";

export default function AdvantageSearch() {
    const [mangas, setMangas] = useState<MangaWithCover[]>([]);
    const [loading, setLoading] = useState(false);

    const [title, setTitle] = useState("");
    const [year, setYear] = useState("");
    const [includedTagIDs, setIncludedTagIDs] = useState<string[]>([]);
    const [excludedTagIDs, setExcludedTagIDs] = useState<string[]>([]);
    const [selectedDemographics, setSelectedDemographics] = useState<string[]>([]);
    const [selectedStatuses, setSelectedStatuses] = useState<string[]>([]);
    const [selectedContentRatings, setSelectedContentRatings] = useState<string[]>([
        "safe",
        "suggestive",
        "erotica",
    ]);

    const tagSections = [
        { title: "Genres", items: genres },
        { title: "Themes", items: themes },
        { title: "Formats", items: formats },
        { title: "Content Warnings", items: contentWarnings },
    ];

    // Tri-state toggle: Chưa chọn -> Include -> Exclude -> Chưa chọn
    const toggleTag = (id: string) => {
        if (includedTagIDs.includes(id)) {
            setIncludedTagIDs((prev) => prev.filter((tagID) => tagID !== id));
            setExcludedTagIDs((prev) => [...prev, id]);
            return;
        }
        if (excludedTagIDs.includes(id)) {
            setExcludedTagIDs((prev) => prev.filter((tagID) => tagID !== id));
            return;
        }
        setIncludedTagIDs((prev) => [...prev, id]);
    };

    const toggleDemographic = (value: string) => {
        setSelectedDemographics((prev) =>
            prev.includes(value)
                ? prev.filter((item) => item !== value)
                : [...prev, value]
        );
    };

    const toggleStatus = (value: string) => {
        setSelectedStatuses((prev) =>
            prev.includes(value)
                ? prev.filter((item) => item !== value)
                : [...prev, value]
        );
    };

    const toggleContentRating = (value: string) => {
        setSelectedContentRatings((prev) =>
            prev.includes(value)
                ? prev.filter((item) => item !== value)
                : [...prev, value]
        );
    };

    const handleSearch = async () => {
        setLoading(true);
        try {
            const result = await advancedSearch({
                title: title || undefined,
                includedTagIDs,
                excludedTagIDs,
                contentRating: selectedContentRatings,
                publicationDemographic:
                    selectedDemographics.length > 0 ? selectedDemographics : undefined,
                status: selectedStatuses.length > 0 ? selectedStatuses : undefined,
                year: year ? Number(year) : undefined,
                limit: 20,
                offset: 0,
            });

            const mangaList: MangaWithCover[] = result.data.map((manga: any) => {
                const coverArt = manga.relationships?.find(
                    (relationship: any) => relationship.type === "cover_art"
                );
                const coverFileName = coverArt?.attributes?.fileName;
                return {
                    id: manga.id,
                    title:
                        manga.attributes?.title?.en ??
                        Object.values(manga.attributes?.title ?? {})[0] ??
                        "Unknown",
                    coverUrl: coverFileName
                        ? `https://uploads.mangadex.org/covers/${manga.id}/${coverFileName}`
                        : "",
                    isSensitive: ['erotica', 'pornographic'].includes(manga.attributes?.contentRating) || 
                                 manga.attributes?.tags?.some((t: any) => t.attributes?.group === 'content'),
                };
            });
            setMangas(mangaList);
        } catch (error) {
            console.error("Advanced search failed:", error);
            setMangas([]);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="mx-auto max-w-7xl bg-white p-4 text-[#2D314E] md:p-8">
            <div className="mb-8 flex items-center gap-3 border-b-[3px] border-dotted border-gray-200 pb-4">
                <span className="text-3xl text-[#00b4c5]">✦</span>
                <h1 className="text-2xl font-extrabold uppercase tracking-widest text-[#2D314E] md:text-3xl">
                    Tìm kiếm nâng cao
                </h1>
            </div>

            <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-2">
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Nhập tên truyện cần tìm..."
                    className="w-full rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 px-4 py-3 font-medium text-[#2D314E] transition-all focus:border-[#00b4c5] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#00b4c5]/20"
                />
                <input
                    type="number"
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                    placeholder="Năm phát hành (VD: 2024)"
                    className="w-full rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 px-4 py-3 font-medium text-[#2D314E] transition-all focus:border-[#00b4c5] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#00b4c5]/20"
                />
            </div>

            <div className="space-y-8">
                {tagSections.map((section) => (
                    <section key={section.title} className="space-y-4">
                        <h2 className="flex items-center gap-2 text-sm font-extrabold uppercase tracking-widest text-[#54587A]">
                            <span className="text-[#00b4c5]">▪</span> {section.title}
                        </h2>
                        <div className="flex flex-wrap gap-2.5">
                            {section.items.map((item: any) => {
                                const tagId = item.id ?? item.name;
                                const included = includedTagIDs.includes(tagId);
                                const excluded = excludedTagIDs.includes(tagId);
                                return (
                                    <button
                                        key={tagId}
                                        type="button"
                                        onClick={() => toggleTag(tagId)}
                                        className={`inline-flex items-center gap-1.5 rounded-full border px-4 py-1.5 text-sm font-bold shadow-sm transition-all ${included
                                                ? "border-[#00b4c5] bg-[#00b4c5] text-white"
                                                : excluded
                                                    ? "border-red-500 bg-red-500 text-white"
                                                    : "border-gray-200 bg-white text-[#54587A] hover:border-[#00b4c5] hover:text-[#00b4c5]"
                                            }`}
                                    >
                                        {included && <span>✓</span>}
                                        {excluded && <span>✕</span>}
                                        {item.name}
                                    </button>
                                );
                            })}
                        </div>
                    </section>
                ))}
            </div>

            <section className="mt-8 space-y-4">
                <h2 className="flex items-center gap-2 text-sm font-extrabold uppercase tracking-widest text-[#54587A]">
                    <span className="text-[#00b4c5]">▪</span> Demographics
                </h2>
                <div className="flex flex-wrap gap-2.5">
                    {demographics.map((item: any) => {
                        const value = item.value ?? item.name.toLowerCase();
                        const selected = selectedDemographics.includes(value);
                        return (
                            <button
                                key={value}
                                type="button"
                                onClick={() => toggleDemographic(value)}
                                className={`rounded-full border px-4 py-1.5 text-sm font-bold shadow-sm transition-all ${selected
                                        ? "border-[#00b4c5] bg-[#00b4c5] text-white"
                                        : "border-gray-200 bg-white text-[#54587A] hover:border-[#00b4c5] hover:text-[#00b4c5]"
                                    }`}
                            >
                                {item.name}
                            </button>
                        );
                    })}
                </div>
            </section>

            <section className="mt-8 space-y-4">
                <h2 className="flex items-center gap-2 text-sm font-extrabold uppercase tracking-widest text-[#54587A]">
                    <span className="text-[#00b4c5]">▪</span> Publication Statuses
                </h2>
                <div className="flex flex-wrap gap-2.5">
                    {statuses.map((item: any) => {
                        const value = item.value ?? item.name.toLowerCase();
                        const selected = selectedStatuses.includes(value);
                        return (
                            <button
                                key={value}
                                type="button"
                                onClick={() => toggleStatus(value)}
                                className={`rounded-full border px-4 py-1.5 text-sm font-bold shadow-sm transition-all ${selected
                                        ? "border-[#00b4c5] bg-[#00b4c5] text-white"
                                        : "border-gray-200 bg-white text-[#54587A] hover:border-[#00b4c5] hover:text-[#00b4c5]"
                                    }`}
                            >
                                {item.name}
                            </button>
                        );
                    })}
                </div>
            </section>

            <section className="mt-8 space-y-4">
                <h2 className="flex items-center gap-2 text-sm font-extrabold uppercase tracking-widest text-[#54587A]">
                    <span className="text-[#00b4c5]">▪</span> Content Ratings
                </h2>
                <div className="flex flex-wrap gap-2.5">
                    {contentRatings.map((item: any) => {
                        const value = item.value ?? item.name.toLowerCase();
                        const selected = selectedContentRatings.includes(value);
                        return (
                            <button
                                key={value}
                                type="button"
                                onClick={() => toggleContentRating(value)}
                                className={`rounded-full border px-4 py-1.5 text-sm font-bold shadow-sm transition-all ${selected
                                        ? "border-[#00b4c5] bg-[#00b4c5] text-white"
                                        : "border-gray-200 bg-white text-[#54587A] hover:border-[#00b4c5] hover:text-[#00b4c5]"
                                    }`}
                            >
                                {item.name}
                            </button>
                        );
                    })}
                </div>
            </section>

            <div className="mt-12 flex justify-center border-t border-gray-200 pt-8">
                <button
                    type="button"
                    onClick={handleSearch}
                    disabled={loading}
                    className="group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-[#00b4c5] px-12 py-3.5 text-sm font-extrabold uppercase tracking-widest text-white shadow-lg transition-all hover:-translate-y-0.5 hover:bg-[#009aaa] hover:shadow-xl disabled:pointer-events-none disabled:opacity-60 sm:w-auto"
                >
                    {loading ? "ĐANG TÌM KIẾM..." : "TÌM KIẾM NGAY"}
                    {!loading && (
                        <span className="transition-transform group-hover:translate-x-1">
                            &gt;
                        </span>
                    )}
                </button>
            </div>

            {mangas.length > 0 && (
                <div className="mt-12 rounded-xl border border-gray-100 bg-gray-50/50 p-6 shadow-sm">
                    <h2 className="mb-6 flex items-center gap-2 text-xl font-extrabold uppercase tracking-widest text-[#54587A]">
                        Kết quả tìm kiếm
                    </h2>
                    <MangaList mangas={mangas} />
                </div>
            )}
        </div>
    );
}