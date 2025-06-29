"use client";

import { useTheme } from "next-themes";

const ThemeToggle = () => {
    const { theme, setTheme } = useTheme();

    return (
        // <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>Theme</button>
        <div>
            <p>The current theme is: {theme}</p>
            <button onClick={() => setTheme('light')}>Light</button>
            <button onClick={() => setTheme('dark')}>Dark</button>
        </div>
    )
}

export default ThemeToggle;