import { Tag } from "./tag";

export interface Status extends Tag { }

export const statuses: Status[] = [
    {
        name: "Ongoing",
        description:
            "Still being actively published."
    },
    {
        name: "Completed",
        description:
            "Officially finished and no further chapters will be released."
    },
    {
        name: "Hiatus",
        description:
            "Temporarily paused with official notice from the author or publisher. The work is expected to resume."
    },
    {
        name: "Cancelled",
        description:
            "Discontinued and will not resume, possibly without official notice from the author or publisher."
    }
];