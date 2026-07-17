import { MEDIA_DATA, SOFTWARE_DATA, TECH_DATA } from "./tech-data";
import { favdexCaseStudy } from "./casestudy";
export const dataToShow = {
    aboutMe: {
        tagline: `Self-taught frontend developer, Always working on a new project. Deployed 3 projects`,
    },
    sliderImages: [
        { title: 'Modal of a pokemon in Favdex', src: 'favdex-mod.webp' },
        { title: 'Favdex page', src: 'favourite.webp' },
        { title: 'FaunaUI homepage', src: 'fauna-home.webp' },
        { title: 'FaunaUI theme page', src: 'fauna.webp' },
        { title: 'Tracktalk form', src: 'track-talk.webp' }
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
            name: favdexCaseStudy.name,
            completedIn: 41,
            keyPoints: favdexCaseStudy.keyFeatures,
            techUsed: favdexCaseStudy.stack,
            intro: 'A Pokédex with a gamified care system — feed berries to build friendship, auto-favorite at 100%, all config-driven from one file',
            links: favdexCaseStudy.links
        },
        {
            name: 'FaunaUI',
            keyPoints: [
                'Infinite scroll (Intersection Observer) — fixed a double-fetch bug caused by the sentinel being visible on initial load',
                'Favorites list capped at 60 (matches PC box limit in the games), unlocked via friendship points from feeding berries',
                'localStorage caching, stripped down to only needed fields to stay under the 5MB limit',
                'Click a Pokémon to hear its cry, toggle shiny/normal sprite',
                'Search with name suggestions',
                'Lighthouse scores 99/100/100/100 — cut fetch per batch size from 20 > 9 to fix an LCP issue from large sprite images'
            ],
            completedIn: 22,
            techUsed: [
                TECH_DATA.react, TECH_DATA.typescript,
                TECH_DATA.tailwind],
            intro: 'A color-and-type theme picker — 40 curated palettes filtered by category, each backed by a built-in WCAG contrast engine (OKLCH math, no color libraries)',
            links: {
                sourceLink: 'https://github.com/Bijay-Codes/FaunaUI',
                liveLink: 'https://faunaui.vercel.app'
            }
        },
        {
            name: 'Track-talk',
            keyPoints: [
                'Infinite scroll (Intersection Observer) — fixed a double-fetch bug caused by the sentinel being visible on initial load',
                'Favorites list capped at 60 (matches PC box limit in the games), unlocked via friendship points from feeding berries',
                'localStorage caching, stripped down to only needed fields to stay under the 5MB limit',
                'Click a Pokémon to hear its cry, toggle shiny/normal sprite',
                'Search with name suggestions',
                'Lighthouse scores 99/100/100/100 — cut fetch per batch size from 20 > 9 to fix an LCP issue from large sprite images'
            ],
            completedIn: 43,
            techUsed: [
                TECH_DATA.html, TECH_DATA.css,
                TECH_DATA.js
            ],
            intro: 'An expense tracker with a Roast Engine — tracks your edit/delete behavior across 3 ratios and calls out spending patterns tag by tag',
            links: {
                sourceLink: 'https://github.com/Bijay-Codes/Expenses-Tracker',
                liveLink: 'https://track-talker.vercel.app'
            }
        }
    ],
    social: {
        github: MEDIA_DATA.github,
        linkedin: MEDIA_DATA.linkedin
    }
}
