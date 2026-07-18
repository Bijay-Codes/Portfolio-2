import type { data_to_show, project_data } from "../portfolio-data/data-types";
import { Link } from "react-router";
export function Projects({ data }: { data: data_to_show }) {
    const { projects } = data;
    return (
        <main id="myworks" className="flex flex-col gap-4">
            <h3 className="text-2xl">What i've <span
                className="uppercase font-extrabold gradient-text text-3xl tracking-widest">
                Built
            </span>
            </h3>
            <div className="flex flex-wrap gap-6 sm:grid sm:grid-cols-2 max-w-350">
                {
                    projects.map(proj => {
                        return (
                            <Builds key={proj.name} work={proj} />
                        )
                    })
                }
            </div>
        </main>
    )
}
function Builds({ work }: { work: project_data }) {
    return (
        // Parent
        <section key={work.name} className="bg-surface-muted first:col-span-2 rounded-2xl">
            {/* Child- renders project name and terminal badges */}
            <TerminalCircles />
            <div className="p-4
            flex flex-col gap-4 justify-center">
                <div className="flex flex-1">
                    <h4 className="text-xl text-surface-muted-fg">
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
                <Links work={work} />
                {work.name === 'Favdex' &&
                    <Link to='/casestudy' className="text-lg bg-surface py-1 px-4 rounded-lg border border-accent/60 hover:border-accent w-fit font-bold uppercase">Case study</Link>
                }
            </div>
        </section>

    )
}

function TechUsed({ work }: { work: project_data }) {
    return (
        <div className="flex gap-4">{work.techUsed.map(tech => {
            return (
                <div className="flex flex-col items-center justify-center"
                    key={tech.label}
                    title={tech.title}>
                    <img
                        loading="lazy"
                        src={tech.logo} alt={tech.label}
                        className="w-6 aspect-square rounded" />
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
        <div className="ml-auto flex gap-2 opacity-70 justify-end h-8 items-center px-4 bg-secondary w-full">
            <span className={`${three_dots} bg-success`}></span>
            <span className={`${three_dots} bg-warning`}></span>
            <span className={`${three_dots} bg-danger`}></span>
        </div>
    )
}

function Links({ work }: { work: project_data }) {
    return (
        <div className="flex gap-6 items-center">
            <a className="py-1 px-4 bg-accent text-accent-fg rounded"
                href={work.links.liveLink}
                target="_blank">Live demo</a>
            <a className="py-1 px-4 bg-primary text-primary-fg rounded-lg"
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
                    return <li className="m-2 text-xs marker:content-['$_']" key={i}>{feat}</li>
                })}
            </ul>
        </section>
    )
}