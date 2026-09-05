import { Tag } from "./tag";

export interface Demographic extends Tag { }

export const demographics: Demographic[] = [
    {
        name: "Shounen",
        description:
            "Published in a magazine with a target of adolescent boys and young men, typically aged 12-18."
    },
    {
        name: "Shoujo",
        description:
            "Published in a magazine with a target of adolescent girls and young women, typically aged 12-18."
    },
    {
        name: "Seinen",
        description:
            "Published in a magazine with a target of adult men, typically aged 18 and above."
    },
    {
        name: "Josei",
        description:
            "Published in a magazine with a target of adult women, typically aged 18 and above."
    },
    {
        name: "None",
        description:
            "Published with no clear demographic target, with potential to appeal to a broad audience regardless of age or gender."
    }
];
