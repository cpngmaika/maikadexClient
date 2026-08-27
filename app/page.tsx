import MangaList from "@/app/components/manga/MangaList";
import Pagination from "@/app/components/ui/Pagination";
import { getAtHomeMangas } from "@/lib/mangadex/manga/atHome";
import type { MangaWithCover } from "@/types/manga";

export default async function HomePage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const { page } = await searchParams;
  const currentPage = Number(page) || 1;
  const limit = 20;

  const { data: rawMangas, total } = await getAtHomeMangas(currentPage, limit);
  const totalPages = Math.ceil(total / limit);
  
  const mangas: MangaWithCover[] = rawMangas.map(m => ({
      ...m,
      coverUrl: `https://uploads.mangadex.org/covers/${m.id}/${m.coverFileName}.256.jpg`
  }));

  return (
    <main>
      <h1 className="text-2xl font-bold px-6 pt-6 pb-0">Mới cập nhật</h1>
      <MangaList mangas={mangas} />
      <Pagination currentPage={currentPage} totalPages={totalPages} />
    </main>
  );
}
