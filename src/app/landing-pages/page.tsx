import Image from 'next/image';
import Link from 'next/link';

const LandingPages = () => {
    return (
        <main>
            <div className="nav-wrapper">
                <div className="dots-wrapper">
                    <div id="dot-1" className="browser-dot"></div>
                    <div id="dot-2" className="browser-dot"></div>
                    <div id="dot-3" className="browser-dot"></div>
                </div>

                <ul id="navigation">
                    <li>
                        <Link href="/">Go Back</Link>
                    </li>
                </ul>
            </div>

            <div className="main-container">
                <h3 style={{ textAlign: 'center' }}>Landing Pages</h3>

                <div className="post-wrapper">
                    <div>
                        <div className="post">
                            <Image className="thumbnail" src="/images/dog website.JPG" alt="Fur & Collar" width={400} height={200} />
                            <div className="post-preview">
                                <h6 className="post-title">Fur & Collar</h6>
                                <p className="post-intro">Landing page for an animal care house.</p>
                                <a className="live-link"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="https://aymanjabr-furncollar-landingpage.netlify.app/"
                                >See Live</a>
                                <a
                                    className="github-link"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="https://github.com/AymanJabr/FurNCollarLandingPage"
                                >See Source</a>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="post">
                            <Image
                                className="thumbnail"
                                src="/images/steackhouse website.JPG"
                                alt="Premium Steakhouse"
                                width={400}
                                height={200}
                            />
                            <div className="post-preview">
                                <h6 className="post-title">Premium Steakhouse</h6>
                                <p className="post-intro">
                                    Landing page for an authentic Steakhouse restaurant.
                                </p>
                                <a className="live-link"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="https://aymanjabr-steakhouse-landingpage.netlify.app/"
                                >See Live</a>
                                <a
                                    className="github-link"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="https://github.com/AymanJabr/SteakhouseLandingPage"
                                >See Source</a>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="post">
                            <Image className="thumbnail" src="/images/trumedis.JPG" alt="Trumedis" width={400} height={200} />
                            <div className="post-preview">
                                <h6 className="post-title">Directory of Hospitals</h6>
                                <p className="post-intro">
                                    Landing page for Trumedis, a USA based directory of hospitals.
                                </p>
                                <a className="live-link" target="_blank" rel="noopener noreferrer" href="https://trumedis.netlify.app/"
                                >See Live</a>
                                <a
                                    className="github-link"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="https://github.com/AymanJabr/Directory-of-Hospitals"
                                >See Source</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default LandingPages; 