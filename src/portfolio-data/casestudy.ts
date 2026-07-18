import { TECH_DATA } from "./tech-data";
import type { techdata } from "./data-types";
export interface CaseStudySection {
    heading: string;
    body: string;
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
    whyIBuiltIt: {
        heading: string;
        body: string[];
    };
    technicalDecisions: CaseStudySection[];
    reflection: CaseStudySection;
}
export const favdexCaseStudy: CaseStudy = {
    name: 'Favdex',
    title: 'Favdex — a feature-rich Pokédex app',
    stack: [
        TECH_DATA.react, TECH_DATA.tailwind,
        TECH_DATA.css],
    links: {
        sourceLink: 'https://github.com/Bijay-Codes/Favdex',
        liveLink: 'https://favdex.vercel.app'
    },

    summary:
        `A Pokédex built to learn React, Tailwind, and API-driven apps — all three for the first time,
         on the same project with some chaos? No.`,

    keyFeatures: [
        'Infinite scroll — fixed a double-fetch bug from the sentinel being visible on load',
        'Favorites list capped at 60 (the PC box limit in the games), unlocked via friendship points',
        'localStorage caching, trimmed to stay under the 5MB limit',
        'Click a Pokémon to hear its cry, toggle shiny/normal sprite',
        'Search with name suggestions',
        'Lighthouse 99/100/100/100 — cut fetch batch size from 20 > 9 to fix an LCP issue',
    ],

    whyIBuiltIt: {
        heading: 'Why I built it',
        body: [
            `There are many diffrent projects i could have made to learn those frameworks why a pokedex?
            that was because i saw that most of the pokedex sites look basic and doesnt focus on the creature itself.
            they just slap raw data on it and call it a day, for me that wasn't enough.
            What if the user wanted to see their shiny forms? What about its sound? Forgot the exact name of pokemon? I answered these questions in my own ways`,
        ],
    },
    technicalDecisions: [
        {
            heading: 'Infinite scroll, done properly',
            body: "Uses Intersection Observer because i wanted to make some empty cards that make it feel like pokemon is 'Loading' and a load more button is a extra click i am too lazy to do"
        },
        {
            heading: 'Caching and API discipline',
            body: "LocalStorage saves data and is checked before requests to PokéAPI. Since storage space is just ~5MB, only stored necessasy data and reduces recurring fetches"
        },
        {
            heading: 'Graceful image failure',
            body: "If a sprite is loading or still fails to load, you will see Mew as a fallback instead of the broken image sprite."
        },
        {
            heading: 'Performance',
            body: "High-res images were the cause of LCP issues. Fixed by reducing batch size from ~20 > 9 Pokémon per load. Yeah we can edit it just at one config file. Its that simple",
        }
    ],

    reflection: {
        heading: 'Reflection',
        body: `First project with external API, virtual DOM, and Tailwind… all in one project. I know there might be better ways to do things than i did but at that time i implemented solutions as best of my knowledge,
         after all juggling regular studies apart from the projects is difficult indeed so i wont beat myself up on this one.`
    },
}