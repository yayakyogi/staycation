import React from "react";

import Button from "../Button";

export default function Breadcrumb(props) {
  return (
    <ul className="flex text-sm md:text-base w-full md:w-1/4">
      {props.breadcrumb.map((item, index) => {
        return (
          <li
            key={`breadcrumb-${index}`}
            className={`inline-flex items-center ${
              index === props.breadcrumb.length - 1
                ? "text-gray900 poppins-medium"
                : "text-gray500 poppins-light"
            }`}
          >
            <Button type="link" href={item.pageHref}>
              {item.pageTitle}
            </Button>
            <span className="mx-4">
              {index === props.breadcrumb.length - index ? "" : "/"}
            </span>
          </li>
        );
      })}
    </ul>
  );
}
