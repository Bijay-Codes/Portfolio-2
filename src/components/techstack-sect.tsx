import type { data_to_show } from "../portfolio-data/data-types";
// interface dataToShowType {
//     data: data_to_show
// }
// could use the interface but i am practicing stuff so i used the inline declaration of the type

export function TechStack({ data }: { data: data_to_show }) {
    const { techStack } = data;
    return (
        <section className="flex flex-col w-full gap-4">
            <span className="text-surface-muted-fg text-xl">$echo --tech-stack</span>
            <div className="flex flex-wrap gap-4">
                {
                    techStack.map(tech => {
                        return (
                            <div className="flex flex-col justify-center items-center"
                                key={tech.label}>
                                <img title={tech.title}
                                    loading="lazy"
                                    src={tech.logo} alt={tech.label}
                                    className="w-10 aspect-square rounded"
                                />
                                <span className="capitalize text-sm text-surface-muted-fg">{tech.label}</span>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}