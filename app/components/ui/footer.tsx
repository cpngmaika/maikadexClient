import Link from "next/link";

export default function Footer() {
    return (
        <footer className="relative mt-20 overflow-hidden bg-[#454972] border-t-2 border-white/20 text-white select-none">
            <div
                className="absolute inset-0 opacity-15 pointer-events-none"
                style={{
                    backgroundImage: `
                        linear-gradient(to right, rgba(255, 255, 255, 0.2) 1px, transparent 1px),
                        linear-gradient(to bottom, rgba(255, 255, 255, 0.2) 1px, transparent 1px)
                    `,
                    backgroundSize: '40px 40px'
                }}
            />

            <div className="absolute -bottom-24 -left-20 w-80 h-80 rounded-full border border-white/10 opacity-30 pointer-events-none flex items-center justify-center">
                <div className="w-64 h-64 rounded-full border border-dashed border-white/20 flex items-center justify-center">
                    <span className="text-white/20 text-7xl font-thin">✦</span>
                </div>
            </div>

            <div className="relative z-10 mx-auto max-w-7xl px-6 py-12 flex flex-col items-center gap-8 text-center">

                <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-10 text-xs sm:text-sm font-extrabold uppercase tracking-widest text-white/90">
                    <Link href="/" className="hover:text-[#00b4c5] transition-colors">
                        Trang chủ
                    </Link>
                    <Link href="/advantage_search" className="hover:text-[#00b4c5] transition-colors">
                        Tìm kiếm nâng cao
                    </Link>
                    <a
                        href="https://api.mangadex.org/docs/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[#00b4c5] transition-colors"
                    >
                        MangaDex API
                    </a>
                </div>

                <div className="flex items-center justify-center py-2">
                    <span className="text-3xl sm:text-4xl font-black italic tracking-tighter text-white drop-shadow">
                        Maika
                        <span className="relative">
                            Dex
                            <span className="absolute -top-3 -right-3 text-[#00b4c5] text-xl font-normal">✦</span>
                        </span>
                    </span>
                </div>

                <div className="flex flex-col gap-2 text-xs text-white/70 max-w-2xl font-medium tracking-wide">
                    <p className="font-semibold text-white/90">
                        Data provided by{" "}
                        <a
                            href="https://mangadex.org"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#00b4c5] hover:underline"
                        >
                            MangaDex
                        </a>
                    </p>
                    <p>
                        This website is a personal project created for educational purposes only.
                        It is not affiliated with or endorsed by MangaDex.
                    </p>
                    <p className="text-white/50 text-[11px]">
                        Please support and credit the scanlation groups responsible for the translations.
                    </p>
                </div>

                <div className="text-[11px] font-bold tracking-widest text-white/60 uppercase">
                    【 MangaApp / Powered by MangaDex API 】
                </div>
            </div>
        </footer>
    );
}