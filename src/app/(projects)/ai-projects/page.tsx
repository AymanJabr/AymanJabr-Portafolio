import Image from "next/image";
import GitHubIcon from "@/app/components/GitHubIcon";
import ExternalLinkIcon from "@/app/components/ExternalLinkIcon";

const AiProjects = () => {
    return (
        <div className="main-container">
            <h3 style={{ textAlign: "center" }}>AI Based Projects</h3>

            <div className="post-wrapper">
                <div>
                    <div className="post">
                        <Image
                            className="thumbnail"
                            src="/images/pdf-analyzer.png"
                            alt="AI-Pdf-Analyzer"
                            width={400}
                            height={200}
                        />
                        <div className="post-preview">
                            <h6 className="post-title">AI-Pdf-Analyzer</h6>
                            <p className="post-intro">
                                A Next.js application that allows users to upload PDF
                                documents, extract text using OCR, and ask natural language
                                questions about the content using AI.
                            </p>
                            <a
                                className="live-link"
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://ai-pdf-analyser.netlify.app/"
                            >
                                See Live
                                <ExternalLinkIcon />
                            </a>
                            <a
                                className="github-link"
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://github.com/AymanJabr/AI-PDF-Analyser"
                            >
                                See Source
                                <GitHubIcon />
                            </a>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="post">
                        <Image
                            className="thumbnail"
                            src="/images/ai-focus-group.png"
                            alt="AI-Focus-Group"
                            width={400}
                            height={200}
                        />
                        <div className="post-preview">
                            <h6 className="post-title">AI-Focus-Group</h6>
                            <p className="post-intro">
                                An interactive tool that generates diverse synthetic customer
                                personas with realistic demographics and opinions to "react" to
                                your product ideas. It provides a cheap alternative to
                                early-stage market research.
                            </p>
                            <a
                                className="live-link"
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://ai-focus-group.netlify.app/"
                            >
                                See Live
                                <ExternalLinkIcon />
                            </a>
                            <a
                                className="github-link"
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://github.com/AymanJabr/AI-focus-group"
                            >
                                See Source
                                <GitHubIcon />
                            </a>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="post">
                        <Image
                            className="thumbnail"
                            src="/images/dressed-by-ai.png"
                            alt="Dressed-by-AI"
                            width={400}
                            height={200}
                        />
                        <div className="post-preview">
                            <h6 className="post-title">Dressed-by-AI</h6>
                            <p className="post-intro">
                                A virtual try-on application that uses AI to visualize how
                                clothing items would look on you. Select from default models or
                                upload your own photos, and get a realistic visualization of how
                                clothing items would look on you.
                            </p>
                            <a
                                className="live-link"
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://dressed-by-ai.netlify.app/"
                            >
                                See Live
                                <ExternalLinkIcon />
                            </a>
                            <a
                                className="github-link"
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://github.com/AymanJabr/Dressed-by-AI"
                            >
                                See Source
                                <GitHubIcon />
                            </a>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="post">
                        <Image
                            className="thumbnail"
                            src="/images/hAI-lights-maker.png"
                            alt="hAI-lights-maker"
                            width={400}
                            height={200}
                        />
                        <div className="post-preview">
                            <h6 className="post-title">hAI-lights-maker</h6>
                            <p className="post-intro">
                                An AI-powered video highlight generator that automatically
                                creates engaging clips from longer videos.
                            </p>
                            <a
                                className="live-link"
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://hai-lights-maker.netlify.app/"
                            >
                                See Live
                                <ExternalLinkIcon />
                            </a>
                            <a
                                className="github-link"
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://github.com/AymanJabr/hAI-lights-maker"
                            >
                                See Source
                                <GitHubIcon />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AiProjects; 