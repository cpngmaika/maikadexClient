import { genres } from "@/types/tag/Genre";
import { themes } from "@/types/tag/Theme";
import { formats } from "@/types/tag/Format";
import { contentWarnings } from "@/types/tag/ContentWarnings";

const tagSections = [
    { title: "Genres (Thể loại)", items: genres },
    { title: "Themes (Chủ đề)", items: themes },
    { title: "Formats (Định dạng)", items: formats },
    { title: "Content Warnings (Cảnh báo)", items: contentWarnings },
];

export default function TagDropdown() {
    return (
        <div className="absolute top-full left-0 pt-4 w-[750px] z-50">
            <div className="rounded-2xl bg-white p-6 shadow-2xl ring-1 ring-black/5 max-h-[75vh] overflow-y-auto space-y-6">
                {tagSections.map((section) => (
                    <div key={section.title}>
                        <h3 className="mb-3 text-xs font-extrabold uppercase tracking-widest text-[#18C3C3] flex items-center gap-1.5">
                            <span>✦</span> {section.title}
                        </h3>
                        <div className="grid grid-cols-4 gap-x-3 gap-y-2">
                            {section.items.map((tag) => (
                                <div
                                    key={tag.id ?? tag.name}
                                    className="text-xs font-semibold text-[#54587A] hover:text-[#18C3C3] px-2 py-1 rounded-md transition-colors truncate cursor-default"
                                    title={tag.name}
                                >
                                    {tag.name}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}


