// import { Slider } from "./slider"
export function ProofOfWork() {
    return (
        <section className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-h-100">
            <BIO />
            <ProjectsLog />
        </section>
    )
}

function BIO() {
    return (
        <div>
            <h1>I'm Focussed on making sites that are memorable and leave a impact, wether it be through content, unique experience or  user freindly fetures i dont back down from them</h1>
        </div>
    )
}
function ProjectsLog() {
    return (
        <div className="h-full p-4 flex flex-col gap-2 text-surface-muted-fg bg-surface rounded-lg">
            <span className="text-lg sm:text-xl whitespace-nowrap">$recent-works --list</span>
            <div className="text-base sm:text-lg">projects/</div>
            <ol className="text-sm sm:text-base flex flex-col gap-3">
                <li>/ --favdex</li>
                <li>/ --faunaui</li>
                <li>/ --track-talk</li>
            </ol>
            <span className="mt-auto text-sm sm:text-base animate-pulse">$ _</span>
        </div>
    )
}