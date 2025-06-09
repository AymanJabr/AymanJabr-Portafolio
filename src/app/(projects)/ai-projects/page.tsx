import ProjectPost from "@/app/components/ProjectPost";

const AiProjects = () => {
    return (
        <div className="main-container">
            <h3 style={{ textAlign: "center" }}>AI Based Projects</h3>

            <div className="post-wrapper">
                <ProjectPost
                    title="AI-Pdf-Analyzer"
                    imageSrc="/images/pdf-analyzer.png"
                    imageAlt="AI-Pdf-Analyzer"
                    intro="A Next.js application that allows users to upload PDF documents, extract text using OCR, and ask natural language questions about the content using AI."
                    liveLink="https://ai-pdf-analyser.netlify.app/"
                    sourceLink="https://github.com/AymanJabr/AI-PDF-Analyser"
                />

                <ProjectPost
                    title="AI-Focus-Group"
                    imageSrc="/images/ai-focus-group.png"
                    imageAlt="AI-Focus-Group"
                    intro='An interactive tool that generates diverse synthetic customer personas with realistic demographics and opinions to "react" to your product ideas. It provides a cheap alternative to early-stage market research.'
                    liveLink="https://ai-focus-group.netlify.app/"
                    sourceLink="https://github.com/AymanJabr/AI-focus-group"
                />

                <ProjectPost
                    title="Dressed-by-AI"
                    imageSrc="/images/dressed-by-ai.png"
                    imageAlt="Dressed-by-AI"
                    intro="A virtual try-on application that uses AI to visualize how clothing items would look on you. Select from default models or upload your own photos, and get a realistic visualization of how clothing items would look on you."
                    liveLink="https://dressed-by-ai.netlify.app/"
                    sourceLink="https://github.com/AymanJabr/Dressed-by-AI"
                />

                <ProjectPost
                    title="hAI-lights-maker"
                    imageSrc="/images/hAI-lights-maker.png"
                    imageAlt="hAI-lights-maker"
                    intro="An AI-powered video highlight generator that automatically creates engaging clips from longer videos."
                    liveLink="https://hai-lights-maker.netlify.app/"
                    sourceLink="https://github.com/AymanJabr/hAI-lights-maker"
                />
            </div>
        </div>
    );
};

export default AiProjects; 