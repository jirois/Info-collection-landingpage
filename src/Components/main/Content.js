import React from "react";
import enhance from "../../assets/enhance.png";
import conversion from "../../assets/conversion.png";
import seo from "../../assets/seo.png";
import { Section } from "./ContentElement";

const Content = () => {
  return (
    <Section>
      <div>
        <img src={enhance} alt="" />
        <p>
          Find out how responsive websites enhance users’ mobile experience.
        </p>
      </div>
      <div>
        <img src={conversion} alt="" />
        <p>Learn how responsive websites can dramatically boost conversions.</p>
      </div>
      <div>
        <img src={seo} alt="" />
        <p>See how responsive design improves SEO and streamlines analytics.</p>
      </div>
    </Section>
  );
};

export default Content;
