import Link from "next/link";
import Image from "next/image";
import React from "react";

import Star from "../components/Star";
import Button from "../components/Button";

const _ImgFrame = require("../assets/images/img-frame-home.png");
const ic_star = require("../assets/icons/ic_star.svg");

export default function Testimoni(props) {
  return (
    <div
      id="testimonial"
      className="container mx-auto flex justify-start items-center px-4 md:px-20 pt-8 md:pt-0 md:mt-32 pb-24"
    >
      {/* column image */}
      <div
        className="relative hidden md:block mr-16"
        style={{ width: 400, height: 450 }}
      >
        <div
          className="absolute"
          style={{ margin: "0 -15px -15px 0", zIndex: 1 }}
        >
          <Image
            src={props.data.imageUrl}
            alt="img-hero"
            width="360"
            height="500"
          />
        </div>
        <div className="absolute" style={{ margin: "-30px 0 0 -30px" }}>
          <Image src={_ImgFrame} alt="_img-hero" width="360" height="500" />
        </div>
      </div>
      {/* colum caption */}
      <div>
        <h2 className="text-2xl text-gray900 poppins-medium">
          {props.data.name}
        </h2>
        <div className="block mt-6 md:hidden">
          <Image
            src={props.data.imageUrl}
            alt="img-hero"
            width="360"
            height="500"
          />
        </div>
        <Star data={props.data.rate} />
        <p className="text-2xl md:text-3xl text-gray900 mt-3 md:my-2 w-full md:w-4/5 leading-normal">
          {props.data.content}
        </p>
        <p className="text-lg text-gray500 poppins-light mt-2 md:mt-0">
          {props.data.familyName} {props.data.familyOccupation}
        </p>
        <Button
          className="btn mt-12 block md:inline-block px-8 py-4 md:py-2 rounded-full md:rounded-none bg-indigo text-white text-center shadow-2xl"
          hasShadow
          type="link"
          href="#"
        >
          Read Their Story
        </Button>
      </div>
    </div>
  );
}
