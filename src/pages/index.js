import React, { useState, useEffect } from "react"
import useScrollPosition from '@react-hook/window-scroll';

import Layout from "../components/layout"
import SEO from "../components/seo"
import useWindowSize from "../hooks/useWindowSize";

import Header from "../components/header";
import Menu from "../components/menu";
import Hero from "../components/hero"
import AboutUs from "../components/about-us";
import SocialMedia from "../components/social-media";
import OurTeams from "../components/our-teams";
import FAQ from "../components/faq";
import Contact from "../components/contact";

const IndexPage = () => {
  const [sticking, setSticking] = useState(false);
  const scrollY = useScrollPosition(30);
  const [scrollThreshold, setScrollThreshold] = useState(200);
  const windowSize = useWindowSize();

  useEffect(() => {
    if (windowSize.width <= 600) {
      // Match change in header subtext to 2rem
      setScrollThreshold((0.11 * windowSize.width) + 91);
    } else if (windowSize.width <= 768) {
      setScrollThreshold((0.11 * windowSize.width) + 112);
    } else {
      setScrollThreshold(200);
    }
  }, [ windowSize.width]);

  useEffect(() => {
    setSticking(scrollY > scrollThreshold);
  }, [scrollY, scrollThreshold]);

  return (
    <>
      <Layout sticking={sticking}>
        <SEO title="Home" />
        <Header />
        <Menu sticking={sticking} />
        <Hero sticking={sticking} />
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