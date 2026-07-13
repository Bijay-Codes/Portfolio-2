import type { data_to_show, project_data } from "../../portfolio-data/data-types";

export function Projects({ data }: { data: data_to_show }) {
    const { projects } = data;
    return (
        <main id="myworks" className="flex flex-col gap-4">
            <h3 className="text-2xl">My Works</h3>
            <div className="flex flex-wrap gap-6">
                {
                    projects.map(work => {
                        return (
                            <section key={work.name} className="bg-surface-muted p-4 rounded
                            flex flex-col justify-center gap-4">
                                <h4 className="text-xl">{work.name}</h4>
                                <h5 className="text-md max-w-130">{work.intro}</h5>
                                <span>{work.completedIn} days</span>
                                <TechUsed work={work} />
                                <div className="flex gap-6 items-center">
                                    <a className="py-1 px-4 bg-accent text-accent-fg rounded"
                                        href={work.links.liveLink}
                                        target="_blank">Live demo</a>
                                    <a className="py-1 px-4 bg-primary text-primary-fg rounded-lg"
                                        href={work.links.sourceLink}
                                        target="_blank">Source Code</a>
                                </div>
                            </section>
                        )
                    })
                }
            </div>
        </main>
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