import "./Hero.css";
import profile_img from "../../assets/z.jpeg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import resume from "../../assets/resume.png";

const Hero = () => {
  return (
    <div id="home" className="hero">
      <img className="profile" src={profile_img} alt="" />
      <h1>
        <span>I'm Bhavishya Parmar,</span> a Frontend developer based in India.
      </h1>
      <p>
        "I am a dedicated and ambitious student at NIT Bhopal, currently
        pursuing Master's in Computer Applications (MCA). "
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            <p onClick={() => setMenu("contact")}></p> Connect With Me{" "}
          </AnchorLink>
        </div>
        <div className="hero-resume">My Resume</div>
      </div>
      <div className="resumeX">
        <img src={resume} alt="" />
      </div>
    </div>
  );
};

export default Hero;
