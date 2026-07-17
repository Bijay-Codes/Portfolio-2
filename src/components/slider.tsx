import { useEffect, useState } from "react";
import { dataToShow } from "../portfolio-data/about-me";
const { sliderImages } = dataToShow;

export function Slider() {
    const [index, setIndex] = useState(0);
    const [isPaused, setPaused] = useState(false);

    const click = (step: number) => {
        setIndex((prevIndex) => (prevIndex + step + sliderImages.length) % sliderImages.length);
    };

    useEffect(() => {
        if (isPaused) return;
        const intervalID = setInterval(() => {
            click(1);
        }, 3000);
        return () => clearInterval(intervalID);
    }, [isPaused]);

    const navButton = `h-8 w-8 shrink-0 inline-flex items-center justify-center
        rounded-full bg-surface/80 text-surface-muted-fg border border-surface-muted
        hover:bg-accent hover:text-white hover:border-accent
        transition-colors`;

    return (
        <section
            className="absolute inset-0"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onFocus={() => setPaused(true)}
            onBlur={() => setPaused(false)}
        >
            <figure className="h-full w-full">
                <img loading="lazy"
                    src={sliderImages[index].src}
                    alt={sliderImages[index].title}
                    className="object-top"
                />
            </figure>

            <div
                className="absolute bottom-0 left-0 right-0 bg-surface-muted/60
                backdrop-blur-sm px-2 sm:py-2 flex items-center justify-between gap-4"
            >
                <button
                    type="button"
                    className={navButton}
                    onClick={() => click(-1)}
                    aria-label="Previous slide"
                >
                    &lt;
                </button>

                <div className="flex gap-1.5" role="tablist" aria-label="Slide indicators">
                    {sliderImages.map((_, i) => (
                        <button
                            key={i}
                            type="button"
                            aria-label={`Go to slide ${i + 1}`}
                            aria-current={i === index}
                            onClick={() => setIndex(i)}
                            className={`h-2 rounded-full transition-all ${i === index ? "w-4 bg-accent" : "w-2 bg-surface-muted-fg/40"
                                }`}
                        />
                    ))}
                </div>

                <button
                    type="button"
                    className={navButton}
                    onClick={() => click(1)}
                    aria-label="Next slide"
                >
                    &gt;
                </button>
            </div>
        </section>
    )
}