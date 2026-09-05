import { Tag } from "./tag";

export interface ContentRating extends Tag { }

export const contentRatings: ContentRating[] = [
    {
        name: "Safe",
        description:
            "No obscene or vulgar depictions of the human body, including nudity, sexual content, provocative clothing, or suggestive scenes. Examples of inappropriate content for this rating include scenes that focus on physical allure or romantic implications through clothing or behavior."
    },
    {
        name: "Suggestive",
        description:
            "Contains minor to moderate sensual elements such as flirtation, teasing, or implied intimacy. Minor nudity may be present (e.g., a bare back or shoulder) but is not the focus. No explicit sexual activity or sexualized nudity is depicted."
    },
    {
        name: "Erotica",
        description:
            "Features a significant amount of sensuality and sexual content that contributes to the story. Explicit nudity and sex scenes are included, but the plot and character development remain the primary focus. The intent is not purely for sexual arousal."
    },
    {
        name: "Pornographic",
        description:
            "Sexual content is the primary focus, and the main intent is to sexually arouse the audience. Any depiction of genitals in a sexual context (even if censored with whiteout, black bars, or mosaics) automatically falls under this category."
    }
];