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
              Hi, I’m Bhavishya, a self-taught web developer with a strong focus
              on Node.js, Express.js, and MongoDB. I’m passionate about building
              dynamic, responsive web applications and am always excited to
              learn new technologies to expand my development skills.
            </p>
            <p>
              I have a strong foundation in Data Structures and Algorithms
              (DSA), DBMS, Operating Systems, and Computer Networking, helping
              me solve complex problems effectively.
            </p>
            <p>
              Apart from tech, I’m a member of the Rubik's Club at NIT Bhopal
              and have a passion for photography and videography, combining
              creativity with technology.
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
          <p>ReactJS</p> <hr style={{ width: "70%" }} />
        </div>
        <div className="about-skill">
          <p>NodeJS</p> <hr style={{ width: "75%" }} />
        </div>
        <div className="about-skill">
          <p>ExpressJS</p> <hr style={{ width: "70%" }} />
        </div>
        <div className="about-skill">
          <p>MongoDB</p> <hr style={{ width: "65%" }} />
        </div>
        <div className="about-skill">
          <p>SQL</p> <hr style={{ width: "70%" }} />
        </div>
        <div className="about-skill">
          <p>Git & GitHub</p> <hr style={{ width: "75%" }} />
        </div>
      </div>

      <h1 className="head">Education : </h1>
      <div className="education">
        <div className="edu">
          <h2>Maulana Azad National Institute Of Technology , Bhopal</h2>
          <h3>Master Of Computer Application</h3>
          <p> July 2023 - July 2026</p>
          <p> 8.32 CGPA</p>
        </div>
        <div className="edu">
          <h2>Devi Ahilya University , Indore </h2>
          <h3>Bachelor Of Computer Application</h3>
          <p> July 2019 - July 2022</p>
          <p> 8.30 CGPA</p>
        </div>
        <div className="edu">
          <h2>Madhya Pradesh Board of Secondary Education , Bhopal</h2>
          <h3>Higher Secondary</h3>
          <p> July 2018 - July 2019</p>
          <p> 85.00%</p>
        </div>
        <div className="edu">
          <h2>Madhya Pradesh Board of Secondary Education , Bhopal</h2>
          <h3>High School</h3>
          <p> July 2016 - July 2017</p>
          <p> 89.83%</p>
        </div>
      </div>
      <div className="about-achivements">
        <div className="about-achivement">
          <h1>10+</h1>
          <p>Projects Completed</p>
        </div>
        <hr />
        <div className="about-achivement">
          <h1>400+</h1>
          <p>DSA Problems Solved</p>
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
