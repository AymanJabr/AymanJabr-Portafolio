import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import ContactFormEmail from "@/app/components/ContactFormEmail";
import * as z from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

const contactFormSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters."),
    subject: z.string().min(2, "Subject must be at least 2 characters."),
    email: z.string().email("Invalid email address."),
    message: z.string().min(10, "Message must be at least 10 characters."),
});

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const parsed = contactFormSchema.safeParse(body);

        if (!parsed.success) {
            const errorMessages = parsed.error.issues.map((issue) => issue.message);
            return NextResponse.json(
                { message: "Invalid input", errors: errorMessages },
                { status: 400 }
            );
        }

        const { name, email, subject, message } = parsed.data;

        const { data, error } = await resend.emails.send({
            from: "Portfolio CV Email <onboarding@resend.dev>",
            to: ["aymanjaber2012@gmail.com"],
            subject: `New Portfolio Message: ${subject}`,
            react: ContactFormEmail({ name, email, subject, message }),
        });

        if (error) {
            console.error("Resend error:", error);
            return NextResponse.json({ message: "Error sending email", error }, { status: 500 });
        }

        return NextResponse.json({ message: "Email sent successfully", data });
    } catch (error) {
        console.error("API error:", error);
        return NextResponse.json({ message: "An unexpected error occurred." }, { status: 500 });
    }
} 