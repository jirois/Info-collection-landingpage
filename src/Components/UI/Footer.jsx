import React from "react";
import { FooterWrapper } from "./Styles";

const Footer = () => {
  const year = new Date().getFullYear();
  const copyText = `Copyright ©${year} INDUSTRIAL STRENGTH MARKETING. All Rights Reserved. Privacy Policy`;
  return (
    <FooterWrapper>
      <p>{copyText}</p>

      <div>
        <span>Call Us: </span>
        <span>1-866-529-8908</span>
      </div>
    </FooterWrapper>
  );
};

export default Footer;
