import type { data_to_show, project_data } from "../portfolio-data/data-types";
import { motion } from "framer-motion";
import { Link } from "react-router";
export function Projects({ data }: { data: data_to_show }) {
    const { projects } = data;
    return (
        <main id="myworks" className="flex flex-col gap-4">
            <h3 className="text-xl font-heading text-surface-fg">
                --projects
            </h3>
            <div className="flex flex-wrap gap-6 sm:grid sm:grid-cols-2 max-w-350">
                {
                    projects.map((proj, i) => {
                        return (
                            <Builds key={proj.name} work={proj} index={i} />
                        )
                    })
                }
            </div>
        </main >
    )
}
function Builds({ work, index }: { work: project_data; index: number }) {
    const baseDelay = 0.2;
    const gap = 0.2;
    return (
        // Parent
        <motion.section key={work.name}
            className="bg-surface-muted/40 hover:outline hover:outline-primary/20 hover:bg-surface-muted/60 first:col-span-2 rounded-2xl rounded-t-sm
            grid"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.2, delay: baseDelay + (index * gap), ease: 'easeIn' }}
        >
            {/* Child- renders project name and terminal badges */}
            <TerminalCircles />
            <div className="p-4 flex flex-col gap-4 justify-center">
                <div className="flex flex-1">
                    <h4 className="text-xl text-surface-fg font-heading font-extrabold">
                        $sudo --pitch {work.name}
                    </h4>
                    {/* three circles in each projects come from this */}
                </div>
                {/* details of projects- to edit go to portfolio-data/about-me file */}
                <p className="text-md max-w-250">bash: {work.intro}</p>

                {/* time taken to build project */}
                <span className="text-surface-muted-fg">
                    --time-taken: <span className="text-surface-fg">
                        {work.completedIn} days</span>
                </span>
                {/* tech stack */}
                <KeyFeatures features={work.keyPoints} />
                <TechUsed work={work} />
                {/* Live demo and github link comes from this */}
                <div className="flex flex-wrap gap-4">
                    <Links work={work} />
                    {work.name === 'Favdex' &&
                        <Link to='/casestudy'
                            className="text-lg py-1 px-4 rounded-lg w-fit font-bold border
                        bg-surface border-accent/60
                        hover:border-accent hover:drop-shadow-xl hover:drop-shadow-accent
                        hover:bg-accent/30 hover:text-accent-fg active:bg-accent">
                            --Case-Study
                        </Link>
                    }
                </div>
            </div>
        </motion.section>

    )
}

function TechUsed({ work }: { work: project_data }) {
    return (
        <div className="flex gap-4">{work.techUsed.map(tech => {
            return (
                <div className="flex flex-col items-center justify-center hover:scale-110"
                    key={tech.label}
                    title={tech.title}>
                    <img
                        loading="lazy"
                        src={tech.logo} alt={tech.label}
                        className="w-8 transition-all duration-150 ease-in-out aspect-square rounded" />
                    <span className="text-xs">{tech.label}</span>
                </div>
            )
        })}
        </div>
    )
}

export function TerminalCircles() {
    const three_dots = 'w-4 h-4 rounded-full';
    return (
        <div className="ml-auto flex gap-2 opacity-70 justify-end h-8 items-center px-4 bg-primary/30 w-full">
            <span className={`${three_dots} bg-success`}></span>
            <span className={`${three_dots} bg-warning`}></span>
            <span className={`${three_dots} bg-danger`}></span>
        </div>
    )
}

function Links({ work }: { work: project_data }) {
    return (
        <div className="flex gap-2 sm:gap-6 items-center flex-wrap">
            <a
                className="py-1 px-4 bg-accent text-accent-fg rounded
                 hover:bg-accent/60 hover:drop-shadow-xl hover:drop-shadow-accent
                 hover:outline-2 hover:outline-accent"
                href={work.links.liveLink}
                target="_blank">Live demo</a>
            <a className="py-1 px-4 bg-primary  text-primary-fg rounded-lg
             hover:bg-primary/60 hover:text-page-fg hover:outline hover:outline-primary
             hover:drop-shadow-xl hover:drop-shadow-primary"
                href={work.links.sourceLink}
                target="_blank"> Source Code</a>
        </div>
    )
}

function KeyFeatures({ features }: { features: string[] }) {
    return (
        <section>
            <h2>--key-points:</h2>
            <ul className="text-surface-muted-fg hover:text-surface-fg ">
                {features.map((feat: string, i: number) => {
                    return <li className="m-2 text-sm marker:content-['$_']"
                        key={i}>
                        {feat}
                    </li>
                })}
            </ul>
        </section>
    )
}