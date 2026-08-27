import Link from "next/link";
import MangaSearch from "@/app/components/manga/MangaSearch";

export default function Navbar() {
    return (
        <nav className="flex items-center justify-between border-b px-6 py-4">
            {/* Bên trái */}
            <div className="flex items-center gap-6">
                <Link
                    href="/"
                    className="text-xl font-bold hover:text-gray-600"
                >
                    Home
                </Link>

                <Link
                    href="/profile"
                    className="text-xl font-bold hover:text-gray-600"
                >
                    Profile
                </Link>

                <Link
                    href="/advantage_search"
                    className="text-xl font-bold hover:text-gray-600"
                >
                    Advantage Search
                </Link>
            </div>

            {/* Bên phải */}
            <MangaSearch />
        </nav>
    );
}