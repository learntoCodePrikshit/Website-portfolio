import { Link } from "react-router-dom";
import "./App.css";
import "./education.css"
import backgroundVideo from "../V2.mp4";
import passportImage from "../IMAGES/Passport_Photograph.jpeg";
import graduationCert from "../IMAGES/VIT_DEGREE_CERTIFICATE_ORIGINAL.pdf";
import class12Result from "../IMAGES/12_TH_CLASS_MARKS_STATEMENT.pdf";
import class10Result from "../IMAGES/10_TH_CLASS_GRADE_SHEET_CUM_CERTIFICATE_OF_PERFORMANCE.pdf";

function Education() {
  const openGraduationCert = () => {
    window.open(graduationCert, "_blank", "noopener,noreferrer");
  };

  const openClass12Result = () => {
    window.open(class12Result, "_blank", "noopener,noreferrer");
  };

  const openClass10Result = () => {
    window.open(class10Result, "_blank", "noopener,noreferrer");
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
        <Link to="/"> HOME </Link> |
        <Link to="/education"> EDUCATION </Link> |
        <Link to="/experience"> EXPERIENCE </Link> |
        <Link to="/activity"> ACTIVITY AND KNOWLEDGE </Link> |
        <Link to="/biodata"> BIODATA </Link> |
        <Link to="/interests"> INTERESTS AND HOBBIES </Link>
      </div>


      <p
        className="para moving-paragraph slide-right-text"
        style={{ textAlign: "justify", marginLeft: "30px", marginRight: "30px" }}
      >
        <br />
        I got <mark> 84 percentile</mark> in JEE MAINS 2018.
        <br />
        <br />
        I have graduated from VELLORE INSTITUTE OF TECHNOLOGY, VELLORE, TAMIL
        NADU in 2024. <br />
        I have done B. TECH in Computer Science and Engineering.{" "}
        <mark className="glow-text">My aggregate CGPA was 6.67</mark> <br />
        <br />
        I have completed my <mark>class 12th CBSE board exams in 2019</mark>{" "}
        with subjects Physics, Chemistry and Mathematics with{" "}
        <mark>aggregate percentage of 67</mark> <br />
        <br />
        I have completed my <mark>class 10th CBSE board exams in 2017</mark>{" "}
        with <mark>CGPA of 10</mark>. <br />
        <br />
        My Aim was to enter in Defense. My father has been in defense as an engineer.
        My sister is in Air Force as commissioned officer and my sister's husband is
        also in Air Force as commissioned officer.

        Having defense atmosphere around me I was also anxious to join Defense,
        particularly Air Force as Computer Science Engineer. I have appeared 3 times
        in AFCAT written examination. Qualified the exam in August 2025.

        Appeared in SSB at Gandhinagar. Cleared 2 levels that is OIR and PPDT but got
        stuck at document verification stage.

        Now I am touching 25 years of age and my eligibility for Air Force is over.
        To update myself I have joined MERN stack course and will also learn AI.

        <br /><br />

        Earlier I used to speak lies, but now I prefer truth or silence.
      </p>


      <div className="moving-paragraph" style={{ marginLeft: "30px" }}>
        <br />
        Now My Graduation result is as follows:
        <br />
        <button type="button" onClick={openGraduationCert}>
          Click here to find Graduation details
        </button>

        <br /><br />

        My Class 12th result is as follows:
        <br />
        <button type="button" onClick={openClass12Result}>
          Click here to find class 12th result
        </button>

        <br /><br />

        My Class 10th result is as follows:
        <br />
        <button type="button" onClick={openClass10Result}>
          Click here to find class 10th result
        </button>
      </div>
    </>
  );
}
export default Education;