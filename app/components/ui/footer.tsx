export default function Footer() {
    return (
        <footer className="mt-10 border-t border-gray-200 bg-gray-50 px-6 py-6 text-center text-sm text-gray-500">
            <p>
                Data provided by{" "}
                <a
                    href="https://mangadex.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-gray-700 hover:underline"
                >
                    MangaDex
                </a>
            </p>

            <p className="mt-2 text-xs text-gray-400">
                This website is a personal project created for educational
                purposes only. It is not affiliated with or endorsed by MangaDex.
            </p>

            <p className="mt-1 text-xs text-gray-400">
                Please support and credit the scanlation groups responsible
                for the translations.
            </p>
        </footer>
    );
}