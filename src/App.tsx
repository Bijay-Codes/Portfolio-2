import { Hero } from "./components/hero-section/hero-sect";
import { TechStack } from "./components/tech-stack/techstack-sect";
import { Projects } from "./components/project-sect/projects";
import { dataToShow } from "./portfolio-data/about-me";
import { Footer } from "./components/footer-sect/footer-sect";
function App() {
    return (
        <section className="flex flex-col gap-10">
            <Hero />
            <TechStack data={dataToShow} />
            <hr />
            <Projects data={dataToShow} />
            <hr />
            <Footer data={dataToShow} />
        </section>
    )
}

export default App
