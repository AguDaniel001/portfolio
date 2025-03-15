import React from "react";
import Title from "./Title";
import SubText from "./SubText";
import Spacer from "./Spacer";
import Button from "./Button";

export default function HeroMolecule({ title, button1,subText1, subText2, button2 }) {
  return (
    <div className=" hero-wrapper ">

      <div className="container">

        <Title className="title large" tag="h1" text={title} />
        <Spacer height={26} />
        <SubText className="sub-text large" tag="p" text={subText1} />
        <Spacer height={26} />
        <SubText className="sub-text large" tag="p" text={subText2} />
        <Spacer height={50} />

        <Button text={button1} className="btn gradient" />
        <Spacer width={10} display="inline-block" />
        <Button text={button2} className=" btn outline" />
      </div>
    </div>
  );
}
