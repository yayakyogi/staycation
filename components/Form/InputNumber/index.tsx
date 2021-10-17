import React, { useState } from "react";
import propTypes from "prop-types";

export default function Number(props) {
  const { value, min, name, max, placeholder, suffix, isSuffixPlural } = props;

  const onChange = (e) => {
    let value = String(e.target.value);
    if (+value <= max && +value >= min) {
      props.onChange({
        target: {
          name: name,
          value: +value,
        },
      });
    }
  };

  const minus = () => {
    +value > min && onChange({ target: { name: name, value: +value - 1 } });
  };
  const plus = () => {
    +value < max && onChange({ target: { name: name, value: +value + 1 } });
  };
  return (
    <div className="flex mt-2">
      <div
        className="bg-red rounded-md cursor-pointer flex justify-center items-center"
        style={{ width: 45, height: 45, padding: 10 }}
        onClick={minus}
      >
        <span className="text-white text-2xl poppins-bold">-</span>
      </div>
      <input
        readOnly
        name={name}
        value={`${value} ${suffix}${isSuffixPlural && value > 1 ? "s" : ""}`}
        className="bg-gray200 text-gray900 poppins-regular text-base text-center focus:outline-none flex-1"
        placeholder={placeholder ? placeholder : "0"}
        onChange={onChange}
      />
      <div
        className="bg-teal rounded-md cursor-pointer flex justify-center items-center"
        style={{ width: 45, height: 45 }}
        onClick={plus}
      >
        <span className="text-white text-2xl poppins-bold">+</span>
      </div>
    </div>
  );
}

Number.defaultProps = {
  min: 1,
  max: 1,
  suffix: "",
};

Number.propTypes = {
  value: propTypes.oneOfType([propTypes.string, propTypes.number]),
  onChange: propTypes.func,
  isSuffixPlural: propTypes.bool,
  suffix: propTypes.string,
  name: propTypes.string,
  placeholder: propTypes.string,
};
