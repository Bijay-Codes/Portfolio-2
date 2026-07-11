import { MEDIA_DATA, SOFTWARE_DATA, TECH_DATA } from "./tech-data";
export const dataToShow = {
    aboutMe: {
        tagline: 'Self-taught developer, 3 deployed projects | currently building backend skills',
        myFocus: [
            {
                label: 'SEO optimization',
                info: `99/100 Lighthouse score on FaunaUI, on Favdex i optimized what was within my control,
                 though large API-served image size limited how far i could optimize`
            },
            {
                label: 'Accessibility/Contrast checking',
                info: 'Implemented a live contrast checker built into FaunaUI, not just guessing colors'
            },
            {
                label: 'UX-first approach',
                info: `Recent projects involved creation of wireframes and prototyping.
                From a pen and paper to Figma files.
                Furthermore implemented keyboard navigation between FaunaUI's themes, and keyboard-accessible modal closing in Favdex.`
            },
            {
                label: 'Responsive Design',
                info: ' Tested across breakpoints on all projects — no overflow or broken layouts.'
            }
        ]
    },
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
            title: 'An expenses tracker that also judges your spending habits- Track-talk',
            image: ['meaw', 'meawss']
        }
    ],
    social: {
        github: MEDIA_DATA.github,
        linkedin: MEDIA_DATA.linkedin
    }
}
