import type { data_to_show } from "../../portfolio-data/data-types";

export function Bio({ data }: { data: data_to_show }) {
    const { aboutMe } = data;
    return (
        <section>
            <h3>My Focus</h3>
            <div>
                {aboutMe.myFocus.map(focus => {
                    return (
                        <div key={focus.label}>
                            <h4>{focus.label}</h4>
                            <p>{focus.info}</p>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}