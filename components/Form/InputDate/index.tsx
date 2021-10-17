import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { DateRange } from "react-date-range";

import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

import formatDate from "../../../utils/formateDate";

const ic_calender = require("../../../assets/icons/ic_calendar.svg");

export default function Date(props) {
  const { value, placeholder, name } = props;
  const [IsShowed, setIsShowed] = useState(false);

  const refDate = useRef(null);
  const handleClickOutSide = (event) => {
    if (refDate && !refDate.current.contains(event.target)) {
      setIsShowed(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutSide);
    return () => {
      document.removeEventListener("mousedown", handleClickOutSide);
    };
  });

  const datePickerChange = (value) => {
    const target = {
      target: {
        value: value.selection,
        name: name,
      },
    };
    props.onChange(target);
  };

  const check = (focus) => {
    focus.indexOf(1) < 0 && setIsShowed(false);
  };

  const displayDate = `${value.startDate ? formatDate(value.startDate) : ""} ${
    value.endDate ? " - " + formatDate(value.endDate) : ""
  }`;

  return (
    <div ref={refDate} className="flex mt-2 relative">
      <div
        className="bg-gray900 rounded-md"
        style={{ width: 45, height: 45, padding: 10 }}
      >
        <Image src={ic_calender} alt="ic_calender" width="25" height="25" />
      </div>
      <input
        readOnly
        name={name}
        value={displayDate}
        className="bg-gray200 text-gray900 poppins-regular text-base text-center focus:outline-none w-full"
        onClick={() => setIsShowed(!IsShowed)}
      />
      {IsShowed && (
        <div className="absolute top-12">
          <DateRange
            editableDateInputs={true}
            onChange={datePickerChange}
            moveRangeOnFisrtSelection={false}
            onRangeFocusChange={check}
            ranges={[value]}
          />
        </div>
      )}
    </div>
  );
}
