import ProjectPost from "@/app/components/ProjectPost";

const RailsProjects = () => {
    return (
        <div className="main-container">
            <h3 style={{ textAlign: 'center' }}>Rails Projects</h3>

            <div className="post-wrapper">
                <ProjectPost
                    title="Social Media App"
                    imageSrc="/images/SocialMedia.JPG"
                    imageAlt="Social Media App"
                    intro="Rails implementation of a social media app, A user can create posts, other users can comment and like those posts, and users can become friends with each other in order to see each other's posts on their Timeline."
                    liveLink="https://simplesocialmediabackend.herokuapp.com/"
                    sourceLink="https://github.com/AymanJabr/Social-Media-Website-RubyOnRails"
                    fullHeight
                />

                <ProjectPost
                    title="Company Workhours Tracker"
                    imageSrc="/images/workhours.JPG"
                    imageAlt="Workhours Tracker"
                    intro="Rails website that lets you keep track of the workhours that have been put into a project. It shows who created the workhours, and it groups them by tasks. Users can see monthly reports of the project's progress."
                    liveLink="https://project-workhours.herokuapp.com/"
                    sourceLink="https://github.com/AymanJabr/Social-Media-Website-RubyOnRails"
                    fullHeight
                />
            </div>
        </div>
    );
};

export default RailsProjects; 