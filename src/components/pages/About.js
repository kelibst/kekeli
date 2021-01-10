import React from "react";
import Icofont from "react-icofont";
import "./About.scss";
const About = () => {
  return (
    <div className="about">
      <h1 className="about-header">About Me</h1>
      <div className="about-container">
        <div className="about-profile">
          <a
            href="https://zelda-fan-page.s3.amazonaws.com/keli_portfolio/images/passport4.jpg"
            className="about-pic"
          >
            <img
              className=" img-fluid b-shadow-a"
              alt="User passport picture"
              src="https://zelda-fan-page.s3.amazonaws.com/keli_portfolio/images/passport4.jpg"
            />
          </a>
          <div className="description">
            <h4 className="name">Kekeli Dogbevi Jiresse</h4>
            <h6 className="title">Full-Stack Software Developer</h6>
            <p className="content">
              After I was introduced to my first Linux distribution some years
              back, I developed a deep passion for software development and open
              source community. Since then, a day has not passed where I have
              failed to write some form of code. I look forward to bringing the
              same kind of fire to the right community. I am currently
              proficient in Ruby, Rails, HTML, CSS, JavaScript, and React.
            </p>

            <div className="btn-contents">
              <a href="#" className="btn btn-yellow">
                Download CV
              </a>
              <a href="#" className="btn btn-yellow hollow">
                Hire Me.
              </a>
            </div>
          </div>
        </div>
        <div className="about-exps">
          <div className="about-exp">
            <div className="about-card">
              <div className="about-card-icon">
                <Icofont icon="user" />
              </div>
              <div className="about-card-details">
                <h6 className="about-card-header">3 years experience</h6>
                <p className="card-desc">Completed</p>
              </div>
            </div>

            <div className="about-card">
              <div className="about-card-icon">
                <Icofont icon="user" />
              </div>
              <div className="about-card-details">
                <h6 className="about-card-header">3 years experience</h6>
                <p className="card-desc">Completed</p>
              </div>
            </div>

            <div className="about-card">
              <div className="about-card-icon">
                <Icofont icon="user" />
              </div>
              <div className="about-card-details">
                <h6 className="about-card-header">3 years experience</h6>
                <p className="card-desc">Completed</p>
              </div>
            </div>
          </div>
        </div>

        <div className="interest">
          <div className="about-card">
            <div className="about-card-icon">
              <Icofont icon="user" />
            </div>
            <div className="about-card-details">
              <h6 className="about-card-header">3 years experience</h6>
              <p className="card-desc">Completed</p>
            </div>
          </div>

          <div className="about-card">
            <div className="about-card-icon">
              <Icofont icon="user" />
            </div>
            <div className="about-card-details">
              <h6 className="about-card-header">3 years experience</h6>
              <p className="card-desc">Completed</p>
            </div>
          </div>

          <div className="about-card">
            <div className="about-card-icon">
              <Icofont icon="user" />
            </div>
            <div className="about-card-details">
              <h6 className="about-card-header">3 years experience</h6>
              <p className="card-desc">Completed</p>
            </div>
          </div>

          <div className="about-card">
            <div className="about-card-icon">
              <Icofont icon="user" />
            </div>
            <div className="about-card-details">
              <h6 className="about-card-header">3 years experience</h6>
              <p className="card-desc">Completed</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
