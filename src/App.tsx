import { Hero } from "./components/hero-sect";
import { Projects } from "./components/projects";
import { dataToShow } from "./portfolio-data/about-me";
import { Footer } from "./components/footer-sect";
import { ProofOfWork } from "./components/work-proof";
import { motion } from "framer-motion";
function App() {
    return (
        <>
            <Initialize duration={0.3} />
            <section className="gap-7 p-3 sm:p-6 flex flex-col items-center sm:items-start
         bg-page text-page-fg max-w-450 m-auto
         transition-colors duration-200 ease-in-out">

                <Hero data={dataToShow} />
                <ProofOfWork />
                <hr />
                <Projects data={dataToShow} />
                <hr />
                <Footer data={dataToShow} />
            </section>
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

export default App
