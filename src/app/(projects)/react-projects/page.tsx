import Image from 'next/image';
import GitHubIcon from "@/app/components/GitHubIcon";
import ExternalLinkIcon from "@/app/components/ExternalLinkIcon";

const ReactProjects = () => {
    return (
        <div className="main-container">
            <h3 style={{ textAlign: 'center' }}>React Projects</h3>

            <div className="post-wrapper">

                <div>
                    <div className="post" style={{ height: '100%' }}>
                        <Image className="thumbnail" src="/images/covid-statistics.JPG" alt="COVID-19 Statistics" width={400} height={200} />
                        <div className="post-preview">
                            <h6 className="post-title">Worldwide COVID-19 Statistics</h6>
                            <p className="post-intro">
                                A Single Page Application, that makes use of the Corona-Tracker API. The application is updated bihourly with the worldwide and by country COVID-19 statistics.
                            </p>
                            <a className="live-link" target="_blank" rel="noopener noreferrer" href="https://worldwide-covid-statistics.netlify.app/">See Live<ExternalLinkIcon /></a>
                            <a className="github-link" target="_blank" rel="noopener noreferrer" href="https://github.com/AymanJabr/Worldwide-Covid-Statistics">See Source<GitHubIcon /></a>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="post" style={{ height: '100%' }}>
                        <Image className="thumbnail" src="/images/game-of-life.JPG" alt="Game of Life" width={400} height={200} />
                        <div className="post-preview">
                            <h6 className="post-title">Game of Life</h6>
                            <p className="post-intro">
                                Implementation of the famous Conway's Game of Life.
                            </p>
                            <a className="live-link" target="_blank" rel="noopener noreferrer" href="https://game-of-life-ayman.netlify.app/">See Live<ExternalLinkIcon /></a>
                            <a className="github-link" target="_blank" rel="noopener noreferrer" href="https://github.com/AymanJabr/Game-of-Life">See Source<GitHubIcon /></a>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="post" style={{ height: '100%' }}>
                        <Image className="thumbnail" src="/images/hangman.JPG" alt="React Hangman" width={400} height={200} />
                        <div className="post-preview">
                            <h6 className="post-title">React Hangman</h6>
                            <p className="post-intro">
                                Classical Hangman game, created using React.
                            </p>
                            <a className="live-link" target="_blank" rel="noopener noreferrer" href="https://my-react-hang-man.netlify.app/">See Live<ExternalLinkIcon /></a>
                            <a className="github-link" target="_blank" rel="noopener noreferrer" href="https://github.com/AymanJabr/Hangman-React">See Source<GitHubIcon /></a>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="post" style={{ height: '100%' }}>
                        <Image className="thumbnail" src="/images/calculator.JPG" alt="React Calculator" width={400} height={200} />
                        <div className="post-preview">
                            <h6 className="post-title">React Calculator</h6>
                            <p className="post-intro">
                                React single-page app, that makes use of React Routing. In this project I created a simple calculator, with full functionality and testing.
                            </p>
                            <a className="live-link" target="_blank" rel="noopener noreferrer" href="https://simple-calculator-project.herokuapp.com/calculator">See Live<ExternalLinkIcon /></a>
                            <a className="github-link" target="_blank" rel="noopener noreferrer" href="https://github.com/AymanJabr/React-Simple-Calculator">See Source<GitHubIcon /></a>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="post" style={{ height: '100%' }}>
                        <Image className="thumbnail" src="/images/bookstore.JPG" alt="Bookstore Library" width={400} height={200} />
                        <div className="post-preview">
                            <h6 className="post-title">Bookstore Library</h6>
                            <p className="post-intro">
                                React/Redux single-page app, that makes use of React Routing. In this project we created a simple bookstore app, with the ability to add books and to filter the available ones by category.
                            </p>
                            <a className="live-link" target="_blank" rel="noopener noreferrer" href="https://project-bookstore-cms.herokuapp.com/">See Live<ExternalLinkIcon /></a>
                            <a className="github-link" target="_blank" rel="noopener noreferrer" href="https://github.com/AymanJabr/Bookstore-CMS">See Source<GitHubIcon /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReactProjects; 