import { Helmet } from "react-helmet-async";
import { AboutFAQ } from "@/sections/about/AboutFAQ";
import { AboutHero } from "@/sections/about/AboutHero";
import { FinalAboutCTA } from "@/sections/about/FinalAboutCTA";
import { HowWeWork } from "@/sections/about/HowWeWork";
import { MissionVision } from "@/sections/about/MissionVision";
import { OurValues } from "@/sections/about/OurValues";
import { WhatWeOffer } from "@/sections/about/WhatWeOffer";
import { WhoWeAre } from "@/sections/about/WhoWeAre";
import { WhoWeServe } from "@/sections/about/WhoWeServe";
import { aboutContent } from "@/data/about";

export const About = () => {
  return (
    <>
      <Helmet>
        <title>About | PurePressa</title>
        <meta name="description" content={aboutContent.seoDescription} />
      </Helmet>

      <AboutHero />
      <WhoWeAre />
      <MissionVision />
      <HowWeWork />
      <OurValues />
      <WhatWeOffer />
      <WhoWeServe />
      <AboutFAQ />
      <FinalAboutCTA />
    </>
  );
};
