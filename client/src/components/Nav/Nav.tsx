"use client";

import { useState } from "react";
import Link from "next/link";
import ThemeToggle from "../ThemeToggle/ThemeToggle";

const Nav = () => {

    const [mobileMenu, setMobileMenu] = useState(false);

    const handleClickMobileMenu = () => {
        console.log(`clicked`);
        mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
    }

    return (
        <nav className="p-4 h-20">
            <div className="flex h-full">
                <div className="flex flex-2 items-center">
                    <ul className="hidden md:block list-none">
                        <li className="inline-block pr-2"><Link href="/">Home</Link></li>
                        <li className="inline-block pr-2"><Link href="/">Home</Link></li>
                        <li className="inline-block pr-2"><Link href="/">Home</Link></li>
                    </ul>
                    <div className="block md:hidden relative w-15 h-full cursor-pointer" onClick={handleClickMobileMenu}>
                        <span className={`absolute top-1 left-1 p-[3px] w-12 bg-black dark:bg-white rounded-xl transition-transform ${mobileMenu && `rotate-55 !top-4`}`}></span>
                        <span className={`absolute top-4 left-1 p-[3px] w-12 bg-amber-500 dark:bg-amber-500 rounded-xl transition-transform ${mobileMenu && `hidden`}`}></span>
                        <span className={`absolute top-7 left-1 p-[3px] w-12 bg-black dark:bg-white rounded-xl transition-transform ${mobileMenu && `rotate-125 !top-4 !bg-amber-500 !dark:bg-amber-500`}`}></span>
                    </div>
                </div>
                <div className="flex flex-1 justify-end">
                    <ThemeToggle />
                </div>
            </div>
            <div className={`md:hidden -ml-[1000px] mt-2 w-full transition-all relative bg-white dark:bg-black min-h-50 ${mobileMenu && '!ml-2'}`}>
                <ul className="list-none">
                    <li className="pr-2"><Link className="text-lg" href="/">Home</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav;