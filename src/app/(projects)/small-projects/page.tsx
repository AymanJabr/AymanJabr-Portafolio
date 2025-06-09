import ProjectPost from "@/app/components/ProjectPost";

const SmallProjects = () => {
    return (
        <div className="main-container">
            <h3 style={{ textAlign: 'center' }}>Small Projects</h3>

            <div className="post-wrapper">
                <ProjectPost
                    title="Tic-Tac-Toe"
                    imageSrc="/images/Tic-Tac-Toe game.JPG"
                    imageAlt="Tic-Tac-Toe"
                    intro="Play the classic Tic-Tac-Toe game with a friend."
                    liveLink="https://aymanjabr-tictactoe.netlify.app/"
                    sourceLink="https://github.com/AymanJabr/TicTacToe-JS-Game"
                    fullHeight
                />
                <ProjectPost
                    title="Speed Typing Game"
                    imageSrc="/images/typing game.JPG"
                    imageAlt="Speed Typing Game"
                    intro="Test your typing speed against quotes from famous people."
                    liveLink="https://aymanjabr-speedtypinggame.netlify.app/"
                    sourceLink="https://github.com/AymanJabr/Speed-Typing-Game-JS-with-famous-quotes"
                    fullHeight
                />
                <ProjectPost
                    title="Full Blackjack game."
                    imageSrc="/images/blackjack game.JPG"
                    imageAlt="Blackjack game"
                    intro="Classic Blackjack game with 2 decks. It contains the ability to surrender, double down, split, and insure."
                    liveLink="https://blackjackgame-2decks.netlify.app/"
                    sourceLink="https://github.com/AymanJabr/Blackjack-game-full-shoe-2-decks"
                    fullHeight
                />
                <ProjectPost
                    title="Mini-Piano game."
                    imageSrc="/images/miniPiano.JPG"
                    imageAlt="Mini-Piano game"
                    intro="Want to become the next Mozart? Start here."
                    liveLink="https://aymanjabr-minipiano.netlify.app/"
                    sourceLink="https://github.com/AymanJabr/Mini-piano"
                    fullHeight
                />
                <ProjectPost
                    title="Simple platform jumper"
                    imageSrc="/images/platform-jumper.jpg"
                    imageAlt="Simple platform jumper"
                    intro="A simple arcade platform jumper, that uses an API to store the worldwide highscores of players. It uses the Phaser3 game engine."
                    liveLink="https://simple-platform-jumper.netlify.app/"
                    sourceLink="https://github.com/AymanJabr/Endless-Platformer-Phaser"
                    fullHeight
                />
                <ProjectPost
                    title="Computer Speak."
                    imageSrc="/images/computerSpeak.JPG"
                    imageAlt="Computer Speak"
                    intro="A fun tool where you can make the computer say anything you want at different speeds."
                    liveLink="https://aymanjabr-computer-speak.netlify.app/"
                    sourceLink="https://github.com/AymanJabr/Text-To-Audio-JS-Speaker"
                    fullHeight
                />
            </div>
        </div>
    );
};

export default SmallProjects; 