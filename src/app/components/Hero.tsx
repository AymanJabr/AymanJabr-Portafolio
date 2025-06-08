import Image from 'next/image';
import ThemeSwitcher from './ThemeSwitcher';

const Hero = () => {
    return (
        <section className="s1">
            <div className="main-container">
                <div className="greeting-wrapper">
                    <h1>Hi, I am Ayman Jabr</h1>
                </div>

                <div className="intro-wrapper">
                    <div className="nav-wrapper">
                        <div className="dots-wrapper">
                            <div id="dot-1" className="browser-dot"></div>
                            <div id="dot-2" className="browser-dot"></div>
                            <div id="dot-3" className="browser-dot"></div>
                        </div>

                        <ul id="navigation">
                            <li><a href="#contact-form">Contact</a></li>
                        </ul>
                    </div>
                    <div className="left-column">
                        <Image id="profile_pic" src="/images/me.jpg" alt="Ayman Jabr" width={250} height={250} />

                        <h5 style={{ textAlign: 'center', lineHeight: 0 }}>
                            Click on a ball below to Personalize Theme
                        </h5>

                        <ThemeSwitcher />

                        <p id="settings-note">
                            *Theme settings will be saved for <br />
                            your next visit
                        </p>
                    </div>

                    <div className="right-column">
                        <div className="preview-shadow">
                            <div id="preview">
                                <div id="corner-tl" className="corner"></div>
                                <div id="corner-tr" className="corner"></div>
                                <h3>What Do I Do?</h3>
                                <p>
                                    I design, develop, and deploy beautiful and modern websites,
                                    and Android applications.
                                </p>
                                <div id="corner-br" className="corner"></div>
                                <div id="corner-bl" className="corner"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero; 