export type techdata = {
    label: string;
    title: string;
    logo: string;
}
export type project_data = {
    name: string;
    keyPoints: string[];
    completedIn: number;
    techUsed: techdata[];
    intro: string;
    links: {
        sourceLink: string;
        liveLink: string;
    }
}

export type socialData = {
    title: string;
    logo: string;
    link: string;
}
type imagesSRC = {
    title: string;
    src: string;
}
export interface data_to_show {
    aboutMe: {
        tagline: string;
    }
    sliderImages: imagesSRC[]
    techStack: techdata[];
    tools: techdata[];
    projects: project_data[];
    social: {
        github: socialData,
        linkedin: socialData;
    };
}