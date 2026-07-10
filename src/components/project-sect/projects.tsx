import type { data_to_show, project_data } from "../../portfolio-data/data-types";

export function Projects({ data }: { data: data_to_show }) {
    const { projects } = data;
    return (
        <main id="myworks">
            <h3>My Work</h3>
            {
                projects.map(work => {
                    return (
                        <section>
                            <h4>{work.name}</h4>
                            <h5>{work.title}</h5>
                            <span>{work.completedIn} days</span>
                            <TechUsed work={work} />
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
                <div title={tech.title}>
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