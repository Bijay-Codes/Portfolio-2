import type { data_to_show, project_data } from "../../portfolio-data/data-types";

export function Projects({ data }: { data: data_to_show }) {
    const { projects } = data;
    return (
        <main id="myworks">
            <h3>My Works</h3>
            {
                projects.map(work => {
                    return (
                        <section key={work.name}>
                            <h4>{work.name}</h4>
                            <h5>{work.intro}</h5>
                            <span>{work.completedIn} days</span>
                            <TechUsed work={work} />
                            <div>
                                <a href={work.links.liveLink} target="_blank">Live demo</a>
                                <a href={work.links.sourceLink} target="_blank">Source Code</a>
                            </div>
                        </section>
                    )
                })
            }
        </main>
    )
}
function TechUsed({ work }: { work: project_data }) {
    return (
        <div className="flex gap-4">{work.techUsed.map(tech => {
            return (
                <div key={tech.label} title={tech.title}>
                    <img
                        loading="lazy"
                        src={tech.logo} alt={tech.label}
                        className="w-10 aspect-square rounded" />
                    <span className="capitalize">{tech.label}</span>
                </div>
            )
        })}
        </div>
    )
}