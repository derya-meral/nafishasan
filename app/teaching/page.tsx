import { BulletType } from "../ui/bulletType";

const lessons: BulletType[] = [
    {
        link: "https://thebrooklyninstitute.com/items/courses/new-york/extinction-biology-biodiversity-and-the-biosphere/",
        title: "Extinction: Biology, Biodiversity, and the Biosphere", 
        date: "Spring 2026",
        coauthors: null,
        publication: null,
    },
    {
        link: "https://thebrooklyninstitute.com/items/courses/new-york/bioengineering-science-design-and-domination/",
        title: "Bioengineering: from Terraforming to Designer Babies",
        date: "Fall 2024",
        coauthors: null,
        publication: null,
    },
    {
        link: "https://thebrooklyninstitute.com/items/courses/new-york/life-in-a-dish-an-introduction-to-cellular-biology/",
        title: "Life in a Dish: an Introduction to Cellular Biology",
        date: "Spring 2023",
        coauthors: null,
        publication: null,
    },
    {
        link: "https://thebrooklyninstitute.com/items/courses/new-york/selling-sickness-biology-capital-and-endocrine-disrupting-chemicals/",
        title: "Endocrine Disrupting Chemicals: Biology, Capitalism and Public Health",
        date: "Fall 2022",
        coauthors: null,
        publication: null,
    },
    {
        link: "https://thebrooklyninstitute.com/items/courses/new-york/the-cancer-industrial-complex-biology-medicine-and-business/",
        title: "The Cancer-Industrial Complex: Biology, Medicine and Business",
        date: "Summer 2022",
        coauthors: null,
        publication: null,
    },
];

export default function Teaching() {
    const bulletpoint = (lesson: BulletType) => {
        return (
            <li key={lesson.title + "-" + lesson.date}>
                <a href={lesson.link} target="_blank">
                    <u>{lesson.title}</u>
                </a>
                . {lesson.date}.
            </li>
        );
    };

    return (
        <div className="max-w-200 text-black grow ml-5 mr-5">
            <h2 className="text-2xl mb-10 font-bold text-black font-mono">
                Teaching
            </h2>
            <ul className="list-disc marker:text-black flex flex-col gap-2">
                {lessons.map((lesson) => bulletpoint(lesson))}
            </ul>
        </div>
    );
}
