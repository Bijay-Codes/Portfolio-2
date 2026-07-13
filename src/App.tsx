import { Hero } from "./components/hero-section/hero-sect";
import { TechStack } from "./components/tech-stack/techstack-sect";
import { Projects } from "./components/project-sect/projects";
import { dataToShow } from "./portfolio-data/about-me";
import { Footer } from "./components/footer-sect/footer-sect";
import { Bio } from "./components/bio-sect/bio-sect";
function App() {
    return (
        <section className="gap-10 p-3 flex flex-col items-center sm:items-start
         bg-page text-page-fg max-w-450 m-auto">
            <Hero data={dataToShow} />
            <Bio data={dataToShow} />
            <TechStack data={dataToShow} />
            <hr />
            <Projects data={dataToShow} />
            <hr />
            <Footer data={dataToShow} />
        </section>
    )
}

export default App
