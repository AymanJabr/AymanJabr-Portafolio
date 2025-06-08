const About = () => {
    return (
        <section className="s2">
            <div className="main-container">
                <div className="about-wrapper">
                    <div className="about-me">
                        <h4>More about me</h4>

                        <p>
                            Self-taught Web Developer and Industrial Engineer who loves a good
                            intellectual challenge.
                        </p>

                        <p>
                            I spend my free-time with anything programming related, whether
                            web development, game design, or AI.
                        </p>

                        <hr />

                        <h4>Top Expertise</h4>

                        <div className="skills-grid">
                            <ul className="skills-column">
                                <li>JavaScript/Node.js</li>
                                <li>Ruby on Rails</li>
                                <li>Rspec/Capybara</li>
                                <li>React</li>
                                <li>Redux</li>
                            </ul>

                            <ul className="skills-column">
                                <li>SQL databases</li>
                                <li>Git/GitHub</li>
                                <li>Heroku/Netlify</li>
                                <li>HTML5/CSS</li>
                                <li>Typescript</li>
                            </ul>
                        </div>

                        <p>
                            <a target="_blank" href="/CV_Resume.pdf">Download Full Resume</a>
                        </p>
                    </div>

                    <div className="social-links">
                        <h3>Find me on LinkedIn & GitHub</h3>
                        <a target="_blank" href="https://www.linkedin.com/in/ayman-jabr/">LinkedIn</a>
                        <br />
                        <a href="https://github.com/AymanJabr" target="_blank">GitHub </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About; 