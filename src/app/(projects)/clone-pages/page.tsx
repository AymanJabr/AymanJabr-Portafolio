import ProjectPost from "@/app/components/ProjectPost";

const ClonePages = () => {
    return (
        <div className="main-container">
            <h3 style={{ textAlign: 'center' }}>Websites Clones</h3>

            <div className="post-wrapper">
                <ProjectPost
                    title="The New York Times Clone"
                    imageSrc="/images/newYorkTimes.JPG"
                    imageAlt="The New York Times Clone"
                    intro="This website is a clone of a specific article of The New York Times website. This was chosen as there is a large diversity in content, styles, and designs throughout the page."
                    liveLink="https://nytimecloneforprojectone.netlify.app/"
                    sourceLink="https://github.com/AymanJabr/Project-1-NY-Times"
                />
                <ProjectPost
                    title="NewsWeek Clone"
                    imageSrc="/images/newsweek.JPG"
                    imageAlt="NewsWeek Clone"
                    intro="A clone of NewsWeek website. This website was selected because of the complexity of implementing its responsive design, as some elements of the page disappear when changing the size of the page, while others switch places."
                    liveLink="https://microverse-newsweekclone.netlify.app/"
                    sourceLink="https://github.com/AymanJabr/New-week-clone"
                />
                <ProjectPost
                    title="The Next Web Clone"
                    imageSrc="/images/theNextWeb.JPG"
                    imageAlt="The Next Web Clone"
                    intro="A clone of The Next Web (TNW) landing page."
                    liveLink="https://microverse-tnw-clone.netlify.app/"
                    sourceLink="https://github.com/AymanJabr/Microverse-TNW-Clone"
                />
            </div>
        </div>
    );
};

export default ClonePages; 