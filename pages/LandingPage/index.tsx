import Headers from "../../parts/Header";
import Hero from "../../parts/Hero";
import MostPicked from "../../parts/MostPicked";

import landingPage from "../../dummy/landingPage";

export default function LandingPage() {
  return (
    <>
      <Headers /> <Hero /> <MostPicked data={landingPage.mostPicked} />
    </>
  );
}
