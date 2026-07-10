import type { data_to_show } from "../../portfolio-data/data-types";
// interface dataToShowType {
//     data: data_to_show
// }
// could use the interface but i am practicing stuff so i used the inline declaration of the type

export function TechStack({ data }: { data: data_to_show }) {
    const { techStack } = data;
    return (
        <section>
            <h3>My Tech-stack</h3>
            <div className="flex gap-4">
                {
                    techStack.map(tech => {
                        return (
                            <div>
                                <img
                                    loading="lazy"
                                    src={tech.logo} alt={tech.label}
                                    className="w-10 aspect-square rounded"
                                />
                                <span className="capitalize">{tech.label}</span>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}