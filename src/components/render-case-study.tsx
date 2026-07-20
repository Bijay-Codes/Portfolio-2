import { Link } from "react-router";
import { favdexCaseStudy } from "../portfolio-data/casestudy";
import { TerminalCircles } from "./projects";
import { motion } from "framer-motion";
export function CaseStudyPage() {
    return (
        <section className="text-page-fg max-w-300 m-auto flex flex-col items-center justify-center gap-5 sm:gap-10 p-4 sm:p-8 tracking-tight">
            <HomeLink />
            <Intro />
            <WhyIBuiltIt />
            <hr className="w-screen opacity-20" />
            <TechnicalDecisions />
            <Reflection />
            <Links />
        </section >
    );
}

function HomeLink() {
    return (
        <Link
            to='/'
            className="fixed bottom-4 right-0 p-2 sm:p-4 bg-accent text-accent-fg rounded-l-full font-extrabold tracking-widest font-heading">Home</Link>
    )
}

function Intro() {
    const { summary, title } = favdexCaseStudy;
    return (
        <>
            <h1 className="text-3xl font-heading font-extrabold sm:text-center text-page-fg">{title}</h1>
            <p className="text-lg font-light text-surface-fg">{summary}</p>
        </>
    )
}

function WhyIBuiltIt() {
    const study = favdexCaseStudy;
    return (
        <section>
            <TerminalCircles />
            <div className="bg-surface p-4 rounded flex flex-col gap-2 text-surface-fg">
                <h2
                    className="text-2xl text-page-fg font-bold font-heading">
                    {study.whyIBuiltIt.heading}
                </h2>
                {study.whyIBuiltIt.body.map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                ))}
                <KeyFeatures />
            </div>
        </section>
    )
}

function KeyFeatures() {
    const { keyFeatures } = favdexCaseStudy;
    const baseDelay = 0.2;
    const gap = 0.2;
    return (
        <div
            className="bg-surface-muted p-4 rounded-lg w-fit mt-5 border border-primary/30">
            <h2 className="text-xl font-bold font-heading">--key-features</h2>
            <ul className="p-2">
                {keyFeatures.map((feature, i) => (
                    <motion.li key={i}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.1 }}
                        transition={{ duration: 0.4, delay: baseDelay + (i * gap), ease: 'easeIn' }}
                        className="m-2 text-base marker:content-['$_'] marker:text-surface-muted-fg">
                        {feature}
                    </motion.li>
                ))}
            </ul>
        </div>
    )
}

function TechnicalDecisions() {
    const { technicalDecisions } = favdexCaseStudy
    return (
        <div className="bg-surface p-4 rounded flex flex-col gap-5">
            <h2 className="text-2xl font-heading font-extrabold">--technical-decisions</h2>
            {technicalDecisions.map((section, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ duration: 0.3, delay: 0.2 * i, ease: 'easeIn' }}>
                    <h3 className="text-lg font-medium">{section.heading}</h3>
                    <p className="text-sm text-surface-fg">{section.body}</p>
                </motion.div>
            ))}
        </div>
    )
}

function Reflection() {
    const { reflection } = favdexCaseStudy;
    return (
        <div
            className="bg-surface-muted rounded p-4 text-surface-fg border-l-4 border-accent/70">
            <h2 className="text-lg font-heading font-bold text-page-fg">{reflection.heading}</h2>
            {reflection.body}
        </div>
    )
}
function Links() {
    const { links } = favdexCaseStudy;
    return (
        <div className="flex gap-6 text-surface-fg font-heading">
            <a className="text-xl font-bold bg-surface-muted px-4 py-1 rounded-lg
                hover:text-primary-fg hover:bg-primary/80"
                href={links.sourceLink}
                target="_blank"
                rel="noreferrer">
                Source code
            </a>
            <a className="text-xl font-bold bg-surface-muted px-4 py-1 rounded-lg
                hover:text-primary-fg hover:bg-primary/80"
                href={links.liveLink}
                target="_blank"
                rel="noreferrer">
                Live preview
            </a>
        </div>
    )
}