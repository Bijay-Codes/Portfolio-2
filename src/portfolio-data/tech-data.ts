import type { data } from "./data-types";

// whats a record???? well it is a inbuilt class/utility type of typescript
//  what its doing? what normal types does but it takes 2 input and for objects mostly
//  the input it takes are 1st key it takes the datatype of key... often its string
//  the second input it takes? it takes value... we can assign/check the type of value matches the structure or not
export const TECH_DATA: Record<string, data> = {
    html: {
        label: 'html 5',
        title: 'structure building',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg'
    },
    css: {
        label: 'css 3',
        title: 'styling the webpage',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg'
    },
    js: {
        label: 'javascript',
        title: 'client side scripting',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg'
    },
    typescript: {
        label: 'typescript',
        title: 'strict checking javascript library',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg'
    },
    tailwind: {
        label: 'tailwind css',
        title: 'fast paced styling of webpage',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg'
    },
    react: {
        label: 'react',
        title: 'declarative javascript library',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg'
    }
}

export const SOFTWARE_DATA: Record<string, data> = {
    git: {
        label: 'github',
        title: 'version control',
        logo: 'src'
    },
    figma: {
        label: 'figma',
        title: 'prototyping & wireframing',
        logo: 'src'
    }

}