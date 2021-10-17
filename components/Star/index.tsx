import React, { useState } from "react";
import Image from "next/image";

const star = require("../../assets/icons/ic_star.svg");

export default function Star(props) {
  const { data } = props; // destructuring props
  const number = Math.ceil(data); // bulatkan angka desimal ke atas
  const stars = []; // buat variabel array
  for (let i = 0; i < number; i++) {
    stars.push(star); // push icon star ke dalam array
  }
  return (
    <div className="mt-6 md:mt-10 flex justify-start items-center">
      {stars.map((item, index) => {
        return (
          <Image src={star} key={index} alt="ic_star" width="36" height="36" />
        );
      })}
    </div>
  );
}
