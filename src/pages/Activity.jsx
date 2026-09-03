import { Link } from "react-router-dom";
import "./App.css";
import backgroundVideo from "../V2.mp4";
import passportImage from "../IMAGES/Passport_Photograph.jpeg";
import androidApp from "../IMAGES/Androidapp.png";
import photosLibrary from "../IMAGES/photoslibrary.pdf";
import databaseProject from "../IMAGES/DATABASE MANAGEMENT PROJECT.pdf";
import "./activity.css"
function Activity() {
  const openAndroidApp = () => {
    window.open(androidApp, "_blank", "noopener,noreferrer");
  };

  const openPhotosLibrary = () => {
    window.open(photosLibrary, "_blank", "noopener,noreferrer");
  };

  const openDatabaseProject = () => {
    window.open(databaseProject, "_blank", "noopener,noreferrer");
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


      <p className="moving-paragraph slide-right-text" style={{ marginLeft: "20px" }}>
        <br />
        I have participated in many school debate competitions, which helped me
        develop strong communication skills.
        <br /><br />
        <h3>Responsibility role</h3>
        I was a member of ABC technical club of college. I developed an Android
        project as a member of the club:
        <br /><br />

        <strong>Android Development:</strong>
        <br />
        <button type="button" onClick={openAndroidApp} className="elastic-text">
          Click here
        </button>
        <br />
        In this app, the user thinks of a number, then a random number is
        generated, and it tells after how many trials the guessed number appears.
        <br /><br />

        <strong>Library Management:</strong>
        <br />
        <button type="button" onClick={openPhotosLibrary}>
          Click here
        </button>
        <br />
        I developed a library management system using SQL and Visual Studio. It
        was a DBMS project.
        <br /><br />

        View full document:
        <br />
        <button type="button" onClick={openDatabaseProject}>
          Click here
        </button>
      </p>
    </>
  );
}

export default Activity;