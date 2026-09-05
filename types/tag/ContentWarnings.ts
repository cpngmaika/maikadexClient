import { Tag } from "./tag";

export interface ContentWarning extends Tag { }

export const contentWarnings: ContentWarning[] = [
    {
        name: "Gore",
        description: "Detailed depictions of violence or physical trauma, including excessive"
    },
    {
        name: "Sexual Violence",
        description: "Depicts themes or scenes involving rape, sexual assault, or any other non-consensual sexual acts. Incidents that involve coercion or forced intimacy should be tagged here."
    }
];