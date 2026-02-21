import Image from "next/image";

export default function Footer() {
    return (
            <div className="h-42 w-full mt-10 bg-linear-to-b from-white via-taupe-600 via-50% to-taupe-800 flex flex-col justify-center">
                <div
                    id="contact"
                    className="flex flex-row justify-center items-center gap-5"
                >
                    <a
                        href="https://www.instagram.com/ocdishwasher/"
                        target="_blank"
                    >
                        <Image
                            src="/Instagram_Glyph_White.png"
                            alt="Instagram Profile"
                            height={30}
                            width={30}
                        />
                    </a>
                    <a href="mailto:nafis.hsn@gmail.com">
                        <Image
                            src="/mail_100dp_FFFFFF_FILL0_wght400_GRAD0_opsz48.png"
                            alt="Gmail"
                            height={35}
                            width={35}
                        />
                    </a>
                </div>
                <div className="flex flex-row justify-center font-mono text-taupe-400 m-5">
                    Website by Derya Meral.
                </div>
        </div>
    );
}
