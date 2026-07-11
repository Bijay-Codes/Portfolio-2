import type { data_to_show } from "../../portfolio-data/data-types";

export function Hero({ data }: { data: data_to_show }) {
    const { aboutMe } = data;
    return (
        <header>
            <h1>Hey there!</h1>
            <h2>I'm <span
                className="text-purple-500"
            > &lt;<span
                className="text-black"
            >Bijay</span> /&gt;</span>
            </h2>
            <h3>{aboutMe.tagline}</h3>

            <div>
                <a href="#contacts">Contact Me!</a>
                <a href="#myworks">My Works</a>
            </div>
        </header >
    )
}