import Image from 'next/image';
import Link from 'next/link';

const Projects = () => {
    return (
        <section className="s1">
            <div className="main-container">
                <h3 style={{ textAlign: 'center' }}>Some of my past projects</h3>

                <div className="post-wrapper">
                    <div>
                        <div className="stack-container">
                            <div className="post">
                                <Image className="thumbnail" src="/images/dog website.JPG" alt="Landing pages" width={400} height={200} />
                                <div className="post-preview">
                                    <h6 className="post-title">Landing Pages</h6>
                                    <p className="post-intro">
                                        Landing pages that showcase different businesses. Click the
                                        link below to see if one of them fits your company needs.
                                    </p>
                                    <Link href="/landing-pages">See all Landing pages.</Link>
                                </div>
                            </div>
                            <div className="stack"></div>
                            <div className="stack2"></div>
                        </div>
                    </div>
                    <div>
                        <div className="stack-container">
                            <div className="post">
                                <Image className="thumbnail" src="/images/SocialMedia.JPG" alt="Rails projects" width={400} height={200} />
                                <div className="post-preview">
                                    <h6 className="post-title">Rails Projects</h6>
                                    <p className="post-intro">
                                        A collection of websites that showcase some of the previous
                                        Rails projects that I have worked on solo or as a part of a
                                        team.
                                    </p>
                                    <Link href="/rails-projects">See all Rails projects</Link>
                                </div>
                            </div>
                            <div className="stack"></div>
                            <div className="stack2"></div>
                        </div>
                    </div>
                    <div>
                        <div className="stack-container">
                            <div className="post">
                                <Image className="thumbnail" src="/images/bookstore.JPG" alt="React projects" width={400} height={200} />
                                <div className="post-preview">
                                    <h6 className="post-title">React Projects</h6>
                                    <p className="post-intro">
                                        A collection of simple projects and games done using React on the front-end, some of these projects are using an API as a backend.
                                    </p>
                                    <Link href="/react-projects">See all React projects</Link>
                                </div>
                            </div>
                            <div className="stack"></div>
                            <div className="stack2"></div>
                        </div>
                    </div>
                    <div>
                        <div className="stack-container">
                            <div className="post">
                                <Image className="thumbnail" src="/images/theNextWeb.JPG" alt="Website clones" width={400} height={200} />
                                <div className="post-preview">
                                    <h6 className="post-title">Website Clones</h6>
                                    <p className="post-intro">
                                        Responsive clones of websites that have a certain degree of
                                        complexity or have some interesting feature.
                                    </p>
                                    <Link href="/clone-pages">See all website clones.</Link>
                                </div>
                            </div>
                            <div className="stack"></div>
                            <div className="stack2"></div>
                        </div>
                    </div>
                    <div>
                        <div className="stack-container">
                            <div className="post">
                                <Image
                                    className="thumbnail"
                                    src="/images/blackjack game.JPG"
                                    alt="Small projects"
                                    width={400}
                                    height={200}
                                />
                                <div className="post-preview">
                                    <h6 className="post-title">Small Projects and Games</h6>
                                    <p className="post-intro">
                                        A collection of small projects that have been built to showcase a particular skill or feature.
                                    </p>
                                    <Link href="/small-projects">See all small projects</Link>
                                </div>
                            </div>
                            <div className="stack"></div>
                            <div className="stack2"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects; 