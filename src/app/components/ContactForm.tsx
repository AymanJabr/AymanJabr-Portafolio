'use client';

import { useState } from 'react';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        subject: '',
        email: '',
        message: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <section className="s2">
            <div className="main-container">
                <h3 style={{ textAlign: 'center' }}>Get In Touch</h3>

                <form
                    id="contact-form"
                    action="https://formspree.io/f/mnqodyqa"
                    method="POST"
                >
                    <label>Name</label>
                    <input
                        className="input-field"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                    />

                    <label>Subject</label>
                    <input
                        className="input-field"
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                    />

                    <label>Email</label>
                    <input
                        className="input-field"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />

                    <label>Message</label>
                    <textarea
                        className="input-field"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                    ></textarea>

                    <input id="submit-btn" type="submit" value="Send" />
                </form>
            </div>
        </section>
    );
};

export default ContactForm; 