const talks = [
    {
        link: "https://www.youtube.com/watch?v=sQdhpo9WFOg",
        title: "The People's Uprising in Bangladesh (English)",
        publication: "Center For Political Education",
        date: "August 2024",
    },
    {
        link: "https://thebrooklyninstitute.com/podcasts/podcast-for-social-research-episode-56-virology-a-reading-conversation-and-celebration-with-joseph-osmundson/",
        title: "Episode 56: Virology - A Reading, Conversation and Celebration with Joseph Osmundson",
        publication: "Podcast for Social Research (BISR)",
        date: "October 2022",
    },
    {
        link: "https://www.terrain.news/p/nafis-hasan-on-constraints-building",
        title:  "On Constraints, Building Power and the Cancer-Industrial Complex",
        publication:  "Terrain",
        date:  "June 2022",
    },
    {
        link:  "https://www.youtube.com/watch?v=tf3Hsla5bwU",
        title:  "Indigenous Resistance in a World On Fire",
        publication:  "Democratic Socialists of America",
        date:  "December 2020",
    },
    {
        link:  "https://www.youtube.com/watch?v=0As2sYwYrkQ",
        title:  "Science for the People",
        publication:  "The Dig",
        date:  "May 2020",
    },
    {
        link:  "https://sites.tufts.edu/insight/2017/02/09/humans-of-sackler-nafis-hasan-i-refused-determinism/",
        title:  "\"I Refused Determinism\"",
        publication:  "Tufts Insight",
        date:  "February 2017",
    },
]


export default function Speaking() {

    const bulletpoint = ({talk}) => {
        return (
            <li key={talk.publication + "-" + talk.date}>
                <a href={talk.link} target="_blank">
                    <u>
                        {talk.title}
                        </u>
                </a>
                . <i>{talk.publication}</i>, {talk.date}.
            </li>
        )
    }

    return (
        <div className="max-w-200 text-black grow ml-5 mr-5">
            <h2 className="text-2xl mb-10 font-bold text-black font-mono">Speaking</h2>
            <ul className="list-disc marker:text-black flex flex-col gap-2">
                {talks.map((talk) => (bulletpoint({talk})))}
            </ul>
        </div>
    );
}
