import Image from "next/image";
import React from "react";
import Button from "../components/button";

const ICTranvelers = require("../public/images/ic_traveler.svg");
const ICTreasures = require("../public/images/ic_treasure.svg");
const ICCities = require("../public/images/ic_cities.svg");
const ImgHero = require("../assets/images/img-hero.png");
const _ImgHero = require("../assets/images/img-frame-home.png");

export default function Hero(props) {
  return (
    <div className="container mx-auto block md:flex md:flex-row md:justify-around md:items-center hero-parent">
      {/* column left */}
      <div className="hero px-3 md:px-0">
        <h1 className="text-gray900 text-4xl poppins-bold mb-5 leading-tight md:leading-normal">
          Forget Busy Work,
          <br /> Start Next Vacation
        </h1>
        <p className="text-gray900 md:text-gray500 text-lg md:text-base poppins-light mb-12 md:mb-8 w-80 md:w-96">
          We provide what you need to enjoy your holiday with family. Time to
          make another memorable moments.
        </p>
        <Button
          className="btn block md:inline-block px-8 py-4 md:py-2 rounded-full md:rounded-none bg-indigo text-white text-center shadow-2xl"
          hasShadow
          type="link"
          href="#mostpicked"
        >
          Show Me Now
        </Button>
        <div className="mt-14 md:mt-16 flex flex-row justify-around items-center">
          {/* ic traveler */}
          <div className="mr-0 md:mr-8 w-20 md:w-full flex flex-col items-center md:items-start ">
            <div className="h-4 w-8">
              <Image src={ICTranvelers} alt="ic_traveler" />
            </div>
            <br />
            <span className="text-gray900 poppins-medium text-base text-center">
              80,409{" "}
              <span className="text-gray500 poppins-light">travelers</span>
            </span>
          </div>
          {/* ic treasure */}
          <div className="mr-0 md:mr-8 w-20  md:w-full flex flex-col items-center md:items-start ">
            <div className="h-4 w-8">
              <Image src={ICTreasures} alt="ic_treasure" />
            </div>
            <br />
            <span className="text-gray900 poppins-medium text-base text-center">
              862 <span className="text-gray500 poppins-light">treasure</span>
            </span>
          </div>
          {/* ic cities */}
          <div className="mr-0 md:mr-8 w-20 md:w-full flex flex-col items-center md:items-start ">
            <div className="h-4 w-8">
              <Image src={ICCities} alt="ic_cities" />
            </div>
            <br />
            <span className="text-gray900 poppins-medium text-base text-center">
              1,492 <span className="text-gray500 poppins-light">cities</span>
            </span>
          </div>
        </div>
      </div>
      {/* column right */}
      <div
        className="relative hidden md:block"
        style={{ width: 520, height: 450 }}
      >
        <div
          className="absolute"
          style={{ margin: "-30px 0 0 -30px", zIndex: 1 }}
        >
          <Image src={ImgHero} alt="img-hero" width="520" height="410" />
        </div>
        <div className="absolute" style={{ margin: "0 -15px -15px 0" }}>
          <Image src={_ImgHero} alt="_img-hero" width="520" height="410" />
        </div>
      </div>
    </div>
  );
}
