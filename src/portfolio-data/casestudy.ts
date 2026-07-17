import { TECH_DATA } from "./tech-data";
import type { techdata } from "./data-types";
export interface CaseStudySection {
    heading: string;
    body: string[];
}

export interface CaseStudy {
    name: string;
    title: string;
    stack: techdata[];
    links: {
        sourceLink: string;
        liveLink: string;
    }
    summary: string;
    keyFeatures: string[];
    whyIBuiltIt: CaseStudySection;
    whatItDoes: string[];
    technicalDecisions: CaseStudySection[];
    reflection: CaseStudySection;
}

export const favdexCaseStudy: CaseStudy = {
    name: 'favdex',
    title: 'Favdex — a feature-rich Pokédex app',
    stack: [
        TECH_DATA.react, TECH_DATA.tailwind,
        TECH_DATA.css],
    links: {
        sourceLink: 'https://github.com/Bijay-Codes/Favdex',
        liveLink: 'https://favdex.vercel.app'
    },

    summary:
        'Built to learn React Router, Tailwind CSS, and how to structure a project around a public API — all three at once, with no prior experience in any of them.',

    keyFeatures: [
        'Infinite scroll (Intersection Observer) — fixed a double-fetch bug caused by the sentinel being visible on initial load',
        'Favorites list capped at 60 (matches PC box limit in the games), unlocked via friendship points from feeding berries',
        'localStorage caching, stripped down to only needed fields to stay under the 5MB limit',
        'Click a Pokémon to hear its cry, toggle shiny/normal sprite',
        'Search with name suggestions',
        'Lighthouse 99/100/100/100 — cut batch size 20→9 to fix an LCP issue from large sprite images',
    ],

    whyIBuiltIt: {
        heading: 'Why I built it',
        body: [
            "Favdex was built to learn three things at once: React Router, Tailwind CSS, and how to actually structure a project around a public API. I had no prior experience with any of the three — this project was where I learned them by building, not by reading docs first.",
        ],
    },

    whatItDoes: [
        "A searchable, browsable Pokédex with infinite scroll, a favorites list (\"Favdex\"), and small game-accurate mechanics layered on top of the PokéAPI data.",
        "Clicking a Pokémon's image plays its cry and toggles its sprite between shiny and normal.",
        "Feed a Pokémon a berry to raise its friendship points; once it crosses 100 points, it's added to your Favdex.",
        "The Favdex is capped at 60 Pokémon — a deliberate reference to the max PC box size in the mainline games, and a practical limit so the page doesn't become unmanageable.",
        "A search utility suggests Pokémon names as you type, for when you can't remember the exact name.",
        "Pressing Esc closes any open modal.",
        "Stat fields like happiness, gender rate, and catch rate are shown as readable text rather than raw numbers where a number alone wouldn't mean much.",
    ],

    technicalDecisions: [
        {
            heading: 'Infinite scroll, done properly',
            body: [
                "Built with the Intersection Observer API rather than scroll-event listeners. A sentinel element at the bottom of the list is tracked; when it becomes visible, loadMore() fires and fetches the next batch.",
                "The hardest bug in the whole project lived here: on initial page load, the sentinel could already be visible in the viewport, which triggered duplicate fetches or, in other cases, no fetch at all. Fixed it by tracking two pieces of state — whether a fetch is currently in progress, and whether the initial load has completed — and only allowing a new fetch when both conditions are correctly set. That eliminated the double-fetch and stuck-list bugs.",
            ],
        },
        {
            heading: 'Caching and API discipline',
            body: [
                "Results are cached in localStorage to avoid re-fetching data that's already been retrieved, checked against the cache before hitting the PokéAPI endpoint. Because localStorage has a hard ~5MB limit, I trimmed what gets stored down to only the fields the app actually needs, rather than caching the full API response per Pokémon.",
            ],
        },
        {
            heading: 'Graceful image failure',
            body: [
                "If a Pokémon's sprite fails to load — or is still loading — a fallback image of Mew is shown in its place as a temporary stand-in, so the UI never shows a broken image icon.",
            ],
        },
        {
            heading: 'Performance',
            body: [
                "Got a Lighthouse score of 100 across all four categories. The main obstacle was image weight: the sprites I was pulling in were high-resolution enough to hurt the Largest Contentful Paint (LCP) score. The fix was reducing how many Pokémon load per batch — from roughly 20 down to 9 — which cut the amount of image data the browser had to paint at once.",
            ],
        },
        {
            heading: 'Routing',
            body: [
                "Used React Router to get first-hand experience with how single-page apps handle navigation — swapping components in and out based on the URL path, rather than full page reloads.",
            ],
        },
    ],

    reflection: {
        heading: 'Reflection',
        body: [
            "This was my first project working with an external API, and my first time touching concepts like the virtual DOM, inline styling patterns in React, and Tailwind's utility-first approach — all at once. Looking back, there are almost certainly more efficient ways to handle some of this. But as a snapshot of where my skills were at the time, I think it holds up: the app works, the bugs that came up were real architectural problems, and I solved them by reasoning through the state, not by copying a fix.",
        ],
    },
}