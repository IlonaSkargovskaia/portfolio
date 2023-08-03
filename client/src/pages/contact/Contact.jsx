import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

import {
    FaEnvelopeOpen,
    FaPhoneSquareAlt,
    FaFacebookF,
    FaLinkedin,
    FaGithub,
} from "react-icons/fa";

import { FiSend } from "react-icons/fi";

import "./contact.css";

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_bdrdtox",
                "template_rhiht5f",
                form.current,
                "SzyWICKloGCIr2gpT"
            )
            .then(
                (result) => {
                    console.log(result.text);
                    alert("message sent");
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };

    return (
        <section className="contact section">
            <h2 className="section__title">
                Get In <span>Touch</span>
            </h2>

            <div className="contact__container container grid">
                <div className="contact__data">
                    <h3 className="contact__title">Feel free</h3>

                    <p className="contact__description">
                        to get in touch with me. I'm always open to discussing
                        new projects and opportunitioes to be part of your team.
                    </p>

                    <div className="contact__info">
                        <div className="info__item">
                            <FaEnvelopeOpen className="info__icon" />

                            <div>
                                <span className="info__title">Text me</span>
                                <h4 className="info__desc">
                                    ilona.skars@gmail.com
                                </h4>
                            </div>
                        </div>

                        <div className="info__item">
                            <FaPhoneSquareAlt className="info__icon" />

                            <div>
                                <span className="info__title">Call me</span>
                                <h4 className="info__desc">
                                    +972 534-762486
                                </h4>
                            </div>
                        </div>
                    </div>

                    <div className="contact__socials">
                        <a
                            href="https://www.facebook.com/ilonaskars/"
                            className="contact__social-link"
                        >
                            <FaFacebookF />
                        </a>
                        <a
                            href="https://github.com/IlonaSkargovskaia"
                            className="contact__social-link"
                        >
                            <FaGithub />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/ilona-skargovskaya/"
                            className="contact__social-link"
                        >
                            <FaLinkedin />
                        </a>
                    </div>
                </div>

                <div>
                    <form
                        ref={form}
                        onSubmit={sendEmail}
                        className="contact__form"
                    >
                        <div className="form__input-group">
                            <div className="form__input-div">
                                
                                <input
                                    type="text"
                                    name="user_name"
                                    className="form__control"
                                    placeholder="Your name..."
                                    required
                                />
                            </div>

                            <div className="form__input-div">
                                
                                <input
                                    type="email"
                                    name="user_email"
                                    className="form__control"
                                    placeholder="Your email..."
                                    required
                                />
                            </div>

                           
                        </div>

                        <div className="form__input-div">
                                
                                <textarea
                                    name="message"
                                    className="form__control textarea"
                                    placeholder="Message..."
                                    required
                                />
                        </div>

                        <button type="submit" value="Send" className="button">
                            Send Message
                            <span className="button__icon contact__button-icon">
                                <FiSend />
                            </span>
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
