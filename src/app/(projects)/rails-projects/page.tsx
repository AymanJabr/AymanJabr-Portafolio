import Image from 'next/image';
import GitHubIcon from "@/app/components/GitHubIcon";
import ExternalLinkIcon from "@/app/components/ExternalLinkIcon";

const RailsProjects = () => {
    return (
        <div className="main-container">
            <h3 style={{ textAlign: 'center' }}>Rails Projects</h3>

            <div className="post-wrapper">
                <div>
                    <div className="post" style={{ height: '100%' }}>
                        <Image className="thumbnail" src="/images/SocialMedia.JPG" alt="Social Media App" width={400} height={200} />
                        <div className="post-preview">
                            <h6 className="post-title">Social Media App</h6>
                            <p className="post-intro">
                                Rails implementation of a social media app, A user can create posts, other users can comment and like those posts, and users can become friends with each other in order to see each other's posts on their Timeline.
                            </p>
                            <a className="live-link" target="_blank" rel="noopener noreferrer" href="https://simplesocialmediabackend.herokuapp.com/">See Live<ExternalLinkIcon /></a>
                            <a className="github-link" target="_blank" rel="noopener noreferrer" href="https://github.com/AymanJabr/Social-Media-Website-RubyOnRails">See Source<GitHubIcon /></a>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="post" style={{ height: '100%' }}>
                        <Image className="thumbnail" src="/images/workhours.JPG" alt="Workhours Tracker" width={400} height={200} />
                        <div className="post-preview">
                            <h6 className="post-title">Company Workhours Tracker</h6>
                            <p className="post-intro">
                                Rails website that lets you keep track of the workhours that have been put into a project. It shows who created the workhours, and it groups them by tasks. Users can see monthly reports of the project's progress.
                            </p>
                            <a className="live-link" target="_blank" rel="noopener noreferrer" href="https://project-workhours.herokuapp.com/">See Live<ExternalLinkIcon /></a>
                            <a className="github-link" target="_blank" rel="noopener noreferrer" href="https://github.com/AymanJabr/Social-Media-Website-RubyOnRails">See Source<GitHubIcon /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RailsProjects; 