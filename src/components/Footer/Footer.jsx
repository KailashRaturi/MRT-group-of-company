import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>Mobile No:-9888945957</span>
        <span>Gmail:-tk546929@gmail.com</span>
        <div className="f-icons">
         <a href="https://www.instagram.com/king_of_mrt2024?igsh=OWZseHpjaDB3c2Ri" target="blank"> <Insta color="white" size={"3rem"} /></a>
         <a href="https://www.facebook.com/share/1DX8TCP4bJ/" target="blank"><Facebook color="white" size={"3rem"} /></a>
         <a href="https://profile.indeed.com/?hl=en_IN&co=IN&from=gnav-menu-homepage" target="blank"><Gitub color="white" size={"3rem"} /></a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
