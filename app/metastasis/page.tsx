import Image from "next/image";

export default function Metastasis() {
    return (
        <div className="max-w-200 text-black">
            {" "}
            <div id="book" className="flex flex-col gap-5 items-center m-5">
                <h2
                    className="text-2xl mb-10 font-bold text-black font-mono"
                    id="book_title"
                >
                    Metastasis: The Rise of The Cancer-Industrial Complex and
                    The Horizons of Care
                </h2>
                <Image
                    alt=""
                    src="/book_cover_FC.jpg"
                    className="w-5/6 rounded-md"
                    width={4000}
                    height={4000}
                />
                <p>
                    A bold rethinking of cancer as a biological phenomenon, an
                    indictment of science that serves capitalism, and a radical
                    vision of liberated health and well-being.
                </p>
                <p>
                    More than fifty years after the declaration of the War on
                    Cancer, we are nowhere closer to victory. The problem lies
                    in the way cancer is understood and the
                    &#8220;cancer-industrial complex&#8221; that has been
                    established to address it. The cancer-industrial complex
                    arises from the symbiosis of private corporations, nonprofit
                    organizations such as universities and foundations, and
                    public governmental regulatory bodies in the post-genomic
                    era. This network profits off a vulnerable population who
                    exist in a market that is structurally rigged against them
                    given their physical and socioeconomic conditions. Under the
                    auspices of scientific research and technological progress,
                    much of which is well-meaning, a critical extortion takes
                    place.
                    <br />
                    <br />
                    Metastasis brings the cancer-industrial complex to the fore
                    of our understanding of what cancer is, the chronic nature
                    of the disease, its unmistakable parallels to capitalism,
                    its inextricable link to the neoliberal model of economic
                    development, and its disproportionate burden on nonwhite and
                    poor populations&mdash;and what it will really take to rid
                    ourselves of the gravest dangers to our individual and
                    collective well-being.
                    <br />
                    <br />
                    Trained as a cancer scientist, Nafis Hasan offers a critical
                    and clinical reading of current narratives of cancer
                    research and the conditions that put the onus on the
                    individual rather than our collective efforts to prevent
                    cancer incidence and deaths. He offers a visionary
                    alternative theory about carcinogenesis&mdash;one countering
                    the dominant neoliberal idea of mutations causing
                    cancer&mdash;and centers a dialectical approach to
                    understanding the biology and sociology of cancer. Hasan
                    states, &#8220;If we must fight the longest war, then it
                    should be the war against capitalism, whose growth has
                    metastasized in every aspect of our society and
                    ourselves.&#8221;
                </p>

                <div
                    id="book_buttons"
                    className="flex flex-col gap-5 items-center"
                >
                    <a
                        href="https://www.commonnotions.org/metastasis?srsltid=AfmBOoqCOAF2uMf6q527135fxVh_wxv5hhII7rggInEDbHV1AZprhOXO"
                        target="_blank"
                    >
                        <button className="border p-2 rounded-md bg-amber-300 text-black hover:cursor-pointer shadow-md shadow-black">
                            Pre-order from Common Notions
                        </button>
                    </a>
                    <a
                        href="https://bookshop.org/p/books/cancer-and-capitalism-rise-of-the-cancer-industrial-complex-and-the-horizons-of-care-nafis-hasan/21051191?ean=9781945335181"
                        target="_blank"
                    >
                        <button className="border p-2 rounded-md bg-amber-300 text-black hover:cursor-pointer shadow-md shadow-black">
                            Pre-order from Making Worlds Bookstore
                        </button>
                    </a>
                    <a
                        href="https://www.amazon.com/Metastasis-Rise-Cancer-Industrial-Complex-Horizons/dp/1945335181"
                        target="_blank"
                    >
                        <button className="border p-2 rounded-md bg-amber-300 text-black hover:cursor-pointer shadow-md shadow-black">
                            Pre-order from Amazon
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
}
