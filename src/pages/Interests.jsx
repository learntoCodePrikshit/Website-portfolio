import { Link } from "react-router-dom";
import "./App.css";
import backgroundVideo from "../V2.mp4";
import passportImage from "../IMAGES/Passport_Photograph.jpeg";
import "./interests.css"

function Interests() {

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


      <div className="table2" style={{ width: "100%", marginLeft: "20px" }}>
        <Link to="/">HOME</Link> |
        <Link to="/education"> EDUCATION </Link> |
        <Link to="/experience"> EXPERIENCE </Link> |
        <Link to="/activity"> ACTIVITY AND KNOWLEDGE </Link> |
        <Link to="/biodata"> BIODATA </Link> |
        <Link to="/interests"> INTERESTS AND HOBBIES </Link>
      </div>


      <p className="moving-paragraph" style={{ textAlign: "justify", marginLeft: "20px" }}>
        During my studies, bad time of Corona appeared. Mahabharat, Ramayan, Krishna and other religious matter were
        displayed on the TV.
        I watched all of them very keenly which developed interest in my mind to have thorough study on Teachings of
        Lord Krishna that is Gita and Bhagvatam.
        <mark> For that I joined Iskcon Youth Forum at Bhopal dedicatedly for 1 year </mark>.
        It gave a lot in kind of mental peace to me.
        My parents also allowed me to join this Holy act. During this period since I was fully isolated from
        mobile, TV, and rest of the world which gave slight disalignment
        from my studies which I resumed by
        <mark> joining Data Analysis Course </mark> to recollect my knowledge of Computer Science.
        <mark> Now I aspire to learn web development, AI and machine learning to join my real field of Computer Science.
        </mark>
        <br /><br />
        <mark> I am also preparing for competitive exams like Banking exams, Ralway Exams, Airport Authority of India Exams,UPSC Civil Services till my age allows. </mark>
      </p>
    </>
  );
}

export default Interests;