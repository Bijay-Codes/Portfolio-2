import type { data_to_show } from "../../portfolio-data/data-types";

export function Hero({ data }: { data: data_to_show }) {
    const { aboutMe } = data;
    return (
        <header
            className="flex flex-col sm:grid grid-cols-[1fr_auto] items-center
            bg-surface border-surface-fg
            p-4 rounded-lg w-full max-w-400">
            <div className="flex flex-col">
                <h1 className="text-xl">Hey there!</h1>
                <h2 className="text-2xl">I'm <span
                    className="text-accent text-3xl"> &lt;<span
                        className="gradient-text font-extrabold uppercase tracking-widest"
                    >Bijay</span>/&gt;</span>
                </h2>
                <h3 className="text-lg py-2">{aboutMe.tagline}</h3>
            </div>
            <div className="flex items-center gap-4">
                <a
                    className="bg-accent font-extrabold text-accent-fg sm:py-3 sm:px-6 py-1 px-2 rounded"
                    href="#contacts">Contact Me!</a>
                <a
                    className="bg-primary text-primary-fg sm:py-3 sm:px-6 py-1 px-2 rounded-lg"
                    href="#myworks">My Works</a>
            </div>
        </header >
    )
}