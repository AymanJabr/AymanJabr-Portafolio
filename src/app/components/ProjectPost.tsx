import Image from 'next/image';
import GitHubIcon from './GitHubIcon';
import ExternalLinkIcon from './ExternalLinkIcon';

interface ProjectPostProps {
    title: string;
    imageSrc: string;
    imageAlt: string;
    intro: string;
    liveLink: string;
    sourceLink: string;
}

const ProjectPost = ({
    title,
    imageSrc,
    imageAlt,
    intro,
    liveLink,
    sourceLink,
}: ProjectPostProps) => {
    return (
        <div>
            <div className="post" style={{ height: '100%' }}>
                <Image
                    className="thumbnail"
                    src={imageSrc}
                    alt={imageAlt}
                    width={400}
                    height={200}
                />
                <div className="post-preview">
                    <h6 className="post-title">{title}</h6>
                    <p className="post-intro">{intro}</p>
                    <div className="post-links-wrapper">
                        <a
                            className="live-link"
                            target="_blank"
                            rel="noopener noreferrer"
                            href={liveLink}
                        >
                            See Live
                            <ExternalLinkIcon />
                        </a>
                        <a
                            className="github-link"
                            target="_blank"
                            rel="noopener noreferrer"
                            href={sourceLink}
                        >
                            See Source
                            <GitHubIcon />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectPost; 