import { Hero } from "./components/hero-section/hero-sect";
import { TechStack } from "./components/tech-stack/techstack-sect";
import { Projects } from "./components/project-sect/projects";
import { dataToShow } from "./portfolio-data/about-me";
import { Footer } from "./components/footer-sect/footer-sect";
import { Bio } from "./components/bio-sect/bio-sect";
function App() {
    return (
        <section className="gap-10 flex flex-col bg-page text-page-fg p-3">
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
