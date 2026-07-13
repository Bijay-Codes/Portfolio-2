import type { data_to_show } from "../../portfolio-data/data-types";

export function Hero({ data }: { data: data_to_show }) {
    const { aboutMe } = data;
    return (
        <header
            className="flex flex-col sm:grid grid-cols-[1fr_auto] items-center
             bg-surface border-surface-fg
             p-4 rounded-lg max-w-400">
            <div>
                <h1>Hey there!</h1>
                <h2>I'm <span
                    className="text-purple-500"> &lt;<span
                        className="text-black"
                    >Bijay</span> /&gt;</span>
                </h2>
                <h3>{aboutMe.tagline}</h3>
            </div>
            <div className="flex items-center gap-4">
                <a
                    className="bg-accent text-accent-fg py-1 px-3 rounded"
                    href="#contacts">Contact Me!</a>
                <a
                    className="bg-primary text-primary-fg py-1 px-3 rounded-lg"
                    href="#myworks">My Works</a>
            </div>
        </header >
    )
}