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
        <h1 className="text-gray900 text-3xl md:text-4xl poppins-bold mb-5 leading-relaxed ">
          Forget Busy Work, Start Next Vacation
        </h1>
        <p className="text-gray500 text-base poppins-light mb-8 w-80 md:w-96">
          We provide what you need to enjoy your holiday with family. Time to
          make another memorable moments.
        </p>
        <Button
          className="btn px-8 py-2 bg-indigo text-white shadow-2xl"
          hasShadow
          type="link"
          href="/about"
        >
          Show Me Now
        </Button>
        <div className="mt-16 md:mt-20 flex flex-row items-center md:justify-betwen">
          {/* ic traveler */}
          <div className="mr-2 md:mr-8">
            <div className="w-8 h-8">
              <Image src={ICTranvelers} alt="ic_traveler" />
            </div>
            <br />
            <span className="text-gray900 poppins-medium text-base">
              80,409{" "}
              <span className="text-gray500 poppins-light">travelers</span>
            </span>
          </div>
          {/* ic treasure */}
          <div className="mr-2 md:mr-8">
            <div className="w-8 h-8">
              <Image src={ICTreasures} alt="ic_treasure" />
            </div>
            <br />
            <span className="text-gray900 poppins-medium text-base">
              862 <span className="text-gray500 poppins-light">treasure</span>
            </span>
          </div>
          {/* ic cities */}
          <div className="mr-2 md:mr-8">
            <div className="w-8 h-8">
              <Image src={ICCities} alt="ic_cities" />
            </div>
            <br />
            <span className="text-gray900 poppins-medium text-base">
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
