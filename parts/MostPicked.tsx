import React from "react";
import Image from "next/image";

import Button from "../components/button";

export default function MostPicked(props) {
  return (
    <div
      id="mostpicked"
      className="container mx-auto mt-12 px-8 md:px-16 pt-8 md:pt-0"
    >
      <h1 className="poppins-medium text-2xl text-gray900 mb-9">Most Picked</h1>
      <div className="grid grid-cols-4 md:grid-rows-4 grid-flow-row md:grid-flow-col gap-4">
        {props.data.map((items, index) => {
          return (
            <div
              key={`mostpicked-${index}`}
              className={`${
                index === 0
                  ? "col-span-4 md:row-span-4"
                  : "col-span-4 md:row-span-2"
              }`}
            >
              <div className="rounded-2xl relative overflow-hidden card">
                <div className="absolute z-10 right-0 bg-pink rounded-tr-2xl rounded-bl-2xl px-6 md:px-10 py-1 md:py-2">
                  <span className="text-sm md:text-base poppins-medium text-white">
                    ${items.price}{" "}
                    <span className="text-sm md:text-base poppins-light text-white">
                      per night
                    </span>
                  </span>
                </div>
                <figure>
                  <Image
                    src={items.imageUrl}
                    alt={items.name}
                    width="373"
                    height={`${index === 0 ? "458" : "220"}`}
                  />
                </figure>
                <div className="absolute bottom-4 left-4 z-20 button">
                  <Button
                    type="link"
                    href={`/properties/${items._id}`}
                    className="text-xl poppins-regular text-white"
                  >
                    {items.name}
                  </Button>
                  <br />
                  <span className="text-sm poppins-light text-white">
                    {items.city},{items.country}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
