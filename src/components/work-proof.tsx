import { Slider } from "./slider"
export function ProofOfWork() {
    return (
        <section className="grid grid-cols-2 w-full min-h-80 max-h-120">
            <ImageSlides />
            <ProjectsLog />
        </section>
    )
}
function ImageSlides() {
    return (
        <div className="bg-surface h-full aspect-video col-span-1 rounded relative overflow-hidden">
            <Slider />
        </div>
    )
}
function ProjectsLog() {
    return (
        <div className="p-4 flex flex-col gap-2 text-surface-muted-fg">
            <span className="text-xl">$recent-works --list</span>
            <div className="text-lg">projects/</div>
            <ol className="text-md flex flex-col gap-1">
                <li>/ --favdex</li>
                <li>/ --faunaui</li>
                <li>/ --track-talk</li>
                <li>/ <span className="line-through">-portfolio</span> --rendered</li>
            </ol>
        </div>
    )
}