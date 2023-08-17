import React from "react";
import { portfolio } from "../../data";
import "./portfolio.css";
import { Link } from "react-router-dom";
import { FaGithub, FaLaptopCode } from "react-icons/fa";
// import "~react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";


const Portfolio = () => {
    return (
        <section className="portfolio section">
            <h2 className="section__title">
                My <span> Projects </span>
            </h2>

            <div className="portfolio__container container">
                {portfolio.map((item) => (
                    <div key={item.id} className="card">
                        <div className="row">
                            <div className="col-4">
                                {/* <img
                                    src={item.image}
                                    alt={item.title}
                                    className="card-img"
                                /> */}
                                <ImageGallery items={item.gallery || []}/> 
                            </div>
                            <div className="col-8">
                                <div className="card-body">
                                    <Link to={item.link} target="_blank">
                                        <h2 className="card-title">
                                            {item.title}
                                        </h2>
                                    </Link>
                                    <p className="card-text">
                                        {item.description}
                                    </p>
                                    <div className="card-links">
                                        <Link to={item.gh} target="_blank">
                                            <FaGithub />
                                            GitHub
                                        </Link>
                                        <Link to={item.link} target="_blank">
                                            <FaLaptopCode /> Demo
                                        </Link>
                                    </div>
                                    <div className="card-languages">
                                        {item.languages.map((lang, index) => (
                                            <span
                                                key={index}
                                                className="button lang_btn"
                                            >
                                                {lang}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* <div className="portfolio__container container grid">
          {portfolio.map((item) => {
              return (
                <PortfolioItem key={item.id} {...item} /> 
              )
          })}
      </div> */}
        </section>
    );
};

export default Portfolio;
