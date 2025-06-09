import Image from 'next/image';
import GitHubIcon from "@/app/components/GitHubIcon";
import ExternalLinkIcon from "@/app/components/ExternalLinkIcon";

const ClonePages = () => {
    return (
        <div className="main-container">
            <h3 style={{ textAlign: 'center' }}>Websites Clones</h3>

            <div className="post-wrapper">
                <div>
                    <div className="post">
                        <Image className="thumbnail" src="/images/newYorkTimes.JPG" alt="The New York Times Clone" width={400} height={200} />
                        <div className="post-preview">
                            <h6 className="post-title">The New York Times Clone</h6>
                            <p className="post-intro">
                                This website is a clone of a specific article of The New York
                                Times website. This was chosen as there is a large diversity in
                                content, styles, and designs throughout the page.
                            </p>
                            <a className="live-link"
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://nytimecloneforprojectone.netlify.app/"
                            >See Live<ExternalLinkIcon /></a>
                            <a
                                className="github-link"
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://github.com/AymanJabr/Project-1-NY-Times"
                            >See Source<GitHubIcon /></a>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="post">
                        <Image className="thumbnail" src="/images/newsweek.JPG" alt="NewsWeek Clone" width={400} height={200} />
                        <div className="post-preview">
                            <h6 className="post-title">NewsWeek Clone</h6>
                            <p className="post-intro">
                                A clone of NewsWeek website. This website was selected because
                                of the complexity of implementing its responsive design, as
                                some elements of the page disappear when changing the size of
                                the page, while others switch places.
                            </p>
                            <a className="live-link"
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://microverse-newsweekclone.netlify.app/"
                            >See Live<ExternalLinkIcon /></a>
                            <a
                                className="github-link"
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://github.com/AymanJabr/New-week-clone"
                            >See Source<GitHubIcon /></a>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="post">
                        <Image className="thumbnail" src="/images/theNextWeb.JPG" alt="The Next Web Clone" width={400} height={200} />
                        <div className="post-preview">
                            <h6 className="post-title">The Next Web Clone</h6>
                            <p className="post-intro">
                                A clone of The Next Web (TNW) landing page.
                            </p>
                            <a className="live-link"
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://microverse-tnw-clone.netlify.app/"
                            >See Live<ExternalLinkIcon /></a>
                            <a
                                className="github-link"
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://github.com/AymanJabr/Microverse-TNW-Clone"
                            >See Source<GitHubIcon /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClonePages; 