import React from "react";
import "./About.css";
import about from "../../assets/about.png";
import play_icon from "../../assets/play-icon.png";

const About = () => {
  return (
    <>
      <div className="about" id="about">
        <div className="about-left">
          <img src={about} alt="" className="about-img" />
          <img src={play_icon} alt="" className="play-img" />
        </div>
        <div className="about-right">
            <h3>ABOUT UNIVERSITY</h3>
            <h2>Nurturing Tomorrow's Leaders Today</h2>
            <p>Embark on a transformative educational journey with our universitys comprehensive education programs.our cutting-egde circulam is designed to enpower students.</p>
            <p>With a focus on innovation,hands on learning,and personalized mentorship,our programs prepare aspiring educators to makea meaningful impact.</p>
            <p>Whether you aspire to become a teacher,administrator,our diverse range of program  offer the perfect pathway to achieve your goals.</p>
        </div>
      </div>
    </>
  );
};

export default About;
