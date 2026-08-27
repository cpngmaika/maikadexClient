"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function MangaSearch() {
    const [title, setTitle] = useState("");
    const router = useRouter();

    function handleSearch(e: React.FormEvent) {
        e.preventDefault();

        if (!title.trim()) return;

        router.push(`/searchList?title=${encodeURIComponent(title)}`);
    }

    return (
        <form onSubmit={handleSearch}>
            <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />

            <button type="submit">
                Search
            </button>
        </form>
    );
}