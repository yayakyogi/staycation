import React from "react";

import Breadcrumb from "../components/Breadcrumb";

export default function PageTitle(props) {
  return (
    <div className="container mx-auto mt-6 md:mt-10 px-4 md:px-16 block md:flex md:flex-row md:items-center">
      <Breadcrumb breadcrumb={props.breadcrumb} />
      <div className="text-center flex-1 mt-10 md:mt-0">
        <h1 className="text-2xl md:text-4xl text-gray900 mt-6 md:mt-0 mb-0 md:mb-2">
          {props.data.name}
        </h1>
        <span className="text-lg text-gray500">
          {props.data.city}, {props.data.country}
        </span>
      </div>
      <div className="hidden md:block w-1/4" />
    </div>
  );
}
