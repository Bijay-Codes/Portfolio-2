export type data = {
    label: string;
    title: string;
    logo: string;
}
export type project_data = {
    name: string;
    completedIn: number;
    techUsed: data[];
    intro: string;
    links: {
        sourceLink: string;
        liveLink: string;
    }
    image: {
        main: string;
        sec: string[];
    };
}

export type socialData = {
    title: string;
    logo: string;
    link: string;
}
export type focusData = {
    label: string;
    info: string;
}
export interface data_to_show {
    aboutMe: {
        tagline: string;
        myFocus: focusData[];
    }
    techStack: data[];
    tools: data[];
    projects: project_data[];
    social: {
        github: socialData,
        linkedin: socialData;
    };
}