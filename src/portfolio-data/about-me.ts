import { MEDIA_DATA, TECH_DATA } from "./tech-data";
import { favdexCaseStudy } from "./casestudy";
export const dataToShow = {
    aboutMe: {
        tagline: `Self-taught frontend developer, Always working on a new project. Deployed 3 projects`,
    },
    techStack: [
        TECH_DATA.html, TECH_DATA.css,
        TECH_DATA.js, TECH_DATA.react,
        TECH_DATA.tailwind, TECH_DATA.typescript
    ],
    projects: [
        {
            name: favdexCaseStudy.name,
            completedIn: 41,
            keyPoints: favdexCaseStudy.keyFeatures,
            techUsed: favdexCaseStudy.stack,
            intro: `A Feature-rich pokedex site built using PokeAPI, React, Tailwind and React router-
            All of which i had no experince on before, built to learn these frameworks and of-course because the current Pokedex sites felt clunky to me with not much features`,
            links: favdexCaseStudy.links
        },
        {
            name: 'FaunaUI',
            keyPoints: [
                '40 animal-inspired palettes, each with light / dark mode applied live to the site',
                'Live WCAG contrast scores on every text/background pairing — AA/AAA rating shown before use',
                'OKLCH color format for perceptually consistent color across hues',
                'Multiple export formats: CSS custom properties, Tailwind config, or Figma-ready hex'
            ],
            completedIn: 22,
            techUsed: [TECH_DATA.react, TECH_DATA.typescript, TECH_DATA.tailwind],
            intro: 'FaunaUI- a theme explorer tool built to fix the "decision paralysis" issues I was running into -- featuring 40 curated palettes filtered by category, each checked by an integrated WCAG contrast checker',
            links: {
                sourceLink: 'https://github.com/Bijay-Codes/FaunaUI',
                liveLink: 'https://faunaui.vercel.app'
            }
        },
        {
            name: 'Track-talk',
            keyPoints: [
                'Roast Engine — analyzes edit/add/delete ratios to detect behavioral patterns (indecisive editing / deletion "denial"), each triggers diffrent responses',
                'Edit/delete locked after 24 hours — enforced data immutability',
                'Dynamic "Hall of Shame" surfacing worst transaction on the monthly roast page',
                'Doughnut chart stats — spending by category, most-used category, preferred payment mode and much more',
            ],
            completedIn: 43,
            techUsed: [
                TECH_DATA.html, TECH_DATA.css,
                TECH_DATA.js
            ],
            intro: 'An expense tracker? Basic. How about one that points at you when you spend too much? What about one that tracks of how many times you edit / delete transactions? Thats track-talk.',
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
