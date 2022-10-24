import React from "react";
import HeroForm from "./HeroForm";
import Img from "../../assets/main-image.png";
import { CenterText, ImgWrapper } from "./Styles";
import { Wrapper } from "../UI/Styles";

const Hero = () => {
  return (
    <div>
      <Wrapper>
        <ImgWrapper>
          <img src={Img} alt="desktop" />
        </ImgWrapper>
        <div>
          <HeroForm />
        </div>
      </Wrapper>
      <CenterText>
        <p>
          A definitive primer for industrials and B2Bs who need a
          mobile-friendly website.
        </p>
      </CenterText>
    </div>
  );
};

export default Hero;
