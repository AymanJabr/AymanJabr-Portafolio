import ProjectPost from "@/app/components/ProjectPost";

const SmallProjectsAndGames = () => {
    return (
        <div className="main-container">
            <h3 style={{ textAlign: 'center' }}>Small Projects and Games</h3>

            <div className="post-wrapper">
                <ProjectPost
                    title="Game of Life"
                    imageSrc="/images/game-of-life.JPG"
                    imageAlt="Game of Life"
                    intro="Implementation of the famous Conway's Game of Life."
                    liveLink="https://game-of-life-ayman.netlify.app/"
                    sourceLink="https://github.com/AymanJabr/Game-of-Life"
                />

                <ProjectPost
                    title="React Hangman"
                    imageSrc="/images/hangman.JPG"
                    imageAlt="React Hangman"
                    intro="Classical Hangman game, created using React."
                    liveLink="https://my-react-hang-man.netlify.app/"
                    sourceLink="https://github.com/AymanJabr/Hangman-React"
                />

                <ProjectPost
                    title="React Calculator"
                    imageSrc="/images/calculator.JPG"
                    imageAlt="React Calculator"
                    intro="React single-page app, that makes use of React Routing. In this project I created a simple calculator, with full functionality and testing."
                    liveLink="https://ayman-simple-calculator.netlify.app/"
                    sourceLink="https://github.com/AymanJabr/React-Simple-Calculator"
                />
                <ProjectPost
                    title="Tic-Tac-Toe"
                    imageSrc="/images/Tic-Tac-Toe game.JPG"
                    imageAlt="Tic-Tac-Toe"
                    intro="Play the classic Tic-Tac-Toe game with a friend."
                    liveLink="https://aymanjabr-tictactoe.netlify.app/"
                    sourceLink="https://github.com/AymanJabr/TicTacToe-JS-Game"
                />
                <ProjectPost
                    title="Speed Typing Game"
                    imageSrc="/images/typing game.JPG"
                    imageAlt="Speed Typing Game"
                    intro="Test your typing speed against quotes from famous people."
                    liveLink="https://aymanjabr-speedtypinggame.netlify.app/"
                    sourceLink="https://github.com/AymanJabr/Speed-Typing-Game-JS-with-famous-quotes"
                />
                <ProjectPost
                    title="Full Blackjack game."
                    imageSrc="/images/blackjack game.JPG"
                    imageAlt="Blackjack game"
                    intro="Classic Blackjack game with 2 decks. It contains the ability to surrender, double down, split, and insure."
                    liveLink="https://blackjackgame-2decks.netlify.app/"
                    sourceLink="https://github.com/AymanJabr/Blackjack-game-full-shoe-2-decks"
                />
                <ProjectPost
                    title="Mini-Piano game."
                    imageSrc="/images/miniPiano.JPG"
                    imageAlt="Mini-Piano game"
                    intro="Want to become the next Mozart? Start here."
                    liveLink="https://aymanjabr-minipiano.netlify.app/"
                    sourceLink="https://github.com/AymanJabr/Mini-piano"
                />
                <ProjectPost
                    title="Simple platform jumper"
                    imageSrc="/images/platform-jumper.jpg"
                    imageAlt="Simple platform jumper"
                    intro="A simple arcade platform jumper, that uses an API to store the worldwide highscores of players. It uses the Phaser3 game engine."
                    liveLink="https://simple-platform-jumper.netlify.app/"
                    sourceLink="https://github.com/AymanJabr/Endless-Platformer-Phaser"
                />
                {/* <ProjectPost
                    title="Computer Speak."
                    imageSrc="/images/computerSpeak.JPG"
                    imageAlt="Computer Speak"
                    intro="A fun tool where you can make the computer say anything you want at different speeds."
                    liveLink="https://aymanjabr-computer-speak.netlify.app/"
                    sourceLink="https://github.com/AymanJabr/Text-To-Audio-JS-Speaker"
                /> */}
            </div>
        </div>
    );
};

export default SmallProjectsAndGames; 