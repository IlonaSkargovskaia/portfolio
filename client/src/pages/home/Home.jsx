import React from "react";
import Profile from "../../assets/home.jpg";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { FaDownload, FaFacebookF, FaLinkedin, FaGithub } from "react-icons/fa";
import CV from "../../assets/Ilona-CV.pdf";

import "./home.css";

const Home = () => {
    return (
        <section className="home section grid">
            <img src={Profile} alt="" className="home__img" />

            <div className="home__content">
                <div className="home__data">
                    <h1 className="home__title">
                        <span>I'm Ilona Skargovskaia.</span> Full Stack
                        developer
                    </h1>

                    <p className="home__description">
                        Qualified and professional developer with 5 years of
                        experience in designing and laying out websites. I also
                        have a background in JavaScript, Node.js, React.js
                        enabling me to create dynamic and interactive web
                        experiences.
                    </p>

                    <Link to="/about" className="button">
                        More about me{" "}
                        <span className="button__icon">
                            <FaArrowRight />
                        </span>
                    </Link>
                    <a
                        href={CV}
                        download=""
                        className="button"
                        style={{ marginLeft: "20px" }}
                    >
                        Download CV{" "}
                        <span className="button__icon">
                            <FaDownload />
                        </span>
                    </a>

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
            </div>

            <div className="color__block"></div>
        </section>
    );
};

export default Home;
