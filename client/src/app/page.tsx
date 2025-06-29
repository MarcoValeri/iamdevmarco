import ThemeToggle from "@/components/ThemeToggle/ThemeToggle";

const Home = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-white dark:bg-black text-black dark:text-white transition-all duration-300">
            <div className="max-w-3xl text-center space-y-10">
                <h1 className="text-6xl font-semibold">I Am Dev Marco</h1>
                <div>
                    <button>Button 1</button>
                    <button>Button 2</button>
                </div>
                <ThemeToggle />
            </div>
        </div>
    )
}

export default Home;