import { MEDIA_DATA, SOFTWARE_DATA, TECH_DATA } from "./tech-data";
export const dataToShow = {
    aboutMe: {
        tagline: `Self-taught frontend developer, 3 deployed projects`,
    },
    sliderImages: [
        { title: '', src: '1.png' },
        { title: '', src: '2.png' },
        { title: '', src: '3.png' },
        { title: '', src: '4.png' },
        { title: '', src: '5.png' },
        { title: '', src: '6.png' }
    ],
    techStack: [
        TECH_DATA.html, TECH_DATA.css,
        TECH_DATA.js, TECH_DATA.react,
        TECH_DATA.tailwind, TECH_DATA.typescript
    ],

    tools: [
        SOFTWARE_DATA.figma,
        SOFTWARE_DATA.git
    ],
    projects: [
        {
            name: 'Track-talk',
            completedIn: 43,
            techUsed: [
                TECH_DATA.html, TECH_DATA.css,
                TECH_DATA.js
            ],
            intro: 'An expense tracker with a Roast Engine — tracks your edit/delete behavior across 3 ratios and calls out spending patterns tag by tag',
            links: {
                sourceLink: 'https://github.com/Bijay-Codes/Expenses-Tracker',
                liveLink: 'https://track-talker.vercel.app'
            },
            image: {
                main: 'src',
                sec: ['src']
            }
        },
        {
            name: 'Favdex',
            completedIn: 41,
            techUsed: [
                TECH_DATA.react, TECH_DATA.tailwind,
                TECH_DATA.css],
            intro: 'A Pokédex with a gamified care system — feed berries to build friendship, auto-favorite at 100%, all config-driven from one file',
            links: {
                sourceLink: 'https://github.com/Bijay-Codes/Favdex',
                liveLink: 'https://favdex.vercel.app'
            },
            image: {
                main: 'src',
                sec: ['src']
            }
        },
        {
            name: 'FaunaUI',
            completedIn: 22,
            techUsed: [
                TECH_DATA.react, TECH_DATA.typescript,
                TECH_DATA.tailwind],
            intro: 'A color-and-type theme picker — 40 curated palettes filtered by category, each backed by a built-in WCAG contrast engine (OKLCH math, no color libraries)',
            links: {
                sourceLink: 'https://github.com/Bijay-Codes/FaunaUI',
                liveLink: 'https://faunaui.vercel.app'
            },
            image: {
                main: 'src',
                sec: ['src']
            }
        }
    ],
    social: {
        github: MEDIA_DATA.github,
        linkedin: MEDIA_DATA.linkedin
    }
}
