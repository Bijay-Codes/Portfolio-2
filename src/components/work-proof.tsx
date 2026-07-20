import { dataToShow } from "../portfolio-data/about-me"
import { TechStack } from "./techstack-sect"
import { motion } from "framer-motion"
export function ProofOfWork() {
    return (
        <section
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-h-100 mb-10">
            <ProjectsLog />
            <motion.div
                initial={{ x: -40 }}
                whileInView={{ x: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.4, ease: 'easeIn', delay: 0.4 }}
                className="bg-surface p-6 rounded-2xl">
                <TechStack data={dataToShow} />
            </motion.div>
        </section>
    )
}

function ProjectsLog() {
    return (
        <motion.div
            initial={{ x: -40 }}
            whileInView={{ x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.4, ease: 'easeIn' }}
            className="h-full p-4 flex flex-col gap-2 text-surface-muted-fg bg-surface rounded-2xl">
            <span className="text-lg sm:text-xl whitespace-nowrap">$recent-works --list</span>
            <div className="text-base sm:text-lg">projects/</div>
            <ol className="text-sm sm:text-base flex flex-col gap-3">
                <li>/ --favdex -&gt; <a href="https://favdex.vercel.app"
                    className="underline underline-offset-2 hover:text-accent/60">
                    deployed on vercel
                </a>
                </li>
                <li>/ --faunaui <a href="https://faunaui.vercel.app"
                    className="underline underline-offset-2 hover:text-accent/60">
                    deployed on vercel
                </a>
                </li>
                <li>/ --track-talk <a href="https://track-talker.vercel.app"
                    className="underline underline-offset-2 hover:text-accent/60">
                    deployed on vercel
                </a>
                </li>
            </ol>
            <span className="mt-auto text-sm sm:text-base animate-pulse text-success">$<span className="text-2xl">▮</span></span>
        </motion.div>
    )
}