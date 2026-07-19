import type { data_to_show } from "../portfolio-data/data-types";
import { motion } from "framer-motion";
export function Hero({ data }: { data: data_to_show }) {
    const { aboutMe } = data;
    const duration = 0.4;
    return (
        <>
            <motion.header
                initial={{ opacity: 0, scale: 0.90, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: duration * 1.5, duration: 0.4, ease: 'easeIn' }}
                className="flex flex-col sm:grid grid-cols-[1fr_auto] sm:items-end
            bg-surface border-surface-fg relative gap-6
            py-10 px-6 rounded-lg w-full max-w-350">
                <div>
                    <CircleBadges />
                    <Name />
                    <Tagline aboutMe={aboutMe} />
                </div>
                <Links />
            </motion.header>
        </>
    )
}

function Name() {
    const delay = 0.4;
    return (
        <div>
            <motion.h1
                initial={{ inset: '0 0 0 0' }}
                animate={{ inset: '0 100% 0 0' }}
                transition={{ duration: 2, delay: delay }}
                className="text-md text-surface-muted-fg pb-2">
                <span className="text-success">
                    bijay@codes:
                </span>
                ~$ whoami
            </motion.h1>
            <h2 className="text-2xl">This is <span
                className="text-3xl bg-primary/80 border border-secondary border-r-6 text-primary-fg">&lt;<span
                    className="font-extrabold tracking-widest"
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
    const linksStyle = 'font-extrabold py-2 px-2 sm:py-3 sm:px-6 rounded m-2';
    return (
        <div>
            <a
                className={`bg-accent font-extrabold text-accent-fg
                    hover:bg-accent/60 hover:drop-shadow-xl hover:drop-shadow-accent hover:outline-2 hover:outline-accent ${linksStyle}`}
                href="#contacts">--contact</a>
            <a
                className={`bg-primary text-primary-fg rounded-lg 
                    hover:bg-primary/60 hover:outline hover:outline-primary hover:drop-shadow-xl hover:drop-shadow-secondary ${linksStyle}`}
                href="#myworks">--projects</a>
        </div>
    )
}

function CircleBadges() {
    const circle_class = 'w-3 h-3 sm:w-4 sm:h-4 rounded-full';
    return (
        <div className="flex gap-2 lg:gap-3 justify-end
         absolute top-0 right-0 p-1 sm:p-2
          bg-surface-muted/80 border-b border-primary/20 w-full">
            <div className={`bg-success/60 hover:bg-success ${circle_class}`}></div>
            <div className={`bg-warning/60 hover:bg-warning ${circle_class}`}></div>
            <div className={`bg-danger/60 hover:bg-danger ${circle_class}`}></div>
        </div>
    )
}