import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import profile_img from "../../assets/z.jpeg";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-tittle">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              Hi there! I’m Bhavishya, a dedicated and self-taught web developer
              with a strong passion for creating exceptional web applications
              and websites. I’m currently focused on mastering Node.js,
              Express.js, and MongoDB, and I’m excited about the endless
              possibilities in web development.
            </p>
            <p>
              I also have a strong command of Data Structures and Algorithms
              (DSA), Database Management Systems (DBMS), Operating Systems, and
              Computer Networking.
            </p>
            <p>
              I'm also a member of the Rubik's Club at NIT Bhopal and, aside
              from my technical skills, I have expertise in photography and
              videography.
            </p>
          </div>
        </div>
      </div>

      <div className="about-skills">
        <div className="about-skill">
          <p>Java</p> <hr style={{ width: "80%" }} />
        </div>
        <div className="about-skill">
          <p>HTML & CSS</p> <hr style={{ width: "80%" }} />
        </div>
        <div className="about-skill">
          <p>TailWind</p> <hr style={{ width: "65%" }} />
        </div>
        <div className="about-skill">
          <p>JavaScript</p> <hr style={{ width: "75%" }} />
        </div>
        <div className="about-skill">
          <p>ReactJS</p> <hr style={{ width: "60%" }} />
        </div>
        <div className="about-skill">
          <p>NodeJS</p> <hr style={{ width: "15%" }} />
        </div>
        <div className="about-skill">
          <p>ExpressJS</p> <hr style={{ width: "10%" }} />
        </div>
        <div className="about-skill">
          <p>MongoDB</p> <hr style={{ width: "20%" }} />
        </div>
        <div className="about-skill">
          <p>SQL</p> <hr style={{ width: "50%" }} />
        </div>
        <div className="about-skill">
          <p>Git & GitHub</p> <hr style={{ width: "60%" }} />
        </div>
      </div>

      <h1 className="head">Education : </h1>
      <div className="education">
        <div className="edu">
          <h2>Maulana Azad National Institute Of Technology , Bhopal</h2>
          <h3>Master Of Computer Application</h3>
          <p> July 2023 - July 2026</p>
          <p> 8.12 CGPA</p>
        </div>
        <div className="edu">
          <h2>Devi Ahilya University , Indore </h2>
          <h3>Bachelor Of Computer Application</h3>
          <p> July 2019 - July 2022</p>
          <p> 8.30 CGPA</p>
        </div>
      </div>
      <div className="about-achivements">
        <div className="about-achivement">
          <h1>10+</h1>
          <p>Projects Completed</p>
        </div>
        <hr />
        <div className="about-achivement">
          <h1>100+</h1>
          <p>LeetCode Problems Solved</p>
        </div>
        <hr />
        <div className="about-achivement">
          <h1>AIR 317</h1>
          <p>In NIMCET 2023</p>
        </div>
      </div>
    </div>
  );
};

export default About;
