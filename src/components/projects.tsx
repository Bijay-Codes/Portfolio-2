import type { data_to_show, project_data } from "../portfolio-data/data-types";

export function Projects({ data }: { data: data_to_show }) {
    const { projects } = data;
    return (
        <main id="myworks" className="flex flex-col gap-4">
            <h3 className="text-2xl">What i've <span
                className="uppercase font-extrabold gradient-text text-3xl tracking-widest">
                Built
            </span>
            </h3>
            <div className="flex flex-wrap gap-6">
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
    const three_dots = 'w-4 h-4 bg-surface rounded-full';
    return (
        // Parent
        <section key={work.name} className="bg-surface-muted p-4 rounded
            flex flex-col justify-center gap-4">
            {/* Child- renders project name and terminal badges */}
            <div className="flex">
                <h4 className="text-xl">{work.name}</h4>
                {/* three circles in each projects come from this */}
                <TerminalCircles style={three_dots} />
            </div>
            {/* details of projects- to edit go to portfolio-data/about-me file */}
            <h5 className="text-md max-w-130">{work.intro}</h5>

            {/* time taken to build project */}
            <span>{work.completedIn} days</span>
            {/* tech stack */}
            <TechUsed work={work} />
            {/* Live demo and github link comes from this */}
            <Links work={work} />
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
                        className="w-8 aspect-square rounded" />
                    <span className="capitalize text-sm">{tech.label}</span>
                </div>
            )
        })}
        </div>
    )
}

function TerminalCircles({ style }: { style: string }) {
    return (
        <div className="ml-auto flex gap-2">
            <span className={style}></span>
            <span className={style}></span>
            <span className={style}></span>
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
                target="_blank">Source Code</a>
        </div>
    )
}

