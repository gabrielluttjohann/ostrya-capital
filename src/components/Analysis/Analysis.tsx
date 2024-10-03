import React from "react";
import styles from "@/components/Analysis/Analysis.module.css";

const About: React.FC = () => {
  return (
    <div className={`container-xxl ${styles.about} my-5`}>
      <div className="container">
        <div className="row g-0">
          <div className="col-lg-6">
            <div
              className="h-100 d-flex align-items-center justify-content-center"
              style={{ minHeight: "300px" }}
            >
              <ButtonPlay videoSrc="https://www.youtube.com/embed/DWRcNpR6Kdc" />
            </div>
          </div>
          <div className="col-lg-6 pt-lg-5 wow fadeIn" data-wow-delay="0.5s">
            <div className="bg-white rounded-top p-5 mt-lg-5">
              <p className="fs-5 fw-medium text-primary">About Us</p>
              <h1 className="display-6 mb-4">
                The Best Marketing Agency to Improve Your Business
              </h1>
              <p className="mb-4">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
                sed stet lorem sit clita duo justo.
              </p>
              <div className="row g-5 pt-2 mb-5">
                <ServiceCard
                  imgSrc="img/icon/icon-5.png"
                  title="Managed Services"
                  description="Clita erat ipsum et lorem et sit sed stet lorem"
                />
                <ServiceCard
                  imgSrc="img/icon/icon-2.png"
                  title="Dedicated Experts"
                  description="Clita erat ipsum et lorem et sit sed stet lorem"
                />
              </div>
              <a className="btn btn-primary rounded-pill py-3 px-5" href="">
                Explore More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ButtonPlay: React.FC<{ videoSrc: string }> = ({ videoSrc }) => {
  return (
    <button
      type="button"
      className={styles.btnPlay}
      data-bs-toggle="modal"
      data-src={videoSrc}
      data-bs-target="#videoModal"
    >
      <span></span>
    </button>
  );
};

const ServiceCard: React.FC<{
  imgSrc: string;
  title: string;
  description: string;
}> = ({ imgSrc, title, description }) => {
  return (
    <div className="col-sm-6">
      <img className="img-fluid mb-4" src={imgSrc} alt={title} />
      <h5 className="mb-3">{title}</h5>
      <span>{description}</span>
    </div>
  );
};

export default About;
