"use client";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";

const contactFormSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters."),
    subject: z.string().min(2, "Subject must be at least 2 characters."),
    email: z.string().email("Please enter a valid email."),
    message: z.string().min(10, "Message must be at least 10 characters."),
});

type ContactFormInputs = z.infer<typeof contactFormSchema>;

const ContactForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
    } = useForm<ContactFormInputs>({
        resolver: zodResolver(contactFormSchema),
    });

    const onSubmit: SubmitHandler<ContactFormInputs> = async (data) => {
        try {
            const response = await fetch("/api/send", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                toast.success("Thank you! Your message has been sent.");
                reset();
            } else {
                const result = await response.json();
                toast.error(
                    result.message || "An error occurred. Please try again."
                );
            }
        } catch (error) {
            toast.error(`An error occurred. Please try again. Error: ${error}`);
        }
    };

    return (
        <section className="s2">
            <div className="main-container">
                <h3 style={{ textAlign: "center" }}>Get In Touch</h3>
                <p style={{ marginTop: "5px", marginBottom: "40px", textAlign: "center" }}>
                    You can email me at{" "}
                    <a className="email-special" href="mailto:aymanjaber2012@gmail.com">
                        aymanjaber2012@gmail.com
                    </a>{" "}
                    or directly fill the form below.
                </p>

                <form id="contact-form" onSubmit={handleSubmit(onSubmit)} noValidate>
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                                id="name"
                                type="text"
                                className="input-field"
                                {...register("name")}
                            />
                            {errors.name && <p className="error-message">{errors.name.message}</p>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="subject">Subject</label>
                            <input
                                id="subject"
                                type="text"
                                className="input-field"
                                {...register("subject")}
                            />
                            {errors.subject && (
                                <p className="error-message">{errors.subject.message}</p>
                            )}
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            id="email"
                            type="email"
                            className="input-field"
                            {...register("email")}
                        />
                        {errors.email && <p className="error-message">{errors.email.message}</p>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            className="input-field"
                            {...register("message")}
                        ></textarea>
                        {errors.message && (
                            <p className="error-message">{errors.message.message}</p>
                        )}
                    </div>

                    <button id="submit-btn" type="submit" disabled={isSubmitting}>
                        {isSubmitting ? "Sending..." : "Send Message"}
                    </button>
                </form>
            </div>
        </section>
    );
};

export default ContactForm; 