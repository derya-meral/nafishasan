import Image from "next/image";

export default function Home() {
    return (
        <div className="max-w-200 text-black grow w-full pl-5 pr-5">
            <div
                id="bio"
                className="self-center flex flex-col items-center gap-5 text-center sm:text-left"
            >
                <div className="flex flex-col gap-5 sm:block mt-5 text-lg">
                    <Image
                        alt=""
                        src="/NH-photo-300x300.jpg"
                        width={300}
                        height={300}
                        className="rounded-full self-center sm:float-right sm:ml-10 sm:mb-10 mr-5 ml-5"
                    />
                    <p id="bio_para">
                        I am a labor organizer based in Philadelphia, PA,
                        focusing on the healthcare sector, and a member of the
                        Washington-Baltimore News Guild Local 32035. I am also
                        an Associate Faculty at the{" "}
                        <a
                            className="text-[#AA1616] underline"
                            href="https://thebrooklyninstitute.com/"
                            target="_blank"
                        >
                            Brooklyn Institute for Social Research
                        </a>{" "}
                        (BISR), and author of{" "}
                        <a
                            className="text-[#AA1616] underline"
                            href="metastasis.html#book"
                            target="_blank"
                        >
                            <i>
                                Metastasis: The Rise of the Cancer Industrial
                                Complex and the Horizons of Care
                            </i>
                        </a>{" "}
                        (Common Notions Press, February 2025).
                        <br />
                        <br />
                        Previously, I was a Postdoctoral Scholar in David
                        Kaplan&#8217;s lab at the Department of Biomedical
                        Engineering, Tufts University (2019-2021), where my
                        research focused on developing 3D models to study brain
                        tumors. I received my Ph.D. in Cell, Molecular and
                        Developmental Biology from the Tufts Graduate School of
                        Biomedical Sciences in 2019. My graduate work, under Ana
                        Soto and Carlos Sonnenschein, enlightened the role of
                        vitamin D in breast development and cancer using 3D
                        culture models. I received a B.S. in Biology from
                        Lafayette College in 2011. In between, I worked as a lab
                        technician in a translational breast cancer lab at
                        Thomas Jefferson University (2011-2013). I received the
                        Norman and Susan Krinsky Excellence in Teaching Award
                        from Tufts University in 2018; I also received the David
                        A. Portlock Cross-Cultural Relations Award in 2010 from
                        Lafayette College.
                    </p>
                </div>
                <div>
                    <a
                        className="m-5 flex flex-row justify-center sm:flex-none sm:float-left rounded-xl"
                        href="metastasis.html"
                        id="book_cover_link"
                    >
                        <Image
                            alt=""
                            id="bkcvr"
                            src="/book_cover_FC.jpg"
                            className="rounded-xl sm:w-64"
                            width={1000}
                            height={2000}
                        />
                    </a>
                    <p className="text-lg">
                        My current research interests focus on the intersection
                        of biomedical sciences, science policy, history of
                        science and scientific research under capitalism; I am a
                        fervent advocate of the dialectical approach to
                        understanding biological phenomena and the natural world
                        at large. These themes appear in my BISR courses and my
                        writings in <i>Jacobin</i>,{" "}
                        <i>Science for the People</i> among other outlets, and
                        my forthcoming book.
                        <br />
                        <br />I was born in Bangladesh and moved to the United
                        States in 2007 to pursue higher education, but my roots
                        continue to compel me to delve into my culture and
                        history. My writings on Bangladesh&apos;s politics have
                        appeared in <i>Le Monde Diplomatique</i>,{" "}
                        <i>Red Pepper</i>, <i>Jamhoor</i> and more.
                        <br />
                        <br />I belong to the editorial collectives at{" "}
                        <a
                            className="text-[#AA1616] underline"
                            href="https://magazine.scienceforthepeople.org"
                            target="_blank"
                        >
                            <i>Science for the People</i>
                        </a>
                        , a radical science magazine, and{" "}
                        <a
                            className="text-[#AA1616] underline"
                            href="https://www.jamhoor.org/"
                            target="_blank"
                        >
                            <i>Jamhoor</i>
                        </a>
                        , a left media platform focusing on South Asia and its
                        diasporas. I am a proud member of the{" "}
                        <a
                            className="text-[#AA1616] underline"
                            href="https://www.dsausa.org/"
                            target="_blank"
                        >
                            Democratic Socialists of America
                        </a>
                        , the largest socialist organization in the US, where I
                        have worked on energy democracy campaigns, electoral
                        campaigns and political education.
                        <br />
                        <br />
                        During the height of the COVID-19 pandemic, I helped
                        establish the Jamaica Plain/Roxbury Mutual Fund in
                        Boston, MA, and fundraised and delivered groceries. I
                        was also part of the #FreeTheVaccine movement that
                        seeked to remove intellectual property barriers on the
                        COVID-19 vaccine to make them accessible worldwide.
                        <br />
                        <br />
                    </p>
                </div>
            </div>
        </div>
    );
}
