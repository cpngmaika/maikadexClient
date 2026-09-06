'use client';

import { useState } from "react";
import Link from "next/link";
import MangaSearch from "@/app/components/manga/MangaSearch";
import { useAuth } from "@/app/components/auth/AuthProvider";
import { useRouter, usePathname } from "next/navigation";
import { motion } from "motion/react";

const DottedCircleIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-current">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeDasharray="4 4" />
    </svg>
);

export default function Navbar() {
    const { user, logout } = useAuth();
    const router = useRouter();
    const pathname = usePathname();
    const [hoveredPath, setHoveredPath] = useState<string | null>(null);

    const handleLogout = async () => {
        await logout();
        router.push('/');
    };

    const menuItems = [
        {
            href: '/',
            label: 'Trang chủ',
            icon: <DottedCircleIcon />,
        },
        {
            href: '/tag',
            label: 'Thể loại',
            icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-current">
                    <path d="M12 2L14.8 9.2L22 12L14.8 14.8L12 22L9.2 14.8L2 12L9.2 9.2L12 2Z" fill="currentColor" />
                </svg>
            ),
        },
        {
            href: '/advantage_search',
            label: 'Tìm kiếm nâng cao',
            icon: <DottedCircleIcon />,
        },
    ];

    // Xác định route active hiện tại
    const currentActiveItem = menuItems.find((item) =>
        item.href === '/' ? pathname === '/' : pathname.startsWith(item.href)
    );
    const activeHref = currentActiveItem?.href || '/';

    return (
        <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-100 shadow-sm">
            <div className="mx-auto flex h-20 max-w-[1920px] items-center justify-between px-6 lg:px-10">
                {/* Logo */}
                <div className="flex items-center">
                    <Link href="/" className="flex items-center gap-1 group">
                        <div className="relative">
                            <span className="text-4xl font-bold italic tracking-tighter text-[#2D314E]">
                                Maika
                                <span className="relative">
                                    Dex
                                    <span className="absolute -top-3 -right-2 text-[#2D314E] text-xl group-hover:text-[#18C3C3] transition-colors">✦</span>
                                </span>
                            </span>
                        </div>
                    </Link>
                </div>

                {/* Menu: onMouseLeave sẽ reset vị trí về route active hiện tại */}
                <nav className="hidden xl:flex items-center gap-3" onMouseLeave={() => setHoveredPath(null)}>
                    {menuItems.map((item) => {
                        const isHoveredOrActive = (hoveredPath || activeHref) === item.href;

                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                scroll={false}
                                onMouseEnter={() => setHoveredPath(item.href)}
                                className="relative flex items-center gap-2 px-5 py-2.5 transition-colors"
                            >
                                {/* Nền trượt chuyển động linh hoạt giữa hover và active */}
                                {isHoveredOrActive && (
                                    <motion.div
                                        layoutId="navbar-hover-bubble"
                                        layout="position"
                                        className="absolute inset-0 rounded-lg bg-[#18C3C3] shadow-sm"
                                        transition={{
                                            x: { type: "spring", stiffness: 450, damping: 32 },
                                            y: { duration: 0 },
                                            default: { duration: 0 }
                                        }}
                                    />
                                )}

                                <span className={`relative z-10 transition-colors duration-200 ${isHoveredOrActive ? "text-white" : "text-[#2D314E]"}`}>
                                    {item.icon}
                                </span>

                                <span className={`relative z-10 text-sm font-bold uppercase tracking-widest transition-colors duration-200 ${isHoveredOrActive ? "text-white" : "text-[#2D314E]"}`}>
                                    {item.label}
                                </span>
                            </Link>
                        );
                    })}
                </nav>

                {/* Search + Auth */}
                <div className="flex items-center gap-6">
                    <div className="w-64 border border-gray-800 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-[#18C3C3] focus-within:border-transparent transition-all">
                        <MangaSearch />
                    </div>

                    {user ? (
                        <div className="flex items-center gap-4">
                            <Link href="/profile" className="text-sm font-bold uppercase tracking-widest text-[#2D314E] hover:text-[#18C3C3]">
                                Profile
                            </Link>
                            <button onClick={handleLogout} className="text-sm font-bold uppercase tracking-widest text-red-600 hover:text-red-700">
                                Đăng xuất
                            </button>
                        </div>
                    ) : (
                        <div className="flex items-center gap-6">
                            <Link href="/auth/login" className="text-sm font-bold uppercase tracking-widest text-[#2D314E] hover:text-[#18C3C3] transition-colors">
                                Đăng nhập
                            </Link>
                            <Link href="/auth/register" className="rounded-full bg-[#18C3C3] px-8 py-3 text-sm font-bold uppercase tracking-widest text-white shadow-md hover:bg-[#15A8A8] transition-all hover:shadow-lg transform hover:-translate-y-0.5">
                                Đăng ký
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
}