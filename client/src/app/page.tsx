import Header from "@/components/Header/Header";
import Nav from "@/components/Nav/Nav";
import Footer from "@/components/Footer/Footer";

const Home = () => {
    return (
        <div className="bg-white dark:bg-black text-black dark:text-white transition-all duration-300">
            <Nav />
            <Header
                title="I Am Dev Marco"
                subTitle="Code, eta, sleep, repeat"
            />
            <Footer />
        </div>
    )
}

export default Home;