import { Link } from "react-router";
import { favdexCaseStudy } from "../portfolio-data/casestudy";
import { TerminalCircles } from "./projects";
export function CaseStudyPage() {
    const study = favdexCaseStudy;
    return (
        <section className="text-page-fg max-w-300 m-auto flex flex-col items-center justify-center gap-5 sm:gap-10 p-4 sm:p-8 tracking-tight">
            <Link to='/' className="fixed bottom-4 right-0 p-4 bg-accent text-accent-fg rounded-l-full font-extrabold tracking-widest">Home</Link>
            <h1 className="text-3xl font-extrabold sm:text-center text-page-fg">{study.title}</h1>
            <p className="text-lg font-light text-surface-fg">{study.summary}</p>
            {study.whyIBuiltIt.body.length > 0 && (
                <div className="bg-surface p-4 rounded flex flex-col gap-2 text-surface-fg">
                    <TerminalCircles />
                    <h2 className="text-2xl text-page-fg font-bold">{study.whyIBuiltIt.heading}</h2>
                    {study.whyIBuiltIt.body.map((paragraph, i) => (
                        <p key={i}>{paragraph}</p>
                    ))}
                    {study.keyFeatures.length > 0 && (
                        <div className="bg-surface-muted p-4 rounded-lg w-fit mt-5 border border-primary/30">
                            <div className="m-auto">
                                <TerminalCircles />
                            </div>
                            <h2 className="text-xl font-bold">--key-features</h2>
                            <ul className="p-2">
                                {study.keyFeatures.map((feature, i) => (
                                    <li key={i} className="m-2 text-base marker:content-['$_'] marker:text-surface-muted-fg">{feature}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            )}

            <hr className="w-screen opacity-20" />
            {study.technicalDecisions.length > 0 && (
                <div className="bg-surface p-4 rounded flex flex-col gap-5 border-r-4 border-t-4 border-l border-accent/60">
                    <h2 className="text-2xl font-extrabold">--technical-decisions</h2>
                    {study.technicalDecisions.map((section, i) => (
                        <div key={i}>
                            <h3 className="text-lg font-medium">{section.heading}</h3>
                            <p className="text-sm text-surface-fg">{section.body}</p>
                        </div>
                    ))}
                </div>
            )}

            {study.reflection && study.reflection.body.length > 0 && (
                <div
                    className="bg-surface-muted rounded p-4 text-surface-fg border-l-4 border-b-4 border-r border-accent/70">
                    <h2 className="text-lg font-bold text-page-fg">{study.reflection.heading}</h2>
                    {study.reflection.body}
                </div>
            )}

            <div className="flex gap-6 text-surface-fg">
                {study.links.sourceLink && (
                    <a className="text-xl font-bold bg-surface-muted px-4 py-1 rounded-lg"
                        href={study.links.sourceLink}
                        target="_blank"
                        rel="noreferrer">
                        Source
                    </a>
                )}
                {study.links.liveLink && (
                    <a className="text-xl font-bold bg-surface-muted px-4 py-1 rounded-lg"
                        href={study.links.liveLink}
                        target="_blank"
                        rel="noreferrer">
                        Live
                    </a>
                )}
            </div>
        </section>
    );
}