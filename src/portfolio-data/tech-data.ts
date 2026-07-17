import type { techdata, socialData } from "./data-types";

// whats a record???? well it is a inbuilt class/utility type of typescript
//  what its doing? what normal types does but it takes 2 input and for objects mostly
//  the input it takes are 1st key it takes the datatype of key... often its string
//  the second input it takes? it takes value... we can assign/check the type of value matches the structure or not
export const TECH_DATA: Record<string, techdata> = {
    html: {
        label: 'Html 5',
        title: 'structure building',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg'
    },
    css: {
        label: 'CSS 3',
        title: 'styling the webpage',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg'
    },
    js: {
        label: 'Javascript',
        title: 'client side scripting',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg'
    },
    typescript: {
        label: 'Typescript',
        title: 'strict checking javascript library',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg'
    },
    tailwind: {
        label: 'Tailwind',
        title: 'fast paced styling of webpage',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg'
    },
    react: {
        label: 'React',
        title: 'declarative javascript library',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg'
    }
}

export const MEDIA_DATA: Record<string, socialData> = {
    linkedin: {
        title: 'Linkedin',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg',
        link: 'https://linkedin.com/in/bijay-verma-876b353a4'
    },
    github: {
        title: 'Github',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg',
        link: 'https://github.com/Bijay-Codes'
    }
}

export const SOFTWARE_DATA: Record<string, techdata> = {
    git: {
        label: 'github',
        title: 'version control',
        logo: MEDIA_DATA.github.logo
    },
    figma: {
        label: 'figma',
        title: 'prototyping & wireframing',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg'
    }
}
