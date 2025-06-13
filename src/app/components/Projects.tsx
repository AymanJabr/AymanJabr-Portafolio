import ProjectCard from './ProjectCard';

const Projects = () => {
    return (
        <section className="s1">
            <div className="main-container">
                <h3 style={{ textAlign: 'center' }}>Some of my past projects</h3>

                <div className="post-wrapper">
                    <ProjectCard
                        imageSrc="/images/pdf-analyzer.png"
                        imageAlt="AI projects"
                        title="AI Based Projects"
                        intro="A collection of projects that leverage AI for various tasks, from PDF analysis to virtual try-ons."
                        linkHref="/ai-projects"
                        linkText="See all AI projects"
                    />
                    <ProjectCard
                        imageSrc="/images/dog website.JPG"
                        imageAlt="Landing pages"
                        title="Landing Pages"
                        intro="Landing pages that showcase different businesses. Click the link below to see if one of them fits your company needs."
                        linkHref="/landing-pages"
                        linkText="See all Landing pages."
                    />
                    <ProjectCard
                        imageSrc="/images/blackjack game.JPG"
                        imageAlt="Small projects and games"
                        title="Small Projects and Games"
                        intro="A collection of small projects and games, some built with React, to showcase particular skills or features."
                        linkHref="/small-projects-and-games"
                        linkText="See all small projects and games"
                    />
                </div>
            </div>
        </section>
    );
};

export default Projects;