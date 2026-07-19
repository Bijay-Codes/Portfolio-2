import { Link } from "react-router";
import { favdexCaseStudy } from "../portfolio-data/casestudy";
import { TerminalCircles } from "./projects";
export function CaseStudyPage() {
    const study = favdexCaseStudy;
    return (
        <section className="text-page-fg max-w-300 m-auto flex flex-col items-center justify-center gap-5 sm:gap-10 p-4 sm:p-8 tracking-tight">
            <Link to='/' className="fixed bottom-4 right-0 p-2 sm:p-4 bg-accent text-accent-fg rounded-l-full font-extrabold tracking-widest">Home</Link>
            <h1 className="text-3xl font-extrabold sm:text-center text-page-fg">{study.title}</h1>
            <p className="text-lg font-light text-surface-fg">{study.summary}</p>
            {study.whyIBuiltIt.body.length > 0 && (
                <section>
                    <TerminalCircles />
                    <div className="bg-surface p-4 rounded flex flex-col gap-2 text-surface-fg">

                        <h2 className="text-2xl text-page-fg font-bold">{study.whyIBuiltIt.heading}</h2>
                        {study.whyIBuiltIt.body.map((paragraph, i) => (
                            <p key={i}>{paragraph}</p>
                        ))}
                        <KeyFeatures />
                    </div>
                </section>
            )
            }

            <hr className="w-screen opacity-20" />
            <TechnicalDecisions />

            <Reflection />
            <Links />
        </section >
    );
}

function KeyFeatures() {
    const { keyFeatures } = favdexCaseStudy;
    return (
        <div className="bg-surface-muted p-4 rounded-lg w-fit mt-5 border border-primary/30">
            <h2 className="text-xl font-bold">--key-features</h2>
            <ul className="p-2">
                {keyFeatures.map((feature, i) => (
                    <li key={i} className="m-2 text-base marker:content-['$_'] marker:text-surface-muted-fg">{feature}</li>
                ))}
            </ul>
        </div>
    )
}

function TechnicalDecisions() {
    const { technicalDecisions } = favdexCaseStudy
    return (
        <div className="bg-surface p-4 rounded flex flex-col gap-5">
            <h2 className="text-2xl font-extrabold">--technical-decisions</h2>
            {technicalDecisions.map((section, i) => (
                <div key={i}>
                    <h3 className="text-lg font-medium">{section.heading}</h3>
                    <p className="text-sm text-surface-fg">{section.body}</p>
                </div>
            ))}
        </div>
    )
}

function Reflection() {
    const { reflection } = favdexCaseStudy;
    return (
        <div
            className="bg-surface-muted rounded p-4 text-surface-fg border-l-4 border-accent/70">
            <h2 className="text-lg font-bold text-page-fg">{reflection.heading}</h2>
            {reflection.body}
        </div>
    )
}
function Links() {
    const { links } = favdexCaseStudy;
    return (
        <div className="flex gap-6 text-surface-fg">
            {links.sourceLink && (
                <a className="text-xl font-bold bg-surface-muted px-4 py-1 rounded-lg
                hover:text-primary-fg hover:bg-primary/80"
                    href={links.sourceLink}
                    target="_blank"
                    rel="noreferrer">
                    Source code
                </a>
            )}
            {links.liveLink && (
                <a className="text-xl font-bold bg-surface-muted px-4 py-1 rounded-lg
                hover:text-primary-fg hover:bg-primary/80"
                    href={links.liveLink}
                    target="_blank"
                    rel="noreferrer">
                    Live
                </a>
            )}
        </div>
    )
}