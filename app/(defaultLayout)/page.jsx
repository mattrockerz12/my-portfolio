"use client";
import data from "../Data.json";
import React from "react";
import Hero from "../ui/Hero/Hero";

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
    </>
  );
}
