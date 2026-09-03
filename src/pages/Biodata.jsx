import { useState } from "react";
import { Link } from "react-router-dom";
import "./App.css";
import backgroundVideo from "../V2.mp4";
import passportImage from "../IMAGES/Passport_Photograph.jpeg";
import "./biodata.css";

function Biodata() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSubmitting(true);
    setStatus("Sending message...");

    try {
      /*
        IMPORTANT:
        VITE_API_URL must contain your LIVE BACKEND URL.

        Example:
        VITE_API_URL=https://api.prikshitcsengineer.com

        Then this request becomes:
        https://api.prikshitcsengineer.com/api/contact
      */

      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/contact`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      console.log("Backend response:", data);

      if (response.ok) {
        setStatus(
          "Message sent successfully! Thank you for contacting me."
        );

        setFormData({
          name: "",
          email: "",
          mobile: "",
          message: "",
        });
      } else {
        setStatus(
          data.message ||
            "Unable to send message. Please try again."
        );
      }
    } catch (error) {
      console.error("Contact submission error:", error);

      setStatus(
        "Unable to send message. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className="head wave-text">
        <span
          className="head1"
          style={{ textAlign: "center", color: "red" }}
        >
          P
        </span>

        <span
          className="head1"
          style={{ textAlign: "center", color: "orange" }}
        >
          R
        </span>

        <span
          className="head1"
          style={{ textAlign: "center", color: "yellow" }}
        >
          I
        </span>

        <span
          className="head1"
          style={{ textAlign: "center", color: "green" }}
        >
          K
        </span>

        <span
          className="head1"
          style={{ textAlign: "center", color: "blue" }}
        >
          S
        </span>

        <span
          className="head1"
          style={{ textAlign: "center", color: "indigo" }}
        >
          H
        </span>

        <span
          className="head1"
          style={{ textAlign: "center", color: "violet" }}
        >
          I
        </span>

        <span
          className="head1"
          style={{ textAlign: "center", color: "red" }}
        >
          T
        </span>

        <span
          className="head1"
          style={{ textAlign: "center", color: "white" }}
        >
          {" "}
        </span>

        <span
          className="head1"
          style={{ textAlign: "center", color: "orange" }}
        >
          S
        </span>

        <span
          className="head1"
          style={{ textAlign: "center", color: "yellow" }}
        >
          H
        </span>

        <span
          className="head1"
          style={{ textAlign: "center", color: "green" }}
        >
          A
        </span>

        <span
          className="head1"
          style={{ textAlign: "center", color: "blue" }}
        >
          R
        </span>

        <span
          className="head1"
          style={{ textAlign: "center", color: "indigo" }}
        >
          M
        </span>

        <span
          className="head1"
          style={{ textAlign: "center", color: "violet" }}
        >
          A
        </span>
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

      <div
        className="table2"
        style={{ marginLeft: "20px" }}
      >
        <Link to="/">HOME</Link> |{" "}
        <Link to="/education"> EDUCATION </Link> |{" "}
        <Link to="/experience"> EXPERIENCE </Link> |{" "}
        <Link to="/activity">
          {" "}
          ACTIVITY AND KNOWLEDGE{" "}
        </Link>{" "}
        | <Link to="/biodata"> BIODATA </Link> |{" "}
        <Link to="/interests">
          {" "}
          INTERESTS AND HOBBIES{" "}
        </Link>
      </div>

      <p
        className="moving-paragraph"
        style={{ marginLeft: "20px" }}
      >
        I am Prikshit Sharma. I live in Kishanpura,
        Dhakoli near Zirakpur.
        <br />

        I belong to Gagret in Una district of Himachal
        Pradesh.

        <br />
        <br />

        <strong>My Contact Details:</strong>

        <br />

        Date of Birth: 17 May 2001

        <br />

        Mobile Number: 8968292215

        <br />

        Email: herculessharma@gmail.com

        <br />

        Linkedin:{" "}
        <a
          href="https://www.linkedin.com/in/prikshit-sharma-72162317b/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Click here
        </a>

        <br />

        Github:{" "}
        <a
          href="https://github.com/learntoCodePrikshit"
          target="_blank"
          rel="noopener noreferrer"
        >
          Click here
        </a>
      </p>

      <div className="contact moving-paragraph">
        <h2>Contact Me</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            style={{ fontSize: "25px" }}
          />

          <br />
          <br />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{ fontSize: "25px" }}
          />

          <br />
          <br />

          <input
            type="tel"
            name="mobile"
            placeholder="Your Mobile number"
            value={formData.mobile}
            onChange={handleChange}
            required
            style={{ fontSize: "25px" }}
          />

          <br />
          <br />

          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            required
            style={{
              width: "300px",
              height: "200px",
              fontSize: "25px",
            }}
          />

          <br />
          <br />

          <button
            type="submit"
            disabled={isSubmitting}
            style={{ fontSize: "25px" }}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>

          {status && (
            <p
              style={{
                fontSize: "22px",
                fontWeight: "bold",
                marginTop: "15px",
              }}
            >
              {status}
            </p>
          )}
        </form>
      </div>
    </>
  );
}

export default Biodata;