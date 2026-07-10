import { SOFTWARE_DATA, TECH_DATA } from "./tech-data"
export const dataToShow = {
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
            name: 'track talk',
            completeIn: 43,
            techUsed: [
                TECH_DATA.html, TECH_DATA.css,
                TECH_DATA.js
            ],
            tittle: 'A expenses tracker that also judges your spending habits- Track_talk',
            description: ''
        }
    ]
}