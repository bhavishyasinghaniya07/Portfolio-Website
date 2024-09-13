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
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p> <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>JavaScript</p> <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>ReactJS</p> <hr style={{ width: "30%" }} />
            </div>
            <div className="about-skill">
              <p>Java</p> <hr style={{ width: "70%" }} />
            </div>
          </div>
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
