import { Hero } from "./components/hero-sect";
import { TechStack } from "./components/techstack-sect";
import { Projects } from "./components/projects";
import { dataToShow } from "./portfolio-data/about-me";
import { Footer } from "./components/footer-sect";
import { ProofOfWork } from "./components/work-proof";
function App() {
    return (
        <section className="gap-10 p-3 flex flex-col items-center sm:items-start
         bg-page text-page-fg max-w-450 m-auto">
            <Hero data={dataToShow} />
            <ProofOfWork />
            <TechStack data={dataToShow} />
            <hr />
            <Projects data={dataToShow} />
            <hr />
            <Footer data={dataToShow} />
        </section>
    )
}

export default App
