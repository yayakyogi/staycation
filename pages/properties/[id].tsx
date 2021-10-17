import React from "react";

import Header from "../../parts/Header";
import PageTitle from "../../parts/PageTitle";
import FeatureImages from "../../parts/FeatureImages";
import PageDetailDescription from "../../parts/PageDetailDescription";
import BookingForm from "../../parts/BookingForm";
import Categories from "../../parts/Categories";
import Testimoni from "../../parts/Testimoni";
import Footer from "../../parts/Footer";

import itemDetails from "../../dummy/itemDetails";

export default function Properties() {
  const breadcrumb = [
    { pageTitle: "Home", pageHref: "/" },
    { pageTitle: "House Details", pageHref: "#" },
  ];
  return (
    <div>
      <Header />
      <PageTitle breadcrumb={breadcrumb} data={itemDetails} />
      <FeatureImages data={itemDetails.imageUrls} />
      <div className="container flex flex-col md:flex-row justify-start items-start mx-auto mt-0 md:mt-12 px-4 md:px-16 pt-8 md:pt-0">
        <PageDetailDescription data={itemDetails} />
        <BookingForm data={itemDetails} />
      </div>
      <Categories data={itemDetails.categories} />
      <Testimoni data={itemDetails.testimonial} />
      <Footer />
    </div>
  );
}
