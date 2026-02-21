import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function Header() {
    return (
        <div className="w-full h-36 bg-linear-to-b from-neutral-800 via-white via-75% to-white flex flex-row justify-center">
            <div className="w-full max-w-200 flex flex-row justify-between items-center ml-5 mr-5 text-xl sm:text-2xl mb-8">
                <span className="mt-1 text-white font-mono">
                    Nafis Hasan, Ph.D.
                </span>
                <div className="group relative">
                    <input
                        type="checkbox"
                        id="menu-toggle"
                        className="peer hidden"
                    />
                    <label
                        htmlFor="menu-toggle"
                        className="peer-checked:hidden block"
                    >
                        <Bars3Icon className="size-9 text-white rounded-md border border-slate-600 self-center pl-1 pr-1 bg-slate-950" />
                    </label>
                    <label
                        htmlFor="menu-toggle"
                        className="peer-checked:block hidden"
                    >
                        <XMarkIcon className="size-9 text-white rounded-md border border-slate-600 self-center pl-1 pr-1 bg-slate-950" />
                    </label>
                    <div className="hidden peer-checked:block absolute right-0 w-56 mt-1">
                        <div className="flex flex-col gap-3  border border-gray-500 rounded-xl p-5 bg-white text-right text-2xl font-mono text-black">
                            <Link href="/">About</Link>
                            <Link href="/metastasis">Metastasis</Link>
                            <Link href="/writing">Writing</Link>
                            <Link href="/speaking">Speaking</Link>
                            <Link href="/teaching">Teaching</Link>
                            <Link href="/#contact">Contact</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
