import React from "react"
import useScrollPosition from '@react-hook/window-scroll';

import Layout from "../components/layout"
import SEO from "../components/seo"

import Header from "../components/header";
import Menu from "../components/menu";
import Hero from "../components/hero"
import AboutUs from "../components/about-us";
import SocialMedia from "../components/social-media";
import OurTeams from "../components/our-teams";
import FAQ from "../components/faq";
import Contact from "../components/contact";

const IndexPage = () => {
  const scrollY = useScrollPosition(30);
  const scrollThreshold = 216; // Height of top header
  let sticking = (scrollY > scrollThreshold);

  return (
    <>
      <Layout sticking={sticking}>
        <SEO title="Home" />
        <Header />
        <Menu sticking={sticking} />
        <Hero />
        <AboutUs />
        <SocialMedia />
        <OurTeams />
        <FAQ />
        <Contact />
      </Layout>
    </>
  );
}

export default IndexPage;