import Image from "next/image";
import React from "react";

export default function Categories(props) {
  return (
    <div
      id="categories"
      className="container mx-auto mt-8 md:mt-16 px-8 md:px-16 pt-8 md:pt-0"
    >
      {props.data.map((item, index) => {
        return (
          <div key={`categories-${index}`} className="mb-6 md:mb-12">
            <h1 className="poppins-medium text-2xl text-gray900 mb-9">
              {item.name}
            </h1>
            <div
              key={`items-${index}`}
              className="flex flex-col md:flex-row justify-between items-center"
            >
              {item.items.map((items, index) => {
                return (
                  <div key={`items-${index}`} className="relative mb-6 md:mb-0">
                    <div
                      className={`${
                        items.isPopular ? "absolute" : "hidden"
                      } bg-pink z-10 right-0 rounded-tr-2xl rounded-bl-2xl px-4 py-1`}
                    >
                      <span className="text-base poppins-medium text-white">
                        Popular <span className="poppins-light">Choice</span>
                      </span>
                    </div>
                    <Image
                      src={items.imageUrl}
                      width="263"
                      height="180"
                      alt={items.name}
                    />
                    <p className="text-xl poppins-regular mt-4 text-gray900 text-center md:text-left">
                      {items.name}
                    </p>
                    <p className="text-sm poppins-light text-gray500 text-center md:text-left">
                      {items.citry} {items.country}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
