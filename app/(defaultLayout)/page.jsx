"use client";
import data from "../Data.json";
import React from "react";
import Hero from "../ui/Hero/Hero";
import About from "../ui/About/About";
import Iconbox from "../ui/Iconbox/Iconbox";
import Skill from "../ui/Skill/Skill";
import Resume from "../ui/Resume/ResumeSection";

export default function page() {
  const {
    heroData,
    aboutData,
    serviceData,
    skillData,
    portfolioData,
    blogData,
    resumeData,
    reviewData,
    contactData,
    socialData,
  } = data;
  return (
    <>
      <div className="st-height-b80 st-height-lg-b80"></div>
      <Hero data={heroData.homeOneHero} socialData={socialData} />
      <About data={aboutData} data-aos="fade-right" />
      <Iconbox data={serviceData} data-aos="fade-right" />
      <Skill data={skillData} data-aos="fade-right" />
      <Resume data={resumeData} />
    </>
  );
}
