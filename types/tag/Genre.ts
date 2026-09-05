import { Tag } from "./tag";

export interface Genre extends Tag { }

export const genres: Genre[] = [
    {
        name: "Action",
        description:
            "Focuses heavily on combat and fight scenes."
    },
    {
        name: "Adventure",
        description:
            "Characters embark on a journey, whether for exploration or to achieve a specific goal."
    },
    {
        name: "Boys' Love",
        description:
            "Stories centered on romantic or sexual relationships between male characters. This genre encompasses various levels of explicitness."
    },
    {
        name: "Comedy",
        description:
            "Intended to entertain or provoke laughter."
    },
    {
        name: "Crime",
        description:
            "Focuses on criminal activities from either the perspective of law enforcement or criminals."
    },
    {
        name: "Drama",
        description:
            "Character-driven stories with emotionally intense situations and relationships."
    },
    {
        name: "Fantasy",
        description:
            "Stories set in fantastical worlds, often involving magic, mythical creatures, or medieval settings."
    },
    {
        name: "Girls' Love",
        description:
            "Stories centered on romantic or sexual relationships between female characters. Like Boys' Love, content may vary in explicitness."
    },
    {
        name: "Historical",
        description:
            "Set in the past, whether based on real-world history or a fictionalized historical period."
    },
    {
        name: "Horror",
        description:
            "Intended to evoke fear or suspense."
    },
    {
        name: "Isekai",
        description:
            "The protagonist is transported to another world, time, or virtual realm."
    },
    {
        name: "Magical Girls",
        description:
            "Focuses on girls (or occasionally boys) who use magical powers and often transform to battle evil forces."
    },
    {
        name: "Mecha",
        description:
            "Features large, often humanoid robots engaged in combat."
    },
    {
        name: "Medical",
        description:
            "Stories centered around the medical profession or healthcare."
    },
    {
        name: "Mystery",
        description:
            "Characters are faced with a problem or secret they must solve or uncover."
    },
    {
        name: "Philosophical",
        description:
            "Explores existential or moral questions through its characters or plot."
    },
    {
        name: "Psychological",
        description:
            "Focuses on the internal, emotional, and mental struggles of the characters."
    },
    {
        name: "Romance",
        description:
            "Centers on the development of romantic relationships."
    },
    {
        name: "Sci-Fi",
        description:
            "Stories centered on science and technology, often set in the future or in alternate realities."
    },
    {
        name: "Slice of Life",
        description:
            "Depicts everyday life with minimal drama or conflict."
    },
    {
        name: "Sports",
        description:
            "Focuses on athletic activities or competitions."
    },
    {
        name: "Superhero",
        description:
            "Features characters with superhuman abilities who are identified as heroes."
    },
    {
        name: "Thriller",
        description:
            "Dark, suspenseful stories that build tension and anxiety."
    },
    {
        name: "Tragedy",
        description:
            "Focuses on suffering and loss, often leading to emotional catharsis."
    },
    {
        name: "Wuxia",
        description:
            "Chinese fiction centered on martial artists in a fantastical setting."
    }
];

