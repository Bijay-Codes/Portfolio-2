export type data = {
    label: string;
    title: string;
    logo: string;
}
export type project_data = {
    name: string;
    completedIn: number;
    techUsed: data[];
    title: string;
    image: string[];
}
export interface data_to_show {
    techStack: data[];
    tools: data[];
    projects: project_data[];
}