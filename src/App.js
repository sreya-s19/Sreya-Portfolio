import React, { useState, useEffect } from "react";
import "./App.css";
import profilePic from "./profile.jpg";

function App() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.pageYOffset > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="container">
      {/* Top Profile Section */}
      <section className="profile-section">
        <img src={profilePic} alt="Sreya Shyjash" className="profile-photo" />
        <div className="profile-info">
          <h1>Sreya Shyjash</h1>
          <p>2nd Year B.Tech Computer Science & Engineering (Cybersecurity)</p>
          <p>Chinmaya Vishwa Vidyapeeth University</p>
          <div className="contact-info">
            <p>Phone: +91-8921716475</p>
            <p>
              Email: <a href="mailto:sreyashyjash@gmail.com">sreyashyjash@gmail.com</a>
            </p>
            <p>
              LinkedIn: <a href="https://www.linkedin.com/in/sreya-shyjash-213963213/" target="_blank" rel="noopener noreferrer">Sreya Shyjash</a>
            </p>
          </div>
        </div>
      
      </section>

      {/* About Me Section */}
      <section>
        <h2>About Me</h2>
        <p>
          I am an enthusiastic and curious learner currently pursuing my B.Tech in Computer Science & Engineering with a specialization in Cybersecurity at Chinmaya Vishwa Vidyapeeth University.
          <br />
          My academic background is rooted in a strong foundation built during my school times.
          <br />
          I am deeply passionate about cybersecurity, digital forensics, and ethical hacking, and I actively seek out opportunities to expand my knowledge through projects, workshops, and webinars.
          <br />
          Apart from academics, I enjoy dancing and watching movies, which help me maintain a balanced lifestyle. I believe in continuous learning and look forward to contributing meaningfully to the world of technology.
        </p>
      </section>

      {/* Career Goal Section */}
      <section>
        <h2>Career Goal</h2>
        <p>
          My career goal is to become a skilled and ethical cybersecurity professional with expertise in digital forensics, ethical hacking, and cyber law. 
          I aim to work in challenging environments where I can protect digital infrastructure, contribute to national and global cybersecurity efforts, 
          and continuously innovate to stay ahead of emerging threats. I also aspire to educate and raise awareness about cybersecurity practices 
          to build a safer digital world.
        </p>
      </section>

      {/* Education Section */}
      <section>
        <h2>Education</h2>
        <ul>
          <li>Currently pursuing B.Tech in Computer Science & Engineering (Cybersecurity) at Chinmaya Vishwa Vidyapeeth University</li>
          <li>Completed 12th grade from Sunrise English Private School, Abu Dhabi, UAE (CBSE) in March 2024</li>
        </ul>
      </section>

      {/* Projects Section */}
      <section>
        <h2>Projects</h2>
        <ul>
          <li>Personalized Chatbot</li>
          <li>Travel Management System</li>
          <li>Cloud Kitchen System</li>
          <li>Cyber Cafe Management System</li>
        </ul>
      </section>

      {/* Technical Skills Section */}
      <section>
      <h2>Technical Skills</h2>
      <ul>
        <li>Programming Languages: Python, JavaScript, HTML, CSS</li>
        <li>Frameworks & Tools: React, Node.js, Git, GitHub</li>
        <li>Cybersecurity Tools: Wireshark, Burp Suite (if applicable)</li>
        <li>Database: MySQL, MongoDB</li>
      </ul>
    </section>

      {/* Webinars & Workshops Section */}
      <section>
        <h2>Webinars & Workshops</h2>
        <ul>
          <li>Reconfiguration of Global Supply Chain - TCS iON</li>
          <li>Freelancing with Gemini Pro - Bootstack</li>
          <li>Learn Cybersecurity the Right Way - TCS iON & IIT Ropar</li>
          <li>AWS Cloud, Data Science, Networking, Data Analytics, Full Stack Development - B-Learn Academy</li>
          <li>All India IT Innovators Summit - B-Learn Academy</li>
        </ul>
      </section>

      {/* Languages Known Section */}
      <section>
        <h2>Languages Known</h2>
        <ul>
          <li>Hindi (Fluent)</li>
          <li>English (Fluent)</li>
          <li>Malayalam (Fluent)</li>
          <li>French (Reading & Writing)</li>
          <li>Arabic (Reading & Writing)</li>
        </ul>
      </section>

      {/* Achievements Section */}
      <section>
        <h2>Achievements</h2>
        <ul>
          <li>Participant - Smart India Hackathon (Internal Hackathon)</li>
          <li>Certificates from B-Learn Academy Webinars</li>
        </ul>
      </section>

      {/* Certifications */}
      <section>
        <h2>Certifications</h2>
        <ul>
          <li>Cybersecurity Fundamentals – TCS iON</li>
          <li>Introduction to AWS Cloud – B-Learn Academy</li>
        </ul>
      </section>

      {/* Extra-Curricular Activities Section */}
      <section>
        <h2>Extra-Curricular Activities</h2>
        <ul>
          <li>Debate Competition - Chinmaya Vishwa Vidyapeeth (CVV)</li>
          <li>Treasure Hunt - CVV</li>
          <li>Photography Competition - St. Teresa’s College, Ernakulam</li>
          <li>Face Painting Competition - St. Teresa’s College, Ernakulam</li>
          <li>Various other events by CVV</li>
        </ul>
      </section>
      
      {/* Social Media Links / GitHub */}
      <section>
        <h2>Find Me Online</h2>
        <ul>
          <li><a href="https://github.com/sreya-s19" target="_blank" rel="noopener noreferrer">GitHub</a></li>
          <li><a href="https://linkedin.com/in/sreya-shyjash-213963213" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          <li><a href="https://www.instagram.com/srreyya__/?hl=en" target="_blank" rel="noopener noreferrer">Instagram</a></li>
        </ul>
      </section>

      {/* Resume Download */}
        <section>
        <h2>Resume</h2>
        <p>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">Click here to download my resume</a>
        </p>
      </section>

      {/* Footer */}
      <footer>
        <p>Member - IEEE Student Branch (Web Team)</p>
      </footer>

      {/* Back to Top Button */}
      {showButton && (
        <button className="back-to-top" onClick={scrollToTop}>
          ↑ Back to Top
        </button>
      )}
    </div>
  );
}

export default App;
