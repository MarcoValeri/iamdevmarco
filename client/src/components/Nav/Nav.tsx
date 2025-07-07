import Link from "next/link";
import ThemeToggle from "../ThemeToggle/ThemeToggle"

const Nav = () => {
    return (
        <nav className="flex p-4">
            <div className="flex-2 border-2 border-red-600">
                <ul className="list-none">
                    <li className="inline-block pr-2"><Link href="/">Home</Link></li>
                    <li className="inline-block pr-2"><Link href="/">Home</Link></li>
                    <li className="inline-block pr-2"><Link href="/">Home</Link></li>
                </ul>
            </div>
            <div className="flex-1 border-2 border-red-600">
                <ThemeToggle />
            </div>
        </nav>
    )
}

export default Nav;