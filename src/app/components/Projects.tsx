import ProjectCard from './ProjectCard';

const Projects = () => {
    return (
        <section className="s1">
            <div className="main-container">
                <h3 style={{ textAlign: 'center' }}>Some of my past projects</h3>

                <div className="post-wrapper">
                    <ProjectCard
                        imageSrc="/images/dog website.JPG"
                        imageAlt="Landing pages"
                        title="Landing Pages"
                        intro="Landing pages that showcase different businesses. Click the link below to see if one of them fits your company needs."
                        linkHref="/landing-pages"
                        linkText="See all Landing pages."
                    />
                    <ProjectCard
                        imageSrc="/images/SocialMedia.JPG"
                        imageAlt="Rails projects"
                        title="Rails Projects"
                        intro="A collection of websites that showcase some of the previous Rails projects that I have worked on solo or as a part of a team."
                        linkHref="/rails-projects"
                        linkText="See all Rails projects"
                    />
                    <ProjectCard
                        imageSrc="/images/bookstore.JPG"
                        imageAlt="React projects"
                        title="React Projects"
                        intro="A collection of simple projects and games done using React on the front-end, some of these projects are using an API as a backend."
                        linkHref="/react-projects"
                        linkText="See all React projects"
                    />
                    <ProjectCard
                        imageSrc="/images/theNextWeb.JPG"
                        imageAlt="Website clones"
                        title="Website Clones"
                        intro="Responsive clones of websites that have a certain degree of complexity or have some interesting feature."
                        linkHref="/clone-pages"
                        linkText="See all website clones."
                    />
                    <ProjectCard
                        imageSrc="/images/blackjack game.JPG"
                        imageAlt="Small projects"
                        title="Small Projects and Games"
                        intro="A collection of small projects that have been built to showcase a particular skill or feature."
                        linkHref="/small-projects"
                        linkText="See all small projects"
                    />
                </div>
            </div>
        </section>
    );
};

export default Projects; 