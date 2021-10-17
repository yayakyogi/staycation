import React from "react";

import BrandIconText from "../components/BrandIcon/";
import Button from "../components/Button";

export default function Footer() {
  return (
    <div id="mostpicked" className="border-t-2 border-gray400">
      <div className="container flex flex-col md:flex-row md:justify-between align-top mx-auto mt-8 md:mt-12 px-4 md:px-16 pt-0 pb-6 md:py-12">
        {/* brand icon text */}
        <div className="w-full md:w-72 mr-0 md:mr-28 mb-4 md:mb-0">
          <BrandIconText />
          <p className="text-base poppins-light text-gray500 mt-2">
            We kaboom your beauty holiday instantly and memorable.
          </p>
        </div>
        {/* menu 1 */}
        <div className="w-full flex flex-col md:inline-block md:w-40 mt-2 mr-0 md:mr-16">
          <p className="text-xl poppins-medium text-gray900 mb-3">
            For Beginners
          </p>
          <Button
            className="text-base poppins-light mb-0 md:mb-2 text-gray500"
            type="link"
            href="#"
          >
            New Account
          </Button>
          <Button
            className="text-base poppins-light mb-0 md:mb-2 text-gray500"
            type="link"
            href="#"
          >
            Start Booking a Room
          </Button>
          <Button
            className="text-base poppins-light mb-0 md:mb-2 text-gray500"
            type="link"
            href="#"
          >
            Use Payments
          </Button>
        </div>
        {/* menu 2 */}
        <div className="w-full flex flex-col md:inline-block md:w-40 mt-2 mr-0 md:mr-16">
          <p className="text-xl poppins-medium text-gray900 mb-3">Explore Us</p>
          <Button
            className="text-base poppins-light mb-0 md:mb-2 text-gray500"
            type="link"
            href="#"
          >
            Our Careers
          </Button>
          <Button
            className="text-base poppins-light mb-0 md:mb-2 text-gray500"
            type="link"
            href="#"
          >
            Privacy
          </Button>
          <Button
            className="text-base poppins-light mb-0 md:mb-2 text-gray500"
            type="link"
            href="#"
          >
            Terms & Conditions
          </Button>
        </div>
        {/* menu 3 */}
        <div className="w-full md:w-60 mt-2">
          <p className="text-xl poppins-medium text-gray900 mb-3">Connect Us</p>
          <p className="text-base poppins-light mb-0 md:mb-2 text-gray500">
            support@staycation.id
          </p>
          <p className="text-base poppins-light mb-0 md:mb-2 text-gray500">
            021 - 2208 - 1996
          </p>
          <p className="text-base poppins-light mb-0 md:mb-2 text-gray500">
            Staycation, Kemang, Jakarta
          </p>
        </div>
      </div>
    </div>
  );
}
