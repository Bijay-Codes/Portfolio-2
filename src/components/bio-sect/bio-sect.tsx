import type { data_to_show } from "../../portfolio-data/data-types";

export function Bio({ data }: { data: data_to_show }) {
    const { aboutMe } = data;
    return (
        <section className="bg-surface-muted rounded p-4">
            <h3 className="text-2xl">My Focus</h3>
            <div className="flex flex-col gap-2">
                {aboutMe.myFocus.map(focus => {
                    return (
                        <div
                            key={focus.label}>
                            <h4 className="text-lg">{focus.label}</h4>
                            <p>{focus.info}</p>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}