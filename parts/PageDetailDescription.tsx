import React from "react";
import ReactHtmlParser from "react-html-parser";
import Image from "next/image";

export default function PageDetailDescription(props) {
  return (
    <div className="max-w-full md:max-w-xl">
      <h2 className="text-lg md:text-xl text-gray900 poppins-medium">
        About the place
      </h2>
      <div className="text-base poppins-light text-gray500 mt-2 desc">
        {ReactHtmlParser(props.data.description)}
      </div>
      <div
        className={`grid grid-rows-3 md:grid-rows-2 mt-7 grid-flow-col gap-4`}
      >
        {props.data.features.length === 0
          ? "Tidak ada feature"
          : props.data.features.map((item, index) => {
              return (
                <div key={`fetures-${index}`}>
                  <Image
                    src={item.imageUrl}
                    alt={item.name}
                    width="38"
                    height="38"
                  />
                  <br />
                  <span className="text-sm md:text-base poppins-medium text-gray900">
                    {item.qty}{" "}
                  </span>
                  <span className="text-sm md:text-base poppins-light text-gray500">
                    {item.name}
                  </span>
                </div>
              );
            })}
      </div>
    </div>
  );
}
