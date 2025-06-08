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

                <p style={{ marginTop: '5px', marginBottom: '40px', textAlign: 'center' }}>
                    You can email me at{' '}
                    <a className="email-special" href="mailto:aymanjaber2012@gmail.com">
                        aymanjaber2012@gmail.com
                    </a>{' '}
                    or directly fill the form below.
                </p>

                <form
                    id="contact-form"
                    action="https://formspree.io/f/mnqodyqa"
                    method="POST"
                >
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="form-name">Name</label>
                            <input
                                id="form-name"
                                className="input-field"
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="form-subject">Subject</label>
                            <input
                                id="form-subject"
                                className="input-field"
                                type="text"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="form-email">Email</label>
                        <input
                            id="form-email"
                            className="input-field"
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="form-message">Message</label>
                        <textarea
                            id="form-message"
                            className="input-field"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                        ></textarea>
                    </div>

                    <input id="submit-btn" type="submit" value="Send" />
                </form>
            </div>
        </section>
    );
};

export default ContactForm; 