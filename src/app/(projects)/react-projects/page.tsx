import ProjectPost from "@/app/components/ProjectPost";

const ReactProjects = () => {
    return (
        <div className="main-container">
            <h3 style={{ textAlign: 'center' }}>React Projects</h3>

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
                    liveLink="https://simple-calculator-project.herokuapp.com/calculator"
                    sourceLink="https://github.com/AymanJabr/React-Simple-Calculator"
                />

                <ProjectPost
                    title="Bookstore Library"
                    imageSrc="/images/bookstore.JPG"
                    imageAlt="Bookstore Library"
                    intro="React/Redux single-page app, that makes use of React Routing. In this project we created a simple bookstore app, with the ability to add books and to filter the available ones by category."
                    liveLink="https://project-bookstore-cms.herokuapp.com/"
                    sourceLink="https://github.com/AymanJabr/Bookstore-CMS"
                />
            </div>
        </div>
    );
};

export default ReactProjects; 