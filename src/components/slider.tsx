import { useEffect, useState } from "react";
import { dataToShow } from "../portfolio-data/about-me";
const { sliderImages } = dataToShow;
export function Slider() {
    const [index, setIndex] = useState(0);
    const [isHover, setHover] = useState(false);
    const click = (step: number) => {
        setIndex((prevIndex) => (prevIndex + step + sliderImages.length) % sliderImages.length);
    };
    useEffect(() => {
        let intervalID = 0;
        if (!isHover) {
            intervalID = setInterval(() => {
                click(1);
            }, 3000);
        }
        return () => clearInterval(intervalID);
    }, [isHover])
    const accButtons = `p-2 h-8 aspect-square outline bg-surface rounded-full
    inline-flex items-center justify-center`;
    return (
        <section
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}>
            <figure>
                <img src={sliderImages[index].src} alt={sliderImages[index].title} />
            </figure>
            <div
                className='bg-surface-muted/60
                w-full absolute bottom-0 p-1
                flex gap-10 justify-center items-center'>
                <div className={accButtons}
                    onClick={() => click(-1)}>&lt;</div>
                <div className={accButtons}
                    onClick={() => click(1)}>
                    &gt;
                </div>
            </div>
        </section>
    )
}