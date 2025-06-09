import {
    Body,
    Container,
    Head,
    Heading,
    Html,
    Preview,
    Text,
} from "@react-email/components";
import React from "react";

interface ContactFormEmailProps {
    name: string;
    email: string;
    subject: string;
    message: string;
}

const ContactFormEmail = ({
    name,
    email,
    subject,
    message,
}: ContactFormEmailProps) => {
    return (
        <Html>
            <Head />
            <Preview>New message from your portfolio site</Preview>
            <Body style={main}>
                <Container style={container}>
                    <Heading style={heading}>New Message: {subject}</Heading>
                    <Text style={paragraph}>
                        You received the following message from {name} ({email}):
                    </Text>
                    <Text style={messageBox}>{message}</Text>
                </Container>
            </Body>
        </Html>
    );
};

export default ContactFormEmail;

const main = {
    backgroundColor: "#f6f9fc",
    fontFamily:
        '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
    backgroundColor: "#ffffff",
    margin: "0 auto",
    padding: "20px 0 48px",
    marginBottom: "64px",
};

const heading = {
    fontSize: "28px",
    fontWeight: "bold",
    marginTop: "48px",
    textAlign: "center" as const,
};

const paragraph = {
    fontSize: "16px",
    lineHeight: "24px",
    textAlign: "left" as const,
    padding: "0 20px",
};

const messageBox = {
    ...paragraph,
    border: "1px solid #e0e0e0",
    borderRadius: "5px",
    padding: "20px",
    margin: "0 20px",
    whiteSpace: "pre-wrap" as const,
}; 