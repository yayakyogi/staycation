import Headers from "../../parts/Header";
import Hero from "../../parts/Hero";
import MostPicked from "../../parts/MostPicked";
import Categories from "../../parts/Categories";
import Testimoni from "../../parts/Testimoni";
import Footer from "../../parts/Footer";

import landingPage from "../../dummy/landingPage";

export default function LandingPage() {
  return (
    <>
      <Headers />
      <Hero data={landingPage.hero} />
      <MostPicked data={landingPage.mostPicked} />
      <Categories data={landingPage.categories} />
      <Testimoni data={landingPage.testimonial} />
      <Footer />
    </>
  );
}
