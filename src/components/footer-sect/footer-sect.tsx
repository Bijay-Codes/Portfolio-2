import type { data_to_show } from "../../portfolio-data/data-types";

export function Footer({ data }: { data: data_to_show }) {
    const { social } = data;
    return (
        <footer>
            <h3>Want to contact with me?</h3>
            <div>
                <span>
                    <img loading="lazy" src={social.github.logo} alt="github logo"
                        className="w-10 aspect-square" />
                    <a href={social.github.link}
                        target="_blank"
                        rel="noopener noreferrer">
                        {social.github.title}
                    </a>
                </span>
                <span>
                    <img loading="lazy" src={social.linkedin.logo} alt="linkedin logo"
                        className="w-10 aspect-square" />
                    <a href={social.linkedin.link}
                        target="_blank"
                        rel="noopener noreferrer">
                        {social.linkedin.title}
                    </a>
                </span>
                <a
                    href="mailto: bijayprojects@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer">Mail</a>
            </div>
        </footer>
    )
}