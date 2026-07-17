import type { data_to_show } from "../portfolio-data/data-types";

export function Hero({ data }: { data: data_to_show }) {
    const { aboutMe } = data;
    return (
        <>
            <Initialize />
            <header
                className="flex flex-col sm:grid grid-cols-[1fr_auto] items-center
            bg-surface border-surface-fg relative gap-6
            p-4 rounded-lg w-full max-w-400">
                <div className="flex flex-col">
                    <Name />
                    <Tagline aboutMe={aboutMe} />
                </div>
                <div>
                    <CircleBadges />
                    <Links />
                </div>
            </header>
        </>
    )
}

function Initialize() {
    return (
        <div className="flex flex-col self-start text-xs text-surface-muted-fg">
            <span>
                <span className="text-success">bijay@codes:</span>
                ~$ sudo init --portfolio</span>
            <span>bash: ...</span>
            <span>bash: ...nope</span>
            <span>
                <span className="text-success">bijay@codes:</span>
                ~$ npm run build
            </span>
            <span>
                <span className="text-success">bijay@codes:</span>
                ~$ npm run preview
            </span>
            <span className="h-3 w-1 bg-success animate-pulse duration-75"></span>
        </div>
    )
}

function Name() {
    return (
        <div>
            <h1 className="text-md text-surface-muted-fg pb-2">
                <span className="text-success">
                    bijay@codes:
                </span>
                ~$ whoami
            </h1>
            <h2 className="text-2xl">This is
                <span
                    className="text-3xl"> &lt;<span
                        className="gradient-text font-extrabold uppercase tracking-widest"
                    >Bijay</span>/&gt;</span>
            </h2>
        </div>
    )
}
interface tagline {
    aboutMe: {
        tagline: string;
    }
}
function Tagline({ aboutMe }: tagline) {
    return (
        <>
            <h3 className="text-lg py-2 text-surface-fg">{aboutMe.tagline}</h3>
            <h4 className="text-surface-muted-fg text-sm">
                $echo --status: <span className="uppercase text-surface-fg">
                    open to work
                </span>
            </h4>
        </>
    )
}

function Links() {
    return (
        <div className="flex items-center gap-4">
            <a
                className="bg-accent font-extrabold text-accent-fg sm:py-3 sm:px-6 py-1 px-2 rounded"
                href="#contacts">--connect</a>
            <a
                className="bg-primary text-primary-fg sm:py-3 sm:px-6 py-1 px-2 rounded-lg"
                href="#myworks">--projects</a>
        </div>

    )
}

function CircleBadges() {
    const circle_class = 'w-3 h-3 sm:w-4 sm:h-4 rounded-full';
    return (
        <div className="flex gap-2 lg:gap-3 opacity-40 absolute top-0 right-0 p-1 lg:p-2">
            <div className={`bg-success ${circle_class}`}></div>
            <div className={`bg-warning ${circle_class}`}></div>
            <div className={`bg-danger ${circle_class}`}></div>
        </div>
    )
}