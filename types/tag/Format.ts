import { Tag } from "./tag";

export interface Format extends Tag { }

export const formats: Format[] = [
    {
        name: "4-Koma",
        description:
            "Comics that consist of four vertically arranged panels."
    },
    {
        name: "Adaptation",
        description:
            "A work that was originally created in another medium, such as a novel, animation or video game. Adaptations of anthologies should not use this tag."
    },
    {
        name: "Anthology",
        description:
            "A collection of short stories from various authors."
    },
    {
        name: "Award Winning",
        description:
            "A series that has won a recognized industry award."
    },
    {
        name: "Doujinshi",
        description:
            "Independently published works, often based on existing intellectual property (e.g., fan works)."
    },
    {
        name: "Fan Colored",
        description:
            "An unofficial, fan-colored version of an originally monochrome series."
    },
    {
        name: "Full Color",
        description:
            "A series that was originally published in full color."
    },
    {
        name: "Long Strip",
        description:
            "Pages arranged vertically, designed to be read continuously without distinct page breaks."
    },
    {
        name: "Official Colored",
        description:
            "An official-colored version of an originally monochrome series, released by the publisher."
    },
    {
        name: "Oneshot",
        description:
            "A single-chapter work."
    },
    {
        name: "Self-Published",
        description:
            "A work uploaded by the original creator."
    },
    {
        name: "Web Comic",
        description:
            "A series published online on platforms such as Pixiv or Twitter."
    }
];