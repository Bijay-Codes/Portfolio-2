import type { data_to_show } from "../portfolio-data/data-types";
import { motion } from "framer-motion";
// interface dataToShowType {
//     data: data_to_show
// }
// could use the interface but i am practicing stuff so i used the inline declaration of the type

export function TechStack({ data }: { data: data_to_show }) {
    const delay = 0.2;
    const gap = 0.2;
    const { techStack } = data;
    return (
        <section className="flex flex-col w-full gap-4">
            <span className="text-surface-muted-fg text-xl">$echo --tech-stack</span>
            <div className="flex flex-wrap gap-4">
                {
                    techStack.map((tech, i) => {
                        return (
                            <motion.div className="flex flex-col justify-center items-center w-16 hover:scale-110 transition-all duration-150 ease-in-out"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: false, amount: 0.1 }}
                                transition={{ duration: 0.2, delay: delay + (i * gap), ease: 'easeIn' }}
                                key={tech.label}>
                                <img title={tech.title}
                                    loading="lazy"
                                    src={tech.logo} alt={tech.label}
                                    className="w-12 aspect-square rounded-lg bg-surface-muted border border-accent/30 p-2"
                                />
                                <span className="text-sm text-surface-muted-fg tracking-tighter leading-tight">{tech.label}</span>
                            </motion.div>
                        )
                    })
                }
            </div>
        </section>
    )
}