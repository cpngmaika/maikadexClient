import { contentRatings } from "@/types/tag/ContentRating";
import { contentWarnings } from "@/types/tag/ContentWarnings";
import { demographics } from "@/types/tag/Demographic";
import { formats } from "@/types/tag/Format";
import { statuses } from "@/types/tag/PublicationStatus";
import { genres } from "@/types/tag/Genre";
import { themes } from "@/types/tag/Theme";

export default function AdvantageSearch() {
    const tagSections = [
        { title: "Genres", items: genres },
        { title: "Themes", items: themes },
        { title: "Demographics", items: demographics },
        { title: "Formats", items: formats },
        { title: "Publication Statuses", items: statuses },
        { title: "Content Ratings", items: contentRatings },
        { title: "Content Warnings", items: contentWarnings },
    ];

    return (
        <div className="p-4 space-y-6">
            <h1 className="text-2xl font-bold">Advantage Search</h1>

            {tagSections.map((section) => (
                <section key={section.title} className="space-y-2">
                    <h2 className="text-lg font-semibold">{section.title}</h2>

                    <div className="flex flex-wrap gap-2">
                        {section.items.map((item: any) => (
                            <span
                                key={item.name}
                                className="px-3 py-1 text-sm border rounded-full bg-gray-50 hover:bg-gray-100 cursor-pointer"
                            >
                                {item.name}
                            </span>
                        ))}
                    </div>
                </section>
            ))}
        </div>
    );
}