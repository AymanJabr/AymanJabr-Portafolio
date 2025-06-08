import Image from 'next/image';
import Link from 'next/link';

interface ProjectCardProps {
    imageSrc: string;
    imageAlt: string;
    title: string;
    intro: string;
    linkHref: string;
    linkText: string;
}

const ProjectCard = ({ imageSrc, imageAlt, title, intro, linkHref, linkText }: ProjectCardProps) => {
    return (
        <div>
            <div className="stack-container">
                <div className="post">
                    <Image className="thumbnail" src={imageSrc} alt={imageAlt} width={400} height={200} />
                    <div className="post-preview">
                        <h6 className="post-title">{title}</h6>
                        <p className="post-intro">{intro}</p>
                        <Link href={linkHref}>{linkText}</Link>
                    </div>
                </div>
                <div className="stack"></div>
                <div className="stack2"></div>
            </div>
        </div>
    );
};

export default ProjectCard; 