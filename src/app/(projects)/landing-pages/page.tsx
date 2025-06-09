import ProjectPost from "@/app/components/ProjectPost";

const LandingPages = () => {
    return (
        <div className="main-container">
            <h3 style={{ textAlign: 'center' }}>Landing Pages</h3>

            <div className="post-wrapper">
                <ProjectPost
                    title="Fur & Collar"
                    imageSrc="/images/dog website.JPG"
                    imageAlt="Fur & Collar"
                    intro="Landing page for an animal care house."
                    liveLink="https://aymanjabr-furncollar-landingpage.netlify.app/"
                    sourceLink="https://github.com/AymanJabr/FurNCollarLandingPage"
                />

                <ProjectPost
                    title="Premium Steakhouse"
                    imageSrc="/images/steackhouse website.JPG"
                    imageAlt="Premium Steakhouse"
                    intro="Landing page for an authentic Steakhouse restaurant."
                    liveLink="https://aymanjabr-steakhouse-landingpage.netlify.app/"
                    sourceLink="https://github.com/AymanJabr/SteakhouseLandingPage"
                />

                <ProjectPost
                    title="Directory of Hospitals"
                    imageSrc="/images/trumedis.JPG"
                    imageAlt="Trumedis"
                    intro="Landing page for Trumedis, a USA based directory of hospitals."
                    liveLink="https://trumedis.netlify.app/"
                    sourceLink="https://github.com/AymanJabr/Directory-of-Hospitals"
                />
            </div>
        </div>
    );
};

export default LandingPages; 