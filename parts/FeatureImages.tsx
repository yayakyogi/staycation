import Image from "next/image";
import React from "react";

export default function FeatureImages(props) {
  return (
    <div className="container mx-auto mt-0 md:mt-12 px-4 md:px-16 pt-8 md:pt-0">
      <div className="grid grid-cols-2 md:grid-rows-2 grid-flow-row md:grid-flow-col gap-1">
        {props.data.map((item, index) => {
          return (
            <div
              key={`fetureImage-${index}`}
              className={`${
                index === 0
                  ? "col-span-2 md:row-span-2"
                  : "col-span-1 md:row-span-1"
              }`}
            >
              <Image
                src={item.url}
                alt={item._id}
                width={`${index === 0 ? "643" : "487"}`}
                height={`${index === 0 ? "458" : "220"}`}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
