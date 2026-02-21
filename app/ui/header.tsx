"use client";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Header() {
    const [openMenu, setOpenMenu] = useState<boolean>(false);
    const menuRef = useRef<HTMLDivElement>(null!);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (!openMenu || !menuRef.current) return;

            if (
                event.target instanceof Node &&
                !menuRef.current.contains(event.target)
            ) {
                setOpenMenu(false);
            }
        };

        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, [openMenu]);

    return (
        <div className="w-full h-42 bg-linear-to-b from-taupe-800 via-white via-95% to-white flex flex-row justify-center">
            <div className="w-full max-w-200 flex flex-row justify-between items-center ml-5 mr-5 text-xl sm:text-2xl mb-8">
                <span className="text-white font-mono self-center">
                    <Link href={"/"}>Nafis Hasan, Ph.D.</Link>
                </span>
                <div className="group relative self-center">
                    <input
                        type="checkbox"
                        id="menu-toggle"
                        className="peer hidden"
                    />

                    {openMenu ? (
                        <div ref={menuRef}>
                            <XMarkIcon
                                className="size-12 rounded-md self-center pl-1 pr-1 text-white"
                                onClick={() => setOpenMenu(false)}
                            />
                            <div className="absolute right-0 w-56 mt-1">
                                <div className="flex flex-col gap-3  border border-gray-500 rounded-xl p-5 bg-white text-right text-2xl font-mono text-black">
                                    <Link
                                        href="/"
                                        onClick={() => setOpenMenu(false)}
                                    >
                                        About
                                    </Link>
                                    <Link
                                        href="/metastasis"
                                        onClick={() => setOpenMenu(false)}
                                    >
                                        Metastasis
                                    </Link>
                                    <Link
                                        href="/writing"
                                        onClick={() => setOpenMenu(false)}
                                    >
                                        Writing
                                    </Link>
                                    <Link
                                        href="/speaking"
                                        onClick={() => setOpenMenu(false)}
                                    >
                                        Speaking
                                    </Link>
                                    <Link
                                        href="/teaching"
                                        onClick={() => setOpenMenu(false)}
                                    >
                                        Teaching
                                    </Link>
                                    <Link
                                        href="/#contact"
                                        onClick={() => setOpenMenu(false)}
                                    >
                                        Contact
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div ref={menuRef}>
                            <Bars3Icon
                                className="size-12 rounded-md self-center pl-1 pr-1 text-white"
                                onClick={() => setOpenMenu(true)}
                            />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
