import type { data_to_show } from "../portfolio-data/data-types";
import { motion } from "framer-motion";
export function Hero({ data }: { data: data_to_show }) {
    const { aboutMe } = data;
    const duration = 0.4;
    return (
        <>
            <Initialize duration={duration} />
            <motion.header
                initial={{ opacity: 0, scale: 0.8, y: 40 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: duration * 1.5, duration: 0.3, ease: 'easeIn' }}
                className="flex flex-col sm:grid grid-cols-[1fr_auto] items-end
            bg-surface border-surface-fg relative gap-6
            py-10 px-6 rounded-lg w-full max-w-350">
                <div className="flex flex-col">
                    <Name />
                    <Tagline aboutMe={aboutMe} />
                </div>
                <div>
                    <CircleBadges />
                    <Links />
                </div>
            </motion.header>
        </>
    )
}

function Initialize({ duration }: { duration: number }) {
    return (
        <motion.div
            initial={{ inset: '0 10% 0 0' }}
            animate={{ inset: '0 100% 0 0' }}
            transition={{ duration: duration * 1.5, ease: 'linear' }}
            className="flex flex-col self-start text-xs text-surface-muted-fg">
            <motion.div
                initial={{ clipPath: "inset(0 100% 0 0)" }}
                animate={{ clipPath: "inset(0 0% 0 0)" }}
                transition={{
                    duration: duration,
                    ease: "linear"
                }}
            >
                <span className="text-success">bijay@codes:</span> ~$ sudo init --portfolio
            </motion.div>
            <motion.div
                initial={{ clipPath: 'inset(0 100% 0 0)' }}
                animate={{ clipPath: 'inset(0 0% 0 0)' }}
                transition={{
                    duration: duration,
                    ease: 'linear',
                    delay: duration * 0.4
                }}
            >
                <span>bash: ...</span>
            </motion.div>
            <motion.div
                initial={{ clipPath: 'inset(0 100% 0 0)' }}
                animate={{ clipPath: 'inset(0 0% 0 0)' }}
                transition={{
                    duration: duration,
                    ease: 'linear',
                    delay: duration * 0.6
                }}
            >
                <span>bash: ...nope, do it yourself</span>
            </motion.div>
            <motion.div
                initial={{ clipPath: 'inset(0 100% 0 0)' }}
                animate={{ clipPath: 'inset(0 0% 0 0)' }}
                transition={{
                    duration: duration,
                    ease: 'linear',
                    delay: duration * 0.8
                }}
            >
                <span>
                    <span className="text-success">bijay@codes:</span>
                    ~$ npm run build
                </span>
            </motion.div>
            <motion.div
                initial={{ clipPath: 'inset(0 100% 0 0)' }}
                animate={{ clipPath: 'inset(0 0% 0 0)' }}
                transition={{
                    duration: duration,
                    ease: 'linear',
                    delay: duration * 1.4
                }}
            >
                <span>
                    <span className="text-success">bijay@codes:</span>
                    ~$ npm run preview
                </span>
            </motion.div>
            <motion.span
                animate={{ opacity: [0, 1] }}
                transition={{
                    duration: 0.1,
                    repeat: Infinity,
                    repeatType: "reverse",
                    delay: duration * 1.5,
                    repeatDelay: 0.4,
                }}
                className="h-3 w-1 bg-success"
            />
        </motion.div >
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
            <h2 className="text-2xl">This is <span
                className="text-3xl bg-primary/80 border border-secondary border-r-3 text-primary-fg">&lt;<span
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
    const linksStyle = 'font-extrabold py-1 px-2 sm:py-2 sm:px-4 rounded';
    return (
        <div className="flex items-center gap-4">
            <a
                className={`bg-accent font-extrabold text-accent-fg ${linksStyle}`}
                href="#contacts">--connect</a>
            <a
                className={`bg-primary text-primary-fg ${linksStyle}`}
                href="#myworks">--projects</a>
        </div>
    )
}

function CircleBadges() {
    const circle_class = 'w-3 h-3 sm:w-4 sm:h-4 rounded-full';
    return (
        <div className="flex gap-2 lg:gap-3 absolute top-0 right-0 p-1 lg:p-2">
            <div className={`bg-success/60 hover:bg-success ${circle_class}`}></div>
            <div className={`bg-warning/60 hover:bg-warning ${circle_class}`}></div>
            <div className={`bg-danger/60 hover:bg-danger ${circle_class}`}></div>
        </div>
    )
}