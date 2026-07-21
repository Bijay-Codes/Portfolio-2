import type { data_to_show } from "../portfolio-data/data-types";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
export function Footer({ data }: { data: data_to_show }) {
    const { social } = data;
    const styles_for_contact_icons = 'flex flex-col justify-center items-center hover:-translate-y-0.5 w-14'
    return (
        <footer id="contacts" className="flex flex-col items-center gap-3 sm:self-center relative
         text-center bg-surface w-screen border-t-4 border-accent/50 p-4">
            <FooterCat />
            <h3 className="text-xl">Contact me</h3>
            <span className="text-surface-fg max-w-250 text-sm">
                Not much networking, and don't post much either. But I like talking about what I build, so if anything caught your eyes, don't overthink it — just say hi. I do actually reply.
            </span>
            <div className="flex items-center justify-center gap-4 p-2 text-surface-fg">
                <span className={styles_for_contact_icons}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-8 aspect-square" viewBox="0 0 16 16">
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                    </svg>
                    <a className="text-sm"
                        href={social.github.link}
                        target="_blank"
                        rel="noopener noreferrer">
                        {social.github.title}
                    </a>
                </span>
                <span className={styles_for_contact_icons}>
                    <img loading="lazy" src={social.linkedin.logo} alt="linkedin logo"
                        className="w-8 aspect-square" />
                    <a className="text-sm"
                        href={social.linkedin.link}
                        target="_blank"
                        rel="noopener noreferrer">
                        {social.linkedin.title}
                    </a>
                </span>
                <span className={styles_for_contact_icons}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-8 aspect-square" viewBox="0 0 16 16">
                        <path d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2zm3.708 6.208L1 11.105V5.383zM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2z" />
                        <path d="M14.247 14.269c1.01 0 1.587-.857 1.587-2.025v-.21C15.834 10.43 14.64 9 12.52 9h-.035C10.42 9 9 10.36 9 12.432v.214C9 14.82 10.438 16 12.358 16h.044c.594 0 1.018-.074 1.237-.175v-.73c-.245.11-.673.18-1.18.18h-.044c-1.334 0-2.571-.788-2.571-2.655v-.157c0-1.657 1.058-2.724 2.64-2.724h.04c1.535 0 2.484 1.05 2.484 2.326v.118c0 .975-.324 1.39-.639 1.39-.232 0-.41-.148-.41-.42v-2.19h-.906v.569h-.03c-.084-.298-.368-.63-.954-.63-.778 0-1.259.555-1.259 1.4v.528c0 .892.49 1.434 1.26 1.434.471 0 .896-.227 1.014-.643h.043c.118.42.617.648 1.12.648m-2.453-1.588v-.227c0-.546.227-.791.573-.791.297 0 .572.192.572.708v.367c0 .573-.253.744-.564.744-.354 0-.581-.215-.581-.8Z" />
                    </svg>
                    <a className="text-sm"
                        href="mailto: bijayprojects@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer">Mail</a>
                </span>
            </div>
        </footer>
    )
}
export function FooterCat() {
    const [clicked, setClicked] = useState(false);
    return (
        <div className="absolute -top-12 right-0 sm:right-1/3 flex flex-col items-center">
            <motion.svg
                viewBox="0 0 413.928 413.928"
                className="w-15 h-15 cursor-pointer text-surface-muted-fg"
                onClick={() => setClicked((c) => !c)}
                whileHover={{ y: -2, rotate: -2 }}
                whileTap={{ scale: 0.92 }}
            >
                {/* body, ears, tail, nose — solid silhouette */}
                <path
                    fill="currentColor"
                    d="M371.029,339.641c-8.379-15.763-17.871-33.634-17.871-61.678c0-46.918,26.024-63.424,27.084-64.072
          c3.85-2.278,5.115-7.246,2.837-11.096c-2.283-3.857-7.256-5.121-11.101-2.843c-1.429,0.85-35.021,21.39-35.021,78.011
          c0,32.083,10.958,52.708,19.76,69.282c6.312,11.865,11.29,21.246,11.29,31.968c0,7.683-1.672,13.23-4.83,16.062
          c-3.217,2.879-7.42,2.452-7.499,2.452c-0.385-0.058-0.78-0.084-1.171-0.084h-29.815c3.47-5.432,5.516-11.855,5.516-18.769V13.703
          c0-3.636-2.426-6.827-5.933-7.805c-3.496-0.986-7.225,0.503-9.107,3.615l-39.562,65.485c-12.139-0.231-47.809-0.509-154.588-0.509
          c-22.673,0-33.895,0.016-39.564,0.056L45.009,4.371c-1.724-3.317-5.508-5.028-9.109-4.137c-3.631,0.886-6.184,4.137-6.184,7.868
          v370.762c0,19.28,15.681,34.969,34.966,34.969H188.46h106.784h58.82c0.532,0.047,1.286,0.095,2.225,0.095
          c3.961,0,11.085-0.881,17.36-6.297c7.003-6.054,10.558-15.614,10.558-28.429C384.208,364.452,377.811,352.397,371.029,339.641z
          M194.134,234.763h-5.982l-0.654,11.253c-0.248,4.304-3.818,7.631-8.079,7.631c-0.156,0-0.316-0.005-0.475-0.011
          c-4.464-0.264-7.878-4.097-7.612-8.554l0.599-10.314h-6.146c-4.47,0-8.101-3.623-8.101-8.1c0-4.478,3.631-8.101,8.101-8.101h28.35
          c4.472,0,8.1,3.623,8.1,8.101C202.234,231.145,198.606,234.763,194.134,234.763z"
                />

                {/* eyes 👀 — white oval stays constant so both states have contrast */}
                <circle cx="115.041" cy="173.978" r="15" className="fill-surface-muted" />
                <circle cx="244.873" cy="173.937" r="15" className="fill-surface-muted" />

                {!clicked ? (
                    <>
                        <circle cx="120.041" cy="173.978" r="8" fill="currentColor" />
                        <circle cx="250.873" cy="173.937" r="8" fill="currentColor" />
                    </>
                ) : (
                    <>
                        <circle cx="115.041" cy="173.978" r="8" fill="currentColor" />
                        <circle cx="243.873" cy="173.937" r="8" fill="currentColor" />
                    </>
                )}

                {/* mouth — small curved smile under the nose */}
                <path
                    d="M140 258 Q140 274 220 260"
                    fill="none"
                    stroke="black"
                    strokeWidth="8"
                    strokeLinecap="round"
                />
            </motion.svg>

            <AnimatePresence>
                {clicked && (
                    <motion.span
                        initial={{ opacity: 0, y: -4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        className="text-xs text-surface-muted-fg mt-1 whitespace-nowrap"
                    >
                        meaw!
                    </motion.span>
                )}
            </AnimatePresence>
        </div>
    );
}