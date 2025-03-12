import React from "react";
import Title from "./Title";
import SubText from "./SubText";
import Spacer from "./Spacer";
import Button from "./Button";

export default function HeroMolecule({ title, subText, button1, button2 }) {
  return (
    <div className=" hero-wrapper ">

      <div className="container">

        <Title className="title large gradient" tag="h1" text={title} />
        <Spacer height={0} />
        <SubText className="sub-text large" tag="p" text={subText} />
        <Spacer height={0} />

        <Button text={button1} className="btn" />
        <Spacer width={10} display="inline-block" />
        <Button text={button2} className=" btn outline" />
      </div>
    </div>
  );
}
