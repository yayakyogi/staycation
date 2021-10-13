import Headers from "../../parts/Header";
import Hero from "../../parts/Hero";
import MostPicked from "../../parts/MostPicked";
import Categories from "../../parts/Categories";

import landingPage from "../../dummy/landingPage";

export default function LandingPage() {
  return (
    <>
      <Headers /> <Hero /> <MostPicked data={landingPage.mostPicked} />{" "}
      <Categories data={landingPage.categories} />
    </>
  );
}
