import React, { useState } from "react";
import "./App.css";
import { Link } from "react-router-dom";
import resumePdf from "../IMAGES/PRIKSHIT_RESUME_SEPT_2026.pdf";
import passportImage from "../IMAGES/Passport_Photograph.jpeg";
import carouselImage2 from "../IMAGES/im2.jpeg";
import carouselImage3 from "../IMAGES/im3.jpeg";
import carouselImage4 from "../IMAGES/im4.jpeg";
import carouselImage5 from "../IMAGES/im5.jpeg";
import carouselImage6 from "../IMAGES/im6.jpeg";
import carouselImage7 from "../IMAGES/im7.jpeg";
import carouselImage8 from "../IMAGES/im8.jpeg";
import carouselImage9 from "../IMAGES/im9.jpeg";
import carouselImage10 from "../IMAGES/im10.jpeg";
import carouselImage11 from "../IMAGES/im11.jpeg";
import carouselImage12 from "../IMAGES/im12.jpeg";
import backgroundVideo from "../V2.mp4";
import "./index1.css"


function Home() {
  const images = [
    carouselImage2,
    carouselImage3,
    carouselImage4,
    carouselImage5,
    carouselImage6,
    carouselImage7,
    carouselImage8,
    carouselImage9,
    carouselImage10,
    carouselImage11,
    carouselImage12,
  ];

  const [index, setIndex] = useState(0); // ✅ Hook used properly

  const openResume = () => {
    window.open(resumePdf, "_blank", "noopener,noreferrer");
  };

  function next() {
    setIndex((prevIndex) => (prevIndex + 1) % images.length);
  }

  function prev() {
    setIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  }

  return (
    <>
    <div className="maincont">


      <video autoPlay loop muted className="back-video">
        <source src={backgroundVideo} type="video/mp4" />
      </video>
      <div className="head wave-text">
        <span className="head1" style={{ textAlign: "center", color: "red" }}>
          P</span>
        <span className="head1" style={{ textAlign: "center", color: "orange" }}>
          R</span>
        <span className="head1" style={{ textAlign: "center", color: "yellow" }}>
          I</span>
        <span className="head1" style={{ textAlign: "center", color: "green" }}>
          K</span>
        <span className="head1" style={{ textAlign: "center", color: "blue" }}>
          S</span>
        <span className="head1" style={{ textAlign: "center", color: "indigo" }}>
          H</span>
        <span className="head1" style={{ textAlign: "center", color: "violet" }}>
          I</span>
        <span className="head1" style={{ textAlign: "center", color: "red" }}>
          T</span>
          <span className="head1" style={{ textAlign: "center", color: "white" }}>
          </span>
        <span className="head1" style={{ textAlign: "center", color: "orange" }}>
          S</span>
        <span className="head1" style={{ textAlign: "center", color: "yellow" }}>
          H</span>
        <span className="head1" style={{ textAlign: "center", color: "green" }}>
          A</span>
        <span className="head1" style={{ textAlign: "center", color: "blue" }}>
          R</span>
        <span className="head1" style={{ textAlign: "center", color: "indigo" }}>
          M</span>
        <span className="head1" style={{ textAlign: "center", color: "violet" }}>
          A</span>


      </div>

      <div style={{ marginLeft: "20px", display: "flex", alignItems: "center" }}>
        <img src={passportImage} width="100" height="100" alt="Passport Photograph" />
        <div className="typewrite" style={{ justifyContent: "center", alignItems: "center" }}>
          <strong>Aspire to be a full stack MERN Web Developer</strong>
        </div>
      </div>

      <div style={{ marginLeft: "20px", fontSize: "25px" }}>
        <Link to="/">HOME</Link> |
        <Link to="/education"> EDUCATION </Link> |
        <Link to="/experience"> EXPERIENCE </Link> |
        <Link to="/activity"> ACTIVITY AND KNOWLEDGE </Link> |
        <Link to="/biodata"> BIODATA </Link> |
        <Link to="/interests"> INTERESTS AND HOBBIES</Link>
      </div>

      <div className="container">
        <div className="carousel">
          

          <img
            src={images[index]}
            style={{ height: "800px", width: "600px", marginTop: "0px" }}
          />
          <button onClick={prev}>⬅ prev</button>
          <button onClick={next}>➡ next</button>
        </div>

        <div style={{ marginTop: "30px" }}>
          <p style={{ fontSize: "30px" }} className="fade-in-text">
            Check my resume PDF here:
            <button type="button" onClick={openResume} className="resume-button">
              Open Resume PDF
            </button>
          </p>
          <br />
          <p class="moving-paragraph">
            Hello, I have good knowledge in following areas:
            <br />

            Skills: <span className="rainbow-text">EXCEL, SQL, PYTHON, JAVA, POWER BI, HTML, CSS, JAVASCRIPT,
            MONGO DB, EXPRESS JS, REACT JS, NODE JS</span>

            <br />
            <br />
            <h2 className="bounce-text">About Me</h2>
            <br />
            <span className="glow-text">I am passionate about web development and enjoy building creative and responsive websites. I like exploring new technologies and improving my skills by working on practical projects. My goal is to continuously grow as a developer and create useful web applications.
            I help companies in making attractive, user engaging, user friendly and responsive websites.</span>
          </p>

          <Link to="/education">View more information</Link>
        </div>
      </div>



    </div>
    </>
  );
}

export default Home;