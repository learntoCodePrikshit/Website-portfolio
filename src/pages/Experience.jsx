import { Link } from "react-router-dom";
import "./App.css";
import backgroundVideo from "../V2.mp4";
import passportImage from "../IMAGES/Passport_Photograph.jpeg";
import internshipPdf from "../IMAGES/INTERNSHIP.pdf";
import "./experience.css"

function Experience() {
  const openInternshipDoc = () => {
    window.open(internshipPdf, "_blank", "noopener,noreferrer");
  };

  return (
    <>
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


      <video autoPlay loop muted className="back-video">
        <source src={backgroundVideo} type="video/mp4" />
      </video>


      <table className="intro-table">
        <tbody>
          <tr>
            <td className="photo-cell">
              <img
                src={passportImage}
                alt="PRIKSHIT"
                className="passport-image"
              />
            </td>

            <td className="aspire-cell">
              <div className="typewrite aspire-text">
                <strong>
                  Aspire to be a full stack MERN Web Developer
                </strong>
              </div>
            </td>
          </tr>
        </tbody>
      </table>


      <div className="table2" style={{ marginLeft: "20px" }}>
        <Link to="/">HOME</Link> |
        <Link to="/education"> EDUCATION </Link> |
        <Link to="/experience"> EXPERIENCE </Link> |
        <Link to="/activity"> ACTIVITY AND KNOWLEDGE </Link> |
        <Link to="/biodata"> BIODATA </Link> |
        <Link to="/interests"> INTERESTS AND HOBBIES </Link>
      </div>


      <p className="moving-paragraph slide-left-text" style={{ marginLeft: "20px" }}>
        I have worked in CIS IT Solutions for 1 month as Application Developer.
        <br />
        Here is document link:
        <br />
        <button type="button" onClick={openInternshipDoc}>
          Click
        </button>
      </p>
    </>
  );
}

export default Experience;