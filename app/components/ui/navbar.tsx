'use client'
import Link from "next/link";
import MangaSearch from "@/app/components/manga/MangaSearch";
import { useAuth } from "@/app/components/auth/AuthProvider";
import { useRouter } from "next/navigation";

export default function Navbar() {
    const { user, logout } = useAuth();
    const router = useRouter();

    const handleLogout = async () => {
        const res = await logout();
        router.push('/');
    }

    return (
        <nav className="flex items-center justify-between border-b px-6 py-4">
            {/* Bên trái */}
            {user ? (
                <div>
                    <Link
                        href="/profile"
                        className="text-xl font-bold hover:text-gray-600"
                    >
                        Profile
                    </Link>

                    <button
                        className="text-xl font-bold hover:text-gray-600"
                        onClick={handleLogout}
                    >
                        Logout
                    </button>
                </div>
            ) : (
                <div>
                    <Link
                        href="/auth/register"
                        className="text-xl font-bold hover:text-gray-600"
                    >
                        Register
                    </Link>
                    <Link
                        href="/auth/login"
                        className="text-xl font-bold hover:text-gray-600"
                    >
                        Login
                    </Link>
                </div>
            )}

            <div className="flex items-center gap-6">
                <Link
                    href="/"
                    className="text-xl font-bold hover:text-gray-600"
                >
                    Home
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