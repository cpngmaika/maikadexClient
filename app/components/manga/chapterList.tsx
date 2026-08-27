'use client'

import { Chapter } from "@/types/chapter"
import Link from "next/link";
import { useState } from "react";

interface ChapterListProps {
    chapters: Chapter[]
}

export default function ChapterList({ chapters }: ChapterListProps) {
    const groupedChapters = chapters.reduce<Record<string, Chapter[]>>((acc, chapter) => {
        const group = chapter.trans_group || "Khác";

        if (!acc[group]) {
            acc[group] = [];
        }

        acc[group].push(chapter);

        return acc;
    }, {});

    Object.values(groupedChapters).forEach((list) => {
        list.sort((a, b) => a.chapter - b.chapter);
    });

    const groupNames = Object.keys(groupedChapters);

    const [selectedGroup, setSelectedGroup] = useState(groupNames[0] || "");

    const selectedChapters = groupedChapters[selectedGroup] || [];

    return (
        <div className="w-full max-w-2xl rounded-lg border border-gray-200 bg-white">

            {/* Header */}
            <div className="border-b border-gray-200 px-3 py-2">
                <div className="flex items-center justify-between gap-4">

                    <div>
                        <h2 className="text-base font-semibold text-gray-800">
                            Chapters
                        </h2>

                        <p className="text-xs text-gray-500">
                            {selectedChapters.length} chapters
                        </p>
                    </div>

                    {/* Dropdown */}
                    <select
                        value={selectedGroup}
                        onChange={(e) => setSelectedGroup(e.target.value)}
                        className="rounded-md border border-gray-300 bg-white px-3 py-1.5 text-sm text-gray-700 outline-none focus:border-gray-500"
                    >
                        {groupNames.map((groupName) => (
                            <option key={groupName} value={groupName}>
                                {groupName}
                            </option>
                        ))}
                    </select>

                </div>
            </div>

            {/* Chapter list */}
            <div className="max-h-96 overflow-y-auto divide-y divide-gray-100">
                <div className="p-3">
                    <div className="space-y-1">
                        {selectedChapters.map((chapter) => (
                            <div
                                key={chapter.id}
                                className="flex items-center gap-2 rounded px-3 py-1.5 text-sm hover:bg-gray-50"
                            >
                                <Link
                                    href={`/read?id=${chapter.id}`}
                                    className="shrink-0 font-medium text-gray-700"
                                >
                                    Chapter {chapter.chapter}
                                </Link>

                                {chapter.title && (
                                    <span className="truncate text-gray-500">
                                        - {chapter.title}
                                    </span>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}