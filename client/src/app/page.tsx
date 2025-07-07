import Nav from "@/components/Nav/Nav";

const Home = () => {
    return (
        <div className="bg-white dark:bg-black text-black dark:text-white transition-all duration-300">
            <Nav />
            <div className="min-h-screen flex items-center justify-center">
                <div className="max-w-3xl text-center space-y-10">
                    <h1 className="text-6xl font-semibold">I Am Dev Marco</h1>
                </div>
            </div>
        </div>
    )
}

export default Home;