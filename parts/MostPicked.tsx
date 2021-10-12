import React from "react";
import Image from "next/image";

export default function MostPicked(props) {
  // console.log("Data: ", props.data[0].name);

  return (
    <div
      id="mostpicked"
      className="container mx-auto mt-16 px-8 md:px-16 pb-20"
    >
      <h1 className="poppins-medium text-2xl text-gray900 mb-9">Most Picked</h1>
      <div className="grid grid-rows-4 grid-flow-col gap-4">
        {props.data.map((items, index) => {
          return (
            <div
              key={`mostpicked-${index}`}
              className={`${index === 0 ? "row-span-4" : "row-span-2"}`}
            >
              <div className="rounded-2xl relative bg-gradient-to-t card">
                <div className="absolute z-10 right-0 bg-pink rounded-tr-2xl rounded-bl-2xl px-10 py-2">
                  <span className="text-base poppins-medium text-white">
                    ${items.price}{" "}
                    <span className="text-base poppins-light text-white">
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
                <div className="absolute bottom-4 left-4 z-20">
                  <span className="text-xl poppins-regular text-white">
                    {items.name}
                  </span>
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
