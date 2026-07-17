import { Link } from "react-router";
import { favdexCaseStudy } from "../portfolio-data/casestudy";
export function CaseStudyPage() {
    const study = favdexCaseStudy;
    return (
        <section className="text-page-fg max-w-300 m-auto flex flex-col items-center justify-center gap-10 p-8">
            <Link to='/' className="fixed bottom-4 right-0 p-4 bg-accent text-accent-fg rounded-l-full">Home</Link>
            <h1 className="text-3xl text-center">{study.title}</h1>
            <p>{study.summary}</p>

            {study.whyIBuiltIt.body.length > 0 && (
                <div className="bg-surface p-4 rounded">
                    <h2 className="text-xl">{study.whyIBuiltIt.heading}</h2>
                    {study.whyIBuiltIt.body.map((paragraph, i) => (
                        <p key={i}>{paragraph}</p>
                    ))}
                </div>
            )}
            {study.keyFeatures.length > 0 && (
                <div className="bg-surface-muted p-4 rounded-lg">
                    <h2 className="text-xl">Key Features</h2>
                    <ul className="p-2">
                        {study.keyFeatures.map((feature, i) => (
                            <li key={i} className="m-2 text-base marker:content-['$_'] marker:text-surface-muted-fg">{feature}</li>
                        ))}
                    </ul>
                </div>
            )}
            <hr className="w-screen opacity-20" />
            {study.whatItDoes.length > 0 && (
                <div>
                    <h2 className="text-xl">What it does</h2>
                    <ul>
                        {study.whatItDoes.map((point, i) => (
                            <li key={i}>{point}</li>
                        ))}
                    </ul>
                </div>
            )}

            {study.technicalDecisions.length > 0 && (
                <div className="bg-surface p-4 rounded flex flex-col gap-5">
                    <h2 className="text-2xl font-extrabold">--technical-decisions</h2>
                    {study.technicalDecisions.map((section, i) => (
                        <div key={i}>
                            <h3 className="text-lg font-medium">{section.heading}</h3>
                            {section.body.map((paragraph, index) => (
                                <p key={index} className="text-sm text-surface-fg">{paragraph}</p>
                            ))}
                        </div>
                    ))}
                </div>
            )}

            {study.reflection && study.reflection.body.length > 0 && (
                <div
                    className="bg-surface-muted rounded-2xl p-4 text-surface-fg">
                    <h2 className="text-lg text-page-fg">{study.reflection.heading}</h2>
                    {study.reflection.body.map((paragraph, i) => (
                        <p key={i}>{paragraph}</p>
                    ))}
                </div>
            )}

            <div className="flex gap-6">
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