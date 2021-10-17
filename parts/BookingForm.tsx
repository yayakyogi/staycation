import React, { useState, useEffect } from "react";
import { InputDate, InputNumber } from "../components/Form";

import Button from "../components/Button";

export default function BookingForm(props) {
  const [data, setData] = useState({
    duration: 1,
    date: {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  });

  const updateData = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    if (data.duration > 1) {
      const startDate = new Date(data.date.startDate);
      const endDate = new Date(data.date.endDate);
      const countDuration = new Date(endDate - startDate).getDate() - 1;
      setData({
        ...data,
        duration: countDuration,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data.date]);

  return (
    <div className="w-full mt-6 md:mt-0 ml-0 md:ml-12 py-4 md:py-16 px-3 md:px-20 rounded-lg border-2 border-gray200">
      <h1 className="text-lg md:text-xl poppins-medium text-gray900 mb-4">
        Start Booking
      </h1>
      <span className="text-2xl md:text-4xl poppins-medium text-teal">
        ${props.data.price}{" "}
        <span className="poppins-extraLight text-gray500">
          per {props.data.unit}
        </span>
      </span>
      <br />
      <label
        htmlFor="duration"
        className="text-base poppins-regular text-gray900 block mt-4"
      >
        How Long you will stay?
      </label>
      <InputNumber
        max={30}
        isSuffixPlural
        name="duration"
        value={data.duration}
        suffix={props.data.unit}
        onChange={updateData}
      />
      <label
        htmlFor="duration"
        className="text-base poppins-regular text-gray900 block mt-6"
      >
        Pick a Date
      </label>
      <InputDate onChange={updateData} name="date" value={data.date} />
      <p className="text-base poppins-light text-gray500 mt-4">
        You will pay{" "}
        <span className="poppins-medium text-gray900">
          ${props.data.price * data.duration} USD
        </span>{" "}
        per{" "}
        <span className="poppins-medium text-gray900">
          {data.duration} {data.duration > 1 ? "nights" : "night"}
        </span>{" "}
      </p>
      <Button
        className="text-lg poppins-medium w-full bg-indigo py-3 mt-10 text-white shadow-2xl"
        onClick={props.startBooking}
      >
        Continue to Book
      </Button>
    </div>
  );
}
