import React, { useContext } from "react";
import "./Intro.css";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
import glassesimoji from "../../img/glassesimoji.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import FloatinDiv from "../FloatingDiv/FloatingDiv";
import Github from "../../img/fb.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
const Intro = () => {
  // Transition
  const transition = { duration: 2, type: "spring" };

  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="Intro" id="Intro">
      {/* left name side */}
      <div className="i-left">
        <div className="i-name">
          {/* yahan change hy darkmode ka */}
          <span style={{ color: darkMode ? "white" : "" }}>Hy! I Am</span>
          <span>Tarun kumar</span>
          <span>
          <p>
          A creative professional with 1.5 years of experience in  video editing, and graphic design. Over the past year and a half, I've honed my skills across multiple creative fields, enabling me to deliver visually engaging and impactful designs across web platforms, video content, and print materials.
          </p>
          <p>
          Video Editing:
          I'm also passionate about video editing. I work with tools like Adobe Premiere Pro and After Effects to craft polished video content, from promotional videos to social media clips and full-scale commercials.
          </p>
          <p>
          Graphic Design:
          With a keen eye for design, I also create stunning visual assets for brands. Whether it’s logos, social media graphics, or marketing materials, I bring ideas to life using tools like Photoshop, Corel Draw, Canva, Graphic Design,Photography.
          <br/><br/>Call Me:-<a href="tel:9888945957">9888945957</a>
          </p>
          </span>
        </div>
        <Link to="contact" smooth={true} spy={true}>
          <button className="button i-button">Hire me</button>
        </Link>
        {/* social icons */}
        <div className="i-icons">
          < a href="https://www.facebook.com/share/1DX8TCP4bJ/" target="blank"><img src={Github} className="fb" alt="" /></a>
          < a href="https://profile.indeed.com/?hl=en_IN&co=IN&from=gnav-menu-homepage" target="blank"><img src={LinkedIn} alt="" /></a>
          <a href="https://www.instagram.com/king_of_mrt2024?igsh=OWZseHpjaDB3c2Ri" target="blank"><img src={Instagram} alt="" /></a>
        </div>
      </div>
      {/* right image side */}
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={boy} alt="" />
        {/* animation */}
        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={glassesimoji}
          alt=""
        />

        <motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          className="floating-div"
        >
          <FloatinDiv img={crown} text1="Graphic" text2="Designer" />
        </motion.div>

        {/* animation */}
        <motion.div
          initial={{ left: "9rem", top: "18rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          className="floating-div"
        >
          {/* floatinDiv mein change hy dark mode ka */}
          <FloatinDiv img={thumbup} text1="Best Video" text2="Editor" />
        </motion.div>

        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
