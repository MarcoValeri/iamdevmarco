"use client";

import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { MdDarkMode } from "react-icons/md";
import { CiSun } from "react-icons/ci";

const ThemeToggle = () => {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 text-2xl rounded-md transition-colors cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700"
            aria-label="Toggle theme"
        >
            {theme === "dark" ? <CiSun /> : <MdDarkMode /> }
        </button>
    )
}

export default ThemeToggle;