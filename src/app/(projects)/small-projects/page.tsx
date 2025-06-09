import Image from 'next/image';
import GitHubIcon from "@/app/components/GitHubIcon";
import ExternalLinkIcon from "@/app/components/ExternalLinkIcon";

const SmallProjects = () => {
    return (
        <div className="main-container">
            <h3 style={{ textAlign: 'center' }}>Small Projects</h3>

            <div className="post-wrapper">
                <div>
                    <div className="post" style={{ height: '100%' }}>
                        <Image className="thumbnail" src="/images/Tic-Tac-Toe game.JPG" alt="Tic-Tac-Toe" width={400} height={200} />
                        <div className="post-preview">
                            <h6 className="post-title">Tic-Tac-Toe</h6>
                            <p className="post-intro">
                                Play the classic Tic-Tac-Toe game with a friend.
                            </p>
                            <a className="live-link" target="_blank" rel="noopener noreferrer" href="https://aymanjabr-tictactoe.netlify.app/">See Live<ExternalLinkIcon /></a>
                            <a
                                className="github-link"
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://github.com/AymanJabr/TicTacToe-JS-Game"
                            >See Source<GitHubIcon /></a>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="post" style={{ height: '100%' }}>
                        <Image className="thumbnail" src="/images/typing game.JPG" alt="Speed Typing Game" width={400} height={200} />
                        <div className="post-preview">
                            <h6 className="post-title">Speed Typing Game</h6>
                            <p className="post-intro">
                                Test your typing speed against quotes from famous people.
                            </p>
                            <a className="live-link"
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://aymanjabr-speedtypinggame.netlify.app/"
                            >See Live<ExternalLinkIcon /></a>
                            <a
                                className="github-link"
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://github.com/AymanJabr/Speed-Typing-Game-JS-with-famous-quotes"
                            >See Source<GitHubIcon /></a>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="post" style={{ height: '100%' }}>
                        <Image className="thumbnail" src="/images/blackjack game.JPG" alt="Blackjack game" width={400} height={200} />
                        <div className="post-preview">
                            <h6 className="post-title">Full Blackjack game.</h6>
                            <p className="post-intro">
                                Classic Blackjack game with 2 decks. It contains the ability to
                                surrender, double down, split, and insure.
                            </p>
                            <a className="live-link"
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://blackjackgame-2decks.netlify.app/"
                            >See Live<ExternalLinkIcon /></a>
                            <a
                                className="github-link"
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://github.com/AymanJabr/Blackjack-game-full-shoe-2-decks"
                            >See Source<GitHubIcon /></a>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="post" style={{ height: '100%' }}>
                        <Image className="thumbnail" src="/images/miniPiano.JPG" alt="Mini-Piano game" width={400} height={200} />
                        <div className="post-preview">
                            <h6 className="post-title">Mini-Piano game.</h6>
                            <p className="post-intro">
                                Want to become the next Mozart? Start here.
                            </p>
                            <a className="live-link" target="_blank" rel="noopener noreferrer" href="https://aymanjabr-minipiano.netlify.app/">See Live<ExternalLinkIcon /></a>
                            <a
                                className="github-link"
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://github.com/AymanJabr/Mini-piano"
                            >See Source<GitHubIcon /></a>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="post" style={{ height: '100%' }}>
                        <Image className="thumbnail" src="/images/platform-jumper.jpg" alt="Simple platform jumper" width={400} height={200} />
                        <div className="post-preview">
                            <h6 className="post-title">Simple platform jumper</h6>
                            <p className="post-intro">
                                A simple arcade platform jumper, that uses an API to store the worldwide highscores of players. It uses the Phaser3 game engine.
                            </p>
                            <a className="live-link" target="_blank" rel="noopener noreferrer" href="https://simple-platform-jumper.netlify.app/">See Live<ExternalLinkIcon /></a>
                            <a
                                className="github-link"
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://github.com/AymanJabr/Endless-Platformer-Phaser"
                            >See Source<GitHubIcon /></a>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="post" style={{ height: '100%' }}>
                        <Image className="thumbnail" src="/images/computerSpeak.JPG" alt="Computer Speak" width={400} height={200} />
                        <div className="post-preview">
                            <h6 className="post-title">Computer Speak.</h6>
                            <p className="post-intro">
                                A fun tool where you can make the computer say anything you
                                want at different speeds.
                            </p>
                            <a className="live-link"
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://aymanjabr-computer-speak.netlify.app/"
                            >See Live<ExternalLinkIcon /></a>
                            <a
                                className="github-link"
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://github.com/AymanJabr/Text-To-Audio-JS-Speaker"
                            >See Source<GitHubIcon /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SmallProjects; 