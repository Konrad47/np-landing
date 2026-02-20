import { Header, Footer } from "@/components/layout";
import { Hero } from "@/components/sections";

const Home = () => {
    return (
        <div className="flex min-h-screen flex-col bg-zinc-50 font-sans dark:bg-black">
            <Header />
            <main className="flex w-full max-w-3xl flex-1 flex-col items-center mx-auto sm:items-start">
                <Hero />
            </main>
            <Footer />
        </div>
    );
};

export default Home;
